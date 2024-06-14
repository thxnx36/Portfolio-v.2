import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChatHead } from './chat-head/ChatHead'
import { ChatFooter } from './chat-footer/ChatFooter'
import { ChatJoin } from './chat-join/ChatJoin'
import { useTranslation } from 'react-i18next'
import { ChatMessages } from './chat-messages/ChatMessages'
import { IoChatbubbles } from 'react-icons/io5'
import { useAuthUser, useSocketApi } from 'src/app'
import { soundSendMessage, soundResponseMessage } from 'src/assets'
import { KEY, CLOSE, OPEN, MESSAGE_LENGTH, ADMIN } from 'src/constants'
import { useLocalStorage, useChatManagement } from 'src/hooks'
import { Button, Loader } from 'src/shared'
import { playSoundsInChat } from 'src/utils'
import { MessageType } from 'src/types'
import { v4 as uuidv4 } from 'uuid'
import { NotificationIcon } from './chat-notification-icon/NotificationIcon'
import styles from './UserChat.module.css'

export const UserChat = () => {
  const messagesContainerRef = useRef<HTMLUListElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { t } = useTranslation()

  const { userName, userId, isJoined } = useAuthUser()

  const {
    messages,
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDeleteChat,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    refetchUserById,
  } = useChatManagement({ skipFetchUsersList: true, userId })

  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false)
  const [isZoomWindow, setIsZoomWindow] = useState<boolean>(false)
  const [isShowNotification, setIsShowNotification] = useState<boolean>(false)
  const [notificationCount, setNotificationCount] = useState<number>(0)

  const isOpenChat = openChat === OPEN

  const socket = useSocketApi({
    userName: userName,
    connectSocket: isJoined,
  })

  useEffect(() => {
    if (userName) refetchUserById()
  }, [userName, refetchUserById])

  useEffect(() => {
    if (isErrorMessages) onLeave()
  }, [isErrorMessages, onLeave])

  useEffect(() => {
    if (!messagesContainerRef.current) return
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight
  }, [openChat, messages])

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }, [textareaContent])

  useEffect(() => {
    if (isShowWarning) {
      const timeoutId = setTimeout(() => setIsShowWarning(false), 1500)

      return () => clearTimeout(timeoutId)
    }
  }, [isShowWarning])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!userMessages?.messages) return

    setNewMessages(userMessages?.messages)
  }, [userMessages])

  useEffect(() => {
    if (!socket) return

    const handleResponse = (message: MessageType) => {
      addNewMessage(message)

      if (message.receiver === userId) {
        playSoundsInChat(soundResponseMessage)

        if (!isOpenChat) {
          setIsShowNotification(true)
          setNotificationCount(prevCount => prevCount + 1)
        }
      }
    }

    socket.on('response', handleResponse)

    return () => {
      socket.off('response', handleResponse)
    }
  }, [userId, socket, isOpenChat])

  const onToggleChat = useCallback(() => {
    setOpenChat(isOpenChat ? CLOSE : OPEN)
    setIsShowNotification(false)
    setNotificationCount(0)
  }, [isOpenChat, setOpenChat])

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
        sender: userId,
        receiver: ADMIN,
        text: textareaContent,
        timestamp: new Date().toISOString(),
        messageId: uuidv4(),
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

  const onToogleZoomWindow = () => setIsZoomWindow(prevZoom => !prevZoom)

  const isDisabledButton = !textareaContent.trim()
  const isLoading =
    isLoadingMessages || isFetchingMessages || isLoadingDeleteChat

  return (
    <>
      <div className={styles.openButton}>
        <Button
          onClick={onToggleChat}
          text='Live Chat'
          icon={<IoChatbubbles size={'1.2em'} />}
        />
        {isShowNotification && <NotificationIcon count={notificationCount} />}
      </div>

      {isOpenChat && (
        <div
          className={
            isZoomWindow ? `${styles.chat} ${styles.zoomWindow}` : styles.chat
          }
        >
          <ChatHead
            onToggleChat={onToggleChat}
            onDeleteChat={onDeleteChat}
            onToogleZoomWindow={onToogleZoomWindow}
            isJoinedUser={isJoined}
          />
          {isJoined ? (
            isLoading ? (
              <Loader />
            ) : (
              <>
                <ChatMessages
                  ref={messagesContainerRef}
                  messages={messages}
                  adminSender={ADMIN}
                  userSender={userId}
                  userName={userName}
                />
                {isShowWarning && (
                  <span className={styles.lengthWarning}>
                    {t('toast.warning.LENGTH_TEXT')}
                  </span>
                )}
                <ChatFooter
                  textareaRef={textareaRef}
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
