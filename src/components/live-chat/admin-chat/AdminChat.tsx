import { Container, Loader, Section } from 'src/shared'
import {
  useAddMessageMutation,
  useDeleteUserByEmailMutation,
  useGetAllUsersQuery,
  useLazyGetMessagesQuery,
  useSocket,
} from 'src/app'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MessageType, UserType } from 'src/types'
import { toast } from 'react-toastify'
import { UsersList } from './users-list/UsersList'
import { ChatWindow } from './chat-window/ChatWindow'
import { FooterChat } from './footer-chat/FooterChat'
import { useChatMessages } from 'src/app'
import styles from './AdminChat.module.css'

export const AdminChat = () => {
  const UUID = self.crypto.randomUUID()
  const socket = useSocket({ userName: 'admin' })

  const { messages, setNewMessages, addNewMessage } = useChatMessages()
  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery()
  const [getMessages, { data: userMessages, isLoading, isFetching }] =
    useLazyGetMessagesQuery()
  const [deleteUser] = useDeleteUserByEmailMutation()
  const [addMessageMutation] = useAddMessageMutation()

  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [content, setContent] = useState<string>('')

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

  const onSelectUser = async (user: UserType) => {
    setSelectedUser(user)
    try {
      await getMessages({ email: user.email }).unwrap()
    } catch {
      toast.error('Failed to fetch messages')
    }
  }

  const onDeleteUser = async (user: UserType) => {
    try {
      await deleteUser({ email: user.email }).unwrap()
      toast.success('User has been deleted')
      refetchUsersList()
      setNewMessages([])
    } catch {
      toast.error('Failed to delete user')
    }
  }

  const onResetSelectedUser = () => setSelectedUser(null)

  const onChangeMessage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setContent(e.target.value)

  const onSendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!selectedUser || !socket) return

    const message = {
      sender: 'admin',
      receiver: selectedUser.email,
      text: content,
      timestamp: new Date().toISOString(),
      messageId: UUID,
    }

    socket.emit('send_message', message)
    await addMessageMutation({ email: selectedUser.email, message })
    setContent('')
  }

  return (
    <Section>
      <Container>
        <div className={styles.inner}>
          <UsersList
            onSelectUser={onSelectUser}
            onDeleteUser={onDeleteUser}
            onResetSelectedUser={onResetSelectedUser}
            usersList={usersList?.users}
            selectedUser={selectedUser}
            refetchUsersList={refetchUsersList}
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
    </Section>
  )
}
