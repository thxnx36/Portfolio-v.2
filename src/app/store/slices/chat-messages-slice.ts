import { createSlice } from '@reduxjs/toolkit'
import { MessageType } from 'src/types'

type Props = {
  messages: MessageType[]
}

const initialState: Props = {
  messages: [],
}

const chatMessagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
      })
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    clearMessages: state => {
      state.messages = []
    },
  },
})

export const { addMessage, setMessages, clearMessages } =
  chatMessagesSlice.actions

export default chatMessagesSlice.reducer
