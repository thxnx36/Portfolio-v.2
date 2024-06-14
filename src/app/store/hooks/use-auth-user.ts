import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { setName, setJoined, setId, resetUserData } from '../slices'
import { useCallback } from 'react'

export const useAuthUser = () => {
  const dispatch = useDispatch()
  const userName = useSelector((state: RootState) => state.userAuth.name)
  const isJoined = useSelector((state: RootState) => state.userAuth.joined)
  const userId = useSelector((state: RootState) => state.userAuth.userId)

  const setUserName = (email: string) => dispatch(setName(email))
  const setJoinedUser = (join: boolean) => dispatch(setJoined(join))
  const setUserId = (userId: string) => dispatch(setId(userId))
  const onLeave = useCallback(() => dispatch(resetUserData()), [dispatch])

  return {
    userName,
    userId,
    isJoined,
    setUserName,
    setJoinedUser,
    setUserId,
    onLeave,
  }
}
