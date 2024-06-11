import { useState } from 'react'
import { toast } from 'react-toastify'
import { useChatMessages } from 'src/app'
import { UserType } from 'src/types'
import { useFetchUsers } from '.'

export const useManageUsersForAdmin = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const { messages, setNewMessages, addNewMessage } = useChatMessages()

  const {
    user,
    isLoading,
    isFetching,
    usersList,
    deleteUser,
    getUserById,
    refetchUsersList,
  } = useFetchUsers({ skipFetchUsersList: false })

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
      refetchUsersList()
      setNewMessages([])
      setSelectedUser(null)
      toast.success('User has been deleted')
    } catch {
      toast.error('Failed to delete user')
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
    user,
    isLoading,
    isFetching,
    setNewMessages,
    addNewMessage,
    onSelectUser,
    onDeleteUser,
    refetchUsers,
    onResetSelectedUser,
  }
}
