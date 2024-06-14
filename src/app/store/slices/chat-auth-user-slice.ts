import { createSlice } from '@reduxjs/toolkit'

type Props = {
  name: string
  userId: string
  joined: boolean
}

const initialState: Props = {
  joined: false,
  name: '',
  userId: '',
}

const chatAuthUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJoined: (state, action) => {
      state.joined = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },

    setId: (state, action) => {
      state.userId = action.payload
    },

    resetUserData: () => {
      return initialState
    },
  },
})

export const { setJoined, setName, setId, resetUserData } =
  chatAuthUserSlice.actions

export default chatAuthUserSlice.reducer
