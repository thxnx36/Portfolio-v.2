import { configureStore } from '@reduxjs/toolkit'
import { sendEmailApi, myInfoApi } from '../api'

const store = configureStore({
  reducer: {
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [myInfoApi.reducerPath]: myInfoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      sendEmailApi.middleware,
      myInfoApi.middleware,
    ]),
})

export default store
