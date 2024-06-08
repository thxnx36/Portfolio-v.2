import { configureStore } from '@reduxjs/toolkit'
import { sendEmailApi, sendTelegramMessagelApi } from '../api'
import { chatMessagesReducer } from './slices'

const store = configureStore({
  reducer: {
    messages: chatMessagesReducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [sendTelegramMessagelApi.reducerPath]: sendTelegramMessagelApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      sendEmailApi.middleware,
      sendTelegramMessagelApi.middleware,
    ]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
