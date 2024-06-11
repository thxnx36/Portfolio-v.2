import { createSlice } from '@reduxjs/toolkit'

type Props = {
  email: string
  userId: string
  joined: boolean
}

const initialState: Props = {
  joined: false,
  email: '',
  userId: '',
}

const joinUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJoined: (state, action) => {
      state.joined = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },

    setUserId: (state, action) => {
      state.userId = action.payload
    },

    resetUserData: () => {
      return initialState
    },
  },
})

export const { setJoined, setEmail, setUserId, resetUserData } = joinUserSlice.actions

export default joinUserSlice.reducer
