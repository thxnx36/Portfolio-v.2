import { useDispatch, useSelector } from 'react-redux'
import { addMessage, setMessages } from '../slices'
import { MessageType, RootState } from 'src/types'

export const useChatMessages = () => {
  const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => state.messages.messages)

  const addNewMessage = (message: MessageType) => dispatch(addMessage(message))
  const setNewMessages = (messages: MessageType[]) =>
    dispatch(setMessages(messages))

  return { messages, setNewMessages, addNewMessage }
}
