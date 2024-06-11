import {
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

  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery(
    undefined,
    { skip: skipFetchUsersList },
  )

  const [getUserById, { data: user, isLoading, isFetching }] =
    useLazyGetUserByIdQuery()

  const {
    data: userMessages,
    isLoading: isLoadengMessages,
    isFetching: isFetchingNessages,
    isError: isErrorMessages,
    refetch,
  } = useGetUserByIdQuery(
    { userId: userId as string },
    { skip: !userId?.length },
  )

  return {
    userMessages,
    isLoadengMessages,
    isFetchingNessages,
    isErrorMessages,
    isLoadingDelete,
    user,
    isLoading,
    isFetching,
    usersList,
    deleteUser,
    refetch,
    getUserById,
    refetchUsersList,
  }
}
