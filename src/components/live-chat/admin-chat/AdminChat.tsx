import { Container, Loader, Section } from 'src/shared'
import {
  useDeleteUserByUserIdMutation,
  useGetAllUsersQuery,
  useLazyGetUserByIdQuery,
  useSocket,
} from 'src/app'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MessageType, UserType } from 'src/types'
import { toast } from 'react-toastify'
import { UsersList } from './users-list/UsersList'
import { ChatWindow } from './chat-window/ChatWindow'
import { FooterChat } from './footer-chat/FooterChat'
import { useChatMessages } from 'src/app'
import { ADMIN } from 'src/constants'
import { AuthAdmin } from './auth-admin/AuthAdmin'
import styles from './AdminChat.module.css'

export const AdminChat = () => {
  const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS
  const UUID = self.crypto.randomUUID()
  const socket = useSocket({ userName: ADMIN })

  const { messages, setNewMessages, addNewMessage } = useChatMessages()
  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery()
  const [getUserById, { data: user, isLoading, isFetching }] =
    useLazyGetUserByIdQuery()
  const [deleteUser] = useDeleteUserByUserIdMutation()

  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [content, setContent] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    if (user?.messages) {
      setNewMessages(user?.messages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {
    if (socket) {
      socket.on('response', (message: MessageType) => {
        addNewMessage(message)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])

  const onSelectUser = async (user: UserType) => {
    setSelectedUser(user)
    try {
      await getUserById({ userId: user.userId }).unwrap()
    } catch {
      toast.error('Failed to fetch messages')
    }
  }

  const onDeleteUser = async (user: UserType) => {
    try {
      await deleteUser({ userId: user.userId! }).unwrap()
      toast.success('User has been deleted')
      refetchUsersList()
      setNewMessages([])
      setSelectedUser(null)
    } catch {
      toast.error('Failed to delete user')
    }
  }

  const onResetSelectedUser = () => setSelectedUser(null)

  const refetchUsers = () => {
    onResetSelectedUser()
    refetchUsersList()
  }

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

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

  const onSendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!selectedUser || !socket) return

    const message = {
      sender: ADMIN,
      receiver: selectedUser.email,
      text: content,
      timestamp: new Date().toISOString(),
      messageId: UUID,
    }

    socket.emit('send_message', message)
    setContent('')
  }

  return (
    <Section>
      {isAuth ? (
        <Container>
          <div className={styles.inner}>
            <UsersList
              onSelectUser={onSelectUser}
              onDeleteUser={onDeleteUser}
              onResetSelectedUser={onResetSelectedUser}
              usersList={usersList?.users}
              selectedUser={selectedUser}
              refetchUsersList={refetchUsers}
            />
            <div className={styles.chat}>
              {isLoading || isFetching ? (
                <Loader />
              ) : (
                <>
                  <ChatWindow messages={messages} selectedUser={selectedUser} />
                  {selectedUser && (
                    <FooterChat
                      textAreaValue={content}
                      onChangeMessage={onChangeMessage}
                      onSendMessage={onSendMessage}
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
