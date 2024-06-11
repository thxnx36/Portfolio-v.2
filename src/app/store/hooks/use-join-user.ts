import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setEmail, setJoined, setUserId, resetUserData } from '../slices'

export const useJoinUser = () => {
  const dispatch = useDispatch()
  const email = useSelector((state: RootState) => state.userAuth.email)
  const isJoined = useSelector((state: RootState) => state.userAuth.joined)
  const userId = useSelector((state: RootState) => state.userAuth.userId)

  const setUserEmail = (email: string) => dispatch(setEmail(email))
  const setJoinedUser = (join: boolean) => dispatch(setJoined(join))
  const setIdUser = (userId: string) => dispatch(setUserId(userId))
  const onLeave = () => dispatch(resetUserData())

  return {
    email,
    userId,
    isJoined,
    setUserEmail,
    setJoinedUser,
    setIdUser,
    onLeave,
  }
}
