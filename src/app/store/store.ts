import { configureStore } from '@reduxjs/toolkit'
import { sendEmailApi, myInfoApi, sendTelegramMessagelApi } from '../api'

const store = configureStore({
  reducer: {
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [myInfoApi.reducerPath]: myInfoApi.reducer,
    [sendTelegramMessagelApi.reducerPath]: sendTelegramMessagelApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      sendEmailApi.middleware,
      myInfoApi.middleware,
      sendTelegramMessagelApi.middleware,
    ]),
})

export default store
