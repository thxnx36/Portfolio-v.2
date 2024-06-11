import { ChatHead } from './chat-head/ChatHead'
import { ChatFooter } from './chat-footer/ChatFooter'
import { ChatJoin } from './chat-join/ChatJoin'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ChatMessages } from './chat-messages/ChatMessages'
import { IoChatbubbles } from 'react-icons/io5'
import {
  useChatMessages,
  useDeleteUserByUserIdMutation,
  useGetUserByIdQuery,
  useJoinUser,
  useSocket,
} from 'src/app'
import { soundSendMessage, soundResponseMessage } from 'src/assets'
import { KEY, CLOSE, OPEN, MESSAGE_LENGTH, ADMIN } from 'src/constants'
import { useLocalStorage } from 'src/hooks'
import { Button, Loader } from 'src/shared'
import { playSoundsInChat } from 'src/utils'
import { MessageType } from 'src/types'
import styles from './UserChat.module.css'

export const UserChat = () => {
  const UUID = self.crypto.randomUUID()
  const messagesContainerRef = useRef<HTMLUListElement>(null)

  const { t } = useTranslation()
  const { messages, setNewMessages, addNewMessage } = useChatMessages()
  const { email, userId, isJoined, onLeave } = useJoinUser()

  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false)
  const [isZoomWindow, setIsZoomWindow] = useState<boolean>(false)

  const socket = useSocket({ userName: email })

  const [deleteUser] = useDeleteUserByUserIdMutation()
  const {
    data: userMessages,
    isLoading: isLoadengMessages,
    isFetching: isFetchingNessages,
    refetch,
  } = useGetUserByIdQuery({ userId }, { skip: !userId.length })

  const onToggleChat = () => setOpenChat(openChat === OPEN ? CLOSE : OPEN)

  const onToogleZoomWindow = () => setIsZoomWindow(prev => !prev)

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
        receiver: ADMIN,
        text: textareaContent,
        timestamp: new Date().toISOString(),
        messageId: UUID,
      }

      socket.emit('send_message', message)
      playSoundsInChat(soundSendMessage)
      setTextareaContent('')
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    if (userMessages?.messages) {
      setNewMessages(userMessages?.messages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMessages])

  useEffect(() => {
    if (socket) {
      socket.on('response', (message: MessageType) => {
        addNewMessage(message)
        if (message.receiver === email) {
          playSoundsInChat(soundResponseMessage)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, socket])

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
            onLeaveChat={onLeave}
            onToggleChat={onToggleChat}
            onToogleZoomWindow={onToogleZoomWindow}
            isZoomWindow={isZoomWindow}
            isJoinedUser={isJoined}
          />
          {isJoined ? (
            isLoadengMessages || isFetchingNessages ? (
              <Loader />
            ) : (
              <>
                <ChatMessages
                  ref={messagesContainerRef}
                  messages={messages}
                  adminSender={ADMIN}
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
            <ChatJoin />
          )}
        </div>
      )}
    </>
  )
}
