import { useState } from 'react'
import { toast } from 'react-toastify'
import { useChatMessages, useAuthUser } from 'src/app'
import { UserType } from 'src/types'
import { useFetchUsers } from '.'

type Props = {
  skipFetchUsersList: boolean
  userId?: string
}

export const useChatManagement = ({ skipFetchUsersList, userId }: Props) => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const { onLeave } = useAuthUser()
  const { messages, setNewMessages, addNewMessage } = useChatMessages()

  const {
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDelete,
    userById,
    isLoadingUserById,
    isFetchingUserById,
    usersList,
    deleteUser,
    refetchUserById,
    getUserById,
    refetchUsersList,
  } = useFetchUsers({ skipFetchUsersList, userId })

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
      await deleteUser({ userId: user.userId }).unwrap()
      refetchUsersList()
      setNewMessages([])
      setSelectedUser(null)
      toast.success('User has been deleted')
    } catch {
      toast.error('Failed to delete user')
    }
  }

  const onDeleteChat = async () => {
    try {
      await deleteUser({ userId: userId! }).unwrap()
      onLeave()
      setNewMessages([])
      toast.success('Chat has been deleted')
    } catch {
      toast.error('Failed to delete chat')
    }
  }

  const onResetSelectedUser = () => setSelectedUser(null)

  const refetchUsers = () => {
    onResetSelectedUser()
    refetchUsersList()
  }

  return {
    selectedUser,
    messages,
    usersList,
    userById,
    isLoadingUserById,
    isFetchingUserById,
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDelete,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    onSelectUser,
    onDeleteUser,
    refetchUsers,
    onResetSelectedUser,
    deleteUser,
    refetchUserById,
    getUserById,
    refetchUsersList,
  }
}
