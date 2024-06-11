import { useChatMessages, useJoinUser } from 'src/app'
import { useFetchUsers } from '.'
import { toast } from 'react-toastify'

export const useManageUser = () => {
  const { email, userId, isJoined, onLeave } = useJoinUser()

  const { messages, setNewMessages, addNewMessage } = useChatMessages()

  const {
    deleteUser,
    refetch,
    userMessages,
    isLoadengMessages,
    isFetchingNessages,
    isErrorMessages,
    isLoadingDelete,
  } = useFetchUsers({ userId, skipFetchUsersList: true })

  const onDeleteChat = async () => {
    try {
      await deleteUser({ userId }).unwrap()
      onLeave()
      setNewMessages([])
      toast.success('Chat has been deleted')
    } catch {
      toast.error('Failed to delete chat')
    }
  }

  return {
    email,
    userId,
    isJoined,
    messages,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    refetch,
    userMessages,
    isLoadengMessages,
    isFetchingNessages,
    isErrorMessages,
    isLoadingDelete,
  }
}
