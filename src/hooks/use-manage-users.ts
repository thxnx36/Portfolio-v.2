import { useState } from 'react'
import { toast } from "react-toastify"
import {
    useChatMessages,
  useDeleteUserByUserIdMutation,
  useGetAllUsersQuery,
  useLazyGetUserByIdQuery,
} from 'src/app'
import { UserType } from 'src/types'

export const useManageUsers = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const { messages, setNewMessages, addNewMessage } = useChatMessages()
  
  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery()
  const [getUserById, { data: user, isLoading, isFetching }] =
    useLazyGetUserByIdQuery()
  const [deleteUser] = useDeleteUserByUserIdMutation()

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
}
