import {
  useDeleteChatByUserIdMutation,
  useDeleteUserByUserIdMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
} from 'src/app'

type Props = {
  userId?: string
  skipFetchUsersList: boolean
}

export const useFetchUsers = ({ userId, skipFetchUsersList }: Props) => {
  const [deleteUser, { isLoading: isLoadingDelete }] =
    useDeleteUserByUserIdMutation()

  const [deleteChat, { isLoading: isLoadingDeleteChat }] =
    useDeleteChatByUserIdMutation()

  const [
    getUserById,
    {
      data: userById,
      isLoading: isLoadingUserById,
      isFetching: isFetchingUserById,
    },
  ] = useLazyGetUserByIdQuery()

  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery(
    undefined,
    { skip: skipFetchUsersList },
  )

  const {
    data: userMessages,
    isLoading: isLoadingMessages,
    isFetching: isFetchingMessages,
    isError: isErrorMessages,
    refetch: refetchUserById,
  } = useGetUserByIdQuery({ userId: userId! }, { skip: !userId?.length })

  return {
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDelete,
    userById,
    isLoadingUserById,
    isFetchingUserById,
    isLoadingDeleteChat,
    usersList,
    deleteChat,
    deleteUser,
    refetchUserById,
    getUserById,
    refetchUsersList,
  }
}
