import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addMessage, setMessages } from '../slices'
import { MessageType } from 'src/types'

export const useChatMessages = () => {
  const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => state.messages.messages)

  const addNewMessage = (message: MessageType) => dispatch(addMessage(message))
  const setNewMessages = (messages: MessageType[]) =>
    dispatch(setMessages(messages))

  return { messages, setNewMessages, addNewMessage }
}
