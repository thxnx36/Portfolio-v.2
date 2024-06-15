import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Container, Loader, Section } from 'src/shared'
import { useSocketApi } from 'src/app'
import { MessageType } from 'src/types'
import { toast } from 'react-toastify'
import { UsersList } from './users-list/UsersList'
import { ChatWindow } from './chat-window/ChatWindow'
import { FooterChat } from './footer-chat/FooterChat'
import { ADMIN } from 'src/constants'
import { AuthAdmin } from './auth-admin/AuthAdmin'
import { useChatManagement } from 'src/hooks/use-chat-management'
import { IoMenu } from 'react-icons/io5'
import { TbReload } from 'react-icons/tb'
import {
  usePositionChatWindow,
  useSendMessageInChat,
  useTextAreaHeight,
} from 'src/hooks'
import styles from './AdminChat.module.css'

export const AdminChat = () => {
  const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS

  const [password, setPassword] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isOpenUsersList, setIsOpenUsersList] = useState<boolean>(false)

  const socket = useSocketApi({ userName: ADMIN, connectSocket: isAuth })

  const {
    selectedUser,
    messages,
    usersList,
    userById,
    isLoadingUserById,
    isFetchingUserById,
    setNewMessages,
    addNewMessage,
    onSelectUser,
    onDeleteUser,
    refetchUsers,
    onResetSelectedUser,
  } = useChatManagement({ skipFetchUsersList: false })

  const {
    onSendMessage,
    handleKeyDown,
    handleChangeTextArea,
    textareaContent,
    isDisabledButton,
  } = useSendMessageInChat({
    socket,
    sender: ADMIN,
    receiver: selectedUser?.userId!,
  })

  const { messagesContainerRef } = usePositionChatWindow({
    dependencies: [messages, onSelectUser],
  })

  const { textareaRef } = useTextAreaHeight({
    dependencies: [textareaContent],
  })

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (userById?.messages) setNewMessages(userById?.messages)
  }, [userById])

  useEffect(() => {
    if (socket) {
      socket.on('response', (message: MessageType) => {
        addNewMessage(message)
      })
    }
  }, [socket])

  // temporary auth
  const onChangePass = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onLoginAdmin = (e: FormEvent) => {
    e.preventDefault()

    if (password === ADMIN_PASS) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
      toast.error('Incorrect password')
    }
  }

  const onToggleUsersLists = () =>
    setIsOpenUsersList(prevOpenList => !prevOpenList)

  const isLoading = isLoadingUserById || isFetchingUserById

  return (
    <Section style={{ margin: 0 }}>
      {isAuth ? (
        <Container>
          <div className={styles.headButtons}>
            <button onClick={onToggleUsersLists}>
              {<IoMenu size='1.5em' />}
            </button>
            <button onClick={refetchUsers}>{<TbReload size='1.3em' />}</button>
          </div>
          <div className={styles.inner}>
            <UsersList
              onSelectUser={onSelectUser}
              onDeleteUser={onDeleteUser}
              isOpenUsersList={isOpenUsersList}
              onResetSelectedUser={onResetSelectedUser}
              usersList={usersList?.users}
              selectedUser={selectedUser}
            />
            <div className={styles.chat}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <ChatWindow
                    messages={messages}
                    selectedUser={selectedUser}
                    ref={messagesContainerRef}
                  />
                  {selectedUser && (
                    <FooterChat
                      ref={textareaRef}
                      isDisabledButton={isDisabledButton}
                      textAreaValue={textareaContent}
                      onChangeMessage={handleChangeTextArea}
                      onSendMessage={onSendMessage}
                      onKeyDown={handleKeyDown}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      ) : (
        <AuthAdmin
          onChangePass={onChangePass}
          value={password}
          onLogin={onLoginAdmin}
        />
      )}
    </Section>
  )
}
