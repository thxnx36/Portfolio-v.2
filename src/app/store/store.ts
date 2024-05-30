import { configureStore } from '@reduxjs/toolkit'
import { sendEmailApi, sendTelegramMessagelApi } from '../api'

const store = configureStore({
  reducer: {
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [sendTelegramMessagelApi.reducerPath]: sendTelegramMessagelApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      sendEmailApi.middleware,
      sendTelegramMessagelApi.middleware,
    ]),
})

export default store
