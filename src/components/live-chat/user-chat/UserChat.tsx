import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChatHeadMemoized } from './chat-head/ChatHead'
import { ChatFooter } from './chat-footer/ChatFooter'
import { ChatJoin } from './chat-join/ChatJoin'
import { useTranslation } from 'react-i18next'
import { ChatMessagesMemoized } from './chat-messages/ChatMessages'
import { NotificationIcon } from './chat-notification-icon/NotificationIcon'
import { IoChatbubbles } from 'react-icons/io5'
import { useAuthUser, useSocketApi } from 'src/app'
import { soundResponseMessage } from 'src/assets'
import { KEY, CLOSE, OPEN, ADMIN } from 'src/constants'
import {
  useLocalStorage,
  useChatManagement,
  usePositionChatWindow,
  useDraggable,
} from 'src/hooks'
import { AnimatedContainer, Button, ChatSkeleton } from 'src/shared'
import { classNames, playSoundsInChat } from 'src/utils'
import { MessageType } from 'src/types'
import styles from './UserChat.module.css'

export const UserChat = () => {
  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [isZoomWindow, setIsZoomWindow] = useState<boolean>(false)
  const [isShowNotification, setIsShowNotification] = useState<boolean>(false)
  const [notificationCount, setNotificationCount] = useState<number>(0)

  const isOpenChat = openChat === OPEN

  const { t } = useTranslation()
  const { userName, userId, isJoined: isJoinedUser } = useAuthUser()

  const socket = useSocketApi({
    userName: userName,
    connectSocket: isJoinedUser,
  })

  const {
    messages,
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDeleteChat,
    isLoadingDeleteChatHistory,
    onDeleteChatHistory,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    refetchUserById,
  } = useChatManagement({ skipFetchUsersList: true, userId })

  const { messagesContainerRef } = usePositionChatWindow({
    dependencies: [messages, openChat],
  })

  const chatWindowRef = useDraggable<HTMLDivElement>({
    isVisibleElement: isOpenChat,
  })

  useEffect(() => {
    if (userName) refetchUserById()
  }, [userName, refetchUserById])

  useEffect(() => {
    if (isErrorMessages) onLeave()
  }, [isErrorMessages, onLeave])

  useEffect(() => {
    if (!userMessages?.messages) return

    setNewMessages(userMessages?.messages)
  }, [setNewMessages, userMessages])

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
  }, [userId, socket, isOpenChat, addNewMessage])

  const onToggleChat = useCallback(() => {
    setOpenChat(isOpenChat ? CLOSE : OPEN)
    setIsShowNotification(false)
    setNotificationCount(0)
  }, [isOpenChat, setOpenChat])

  const onToggleZoomWindow = () => setIsZoomWindow(prevZoom => !prevZoom)

  const onLeaveAndDeleteChat = useCallback(() => {
    onDeleteChat()
    setIsZoomWindow(false)
  }, [onDeleteChat])

  const filteredMessages = useMemo(
    () =>
      messages.filter(msg => msg.receiver === userId || msg.sender === userId),
    [messages, userId],
  )

  const showDeleteHistory = !!filteredMessages.length

  const chatHeadProps = useMemo(
    () => ({
      onToggleChat,
      onDeleteChat: onLeaveAndDeleteChat,
      onDeleteChatHistory,
      onToggleZoomWindow,
      isJoinedUser,
      showDeleteHistory,
    }),
    [
      onToggleChat,
      onLeaveAndDeleteChat,
      onDeleteChatHistory,
      isJoinedUser,
      showDeleteHistory,
    ],
  )

  const isLoadingData =
    isLoadingMessages ||
    isFetchingMessages ||
    isLoadingDeleteChat ||
    isLoadingDeleteChatHistory

  return (
    <>
      {!isOpenChat && (
        <div className={styles.openButton}>
          <Button onClick={onToggleChat}>Live Chat {<IoChatbubbles />}</Button>
          {isShowNotification && <NotificationIcon count={notificationCount} />}
        </div>
      )}
      <AnimatePresence>
        {isOpenChat && (
          <AnimatedContainer
            ref={chatWindowRef}
            className={classNames(
              styles.chat,
              isZoomWindow && styles.zoomWindow,
            )}
          >
            <ChatHeadMemoized {...chatHeadProps} />
            {isJoinedUser ? (
              isLoadingData ? (
                <ChatSkeleton />
              ) : (
                <>
                  <ChatMessagesMemoized
                    ref={messagesContainerRef}
                    messages={filteredMessages}
                    adminSender={ADMIN}
                    userName={userName}
                  />
                </>
              )
            ) : (
              <ChatJoin />
            )}
            <ChatFooter
              userId={userId}
              socket={socket}
              isDisabledInput={isLoadingData || !isJoinedUser}
              placeholder={t('input.placeholder.YOUR_MESSAGE')}
            />
          </AnimatedContainer>
        )}
      </AnimatePresence>
    </>
  )
}
