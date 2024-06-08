import { ChatHead } from './chat-head/ChatHead'
import { ChatFooter } from './chat-footer/ChatFooter'
import { ChatJoin } from './chat-join/ChatJoin'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ChatMessages } from './chat-messages/ChatMessages'
import { IoChatbubbles } from 'react-icons/io5'
import {
  useAddMessageMutation,
  useChatMessages,
  useGetMessagesQuery,
  useSocket,
} from 'src/app'
import { soundSendMessage, soundResponseMessage } from 'src/assets'
import {
  KEY,
  CLOSE,
  OPEN,
  MESSAGE_LENGTH,
  SENDER_ADMIN,
  SENDER_USER,
} from 'src/constants'
import { useLocalStorage } from 'src/hooks'
import { Button, Loader } from 'src/shared'
import { playSoundsInChat } from 'src/utils'
import { MessageType } from 'src/types'
import styles from './UserChat.module.css'

export const UserChat = () => {
  const UUID = self.crypto.randomUUID()

  const messagesContainerRef = useRef<HTMLUListElement>(null)
  const previousMessagesRef = useRef<MessageType[]>([])

  const { t } = useTranslation()
  const { messages, setNewMessages, addNewMessage } = useChatMessages()
  const [email, setEmail] = useLocalStorage(SENDER_USER, '')
  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [isJoined, setIsJoined] = useLocalStorage('joined', 'false')
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false)
  const [isZoomWindow, setIsZoomWindow] = useState<boolean>(false)
  const [userInteracted, setUserInteracted] = useState<boolean>(false)

  const socket = useSocket({ userName: email })

  const [addMessageMutation] = useAddMessageMutation()
  const {
    data: userMessages,
    isLoading: isLoadengMessages,
    isFetching: isFetchingNessages,
    refetch,
  } = useGetMessagesQuery({ email }, { skip: !email.length })

  const onToggleChat = () => setOpenChat(openChat === OPEN ? CLOSE : OPEN)
  const onToogleZoomWindow = () => setIsZoomWindow(prev => !prev)
  const onLeaveChat = () => {
    setIsJoined('false')
    setEmail('')
  }

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    if (value.length <= MESSAGE_LENGTH) {
      setTextareaContent(value)
    } else {
      setIsShowWarning(true)
    }
  }

  const onSendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!socket) return

    if (textareaContent.trim()) {
      const message = {
        sender: email,
        receiver: SENDER_ADMIN,
        text: textareaContent,
        timestamp: new Date().toISOString(),
        messageId: UUID,
      }

      socket.emit('send_message', message)
      await addMessageMutation({ email, message })
      playSoundsInChat(soundSendMessage)
      setTextareaContent('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage(e)
    }
  }

  useEffect(() => {
    if (email) {
      refetch()
    }
  }, [email, refetch])

  useEffect(() => {
    if (userMessages?.user?.messages) {
      setNewMessages(userMessages?.user?.messages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMessages])

  useEffect(() => {
    if (socket) {
      socket.on('response', (message: MessageType) => {
        addNewMessage(message)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }, [openChat, messages, isJoined])

  useEffect(() => {
    if (isShowWarning) {
      const timeoutId = setTimeout(() => setIsShowWarning(false), 1500)

      return () => clearTimeout(timeoutId)
    }
  }, [isShowWarning])

  useEffect(() => {
    const handleUserInteraction = () => setUserInteracted(true)

    document.addEventListener('click', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [])

  useEffect(() => {
    const previousMessages = previousMessagesRef.current

    const newAdminMessages = messages.filter(
      msg =>
        msg.sender === SENDER_ADMIN &&
        !previousMessages.some(prevMsg => prevMsg.messageId === msg.messageId),
    )

    if (newAdminMessages.length > 0 && userInteracted) {
      playSoundsInChat(soundResponseMessage)
    }

    previousMessagesRef.current = messages
  }, [messages, userInteracted])

  const isOpenChat = openChat === OPEN
  const isDisabledButton = !textareaContent.trim()

  return (
    <>
      <div className={styles.openButton}>
        <Button
          onClick={onToggleChat}
          text='Live Chat'
          icon={<IoChatbubbles size={'1.2em'} />}
        />
      </div>

      {isOpenChat && (
        <div
          className={
            isZoomWindow ? `${styles.chat} ${styles.zoomWindow}` : styles.chat
          }
        >
          <ChatHead
            onLeaveChat={onLeaveChat}
            onToggleChat={onToggleChat}
            onToogleZoomWindow={onToogleZoomWindow}
            isZoomWindow={isZoomWindow}
            showExitButton={isJoined}
          />
          {isJoined === 'true' ? (
            isLoadengMessages || isFetchingNessages ? (
              <Loader />
            ) : (
              <>
                <ChatMessages
                  ref={messagesContainerRef}
                  messages={messages}
                  adminSender={SENDER_ADMIN}
                  userSender={email}
                />
                {isShowWarning && (
                  <span className={styles.lengthWarning}>
                    {t('toast.warning.LENGTH_TEXT')}
                  </span>
                )}
                <ChatFooter
                  value={textareaContent}
                  sendMessage={onSendMessage}
                  isDisabledButton={isDisabledButton}
                  onChange={handleChangeTextArea}
                  onKeyDown={handleKeyDown}
                  placeholder={t('input.placeholder.YOUR_MESSAGE')}
                />
              </>
            )
          ) : (
            <ChatJoin setIsJoined={setIsJoined} setEmail={setEmail} />
          )}
        </div>
      )}
    </>
  )
}
