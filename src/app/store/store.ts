import { configureStore } from '@reduxjs/toolkit'
import { sendEmailApi } from '../api'

const store = configureStore({
  reducer: {
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sendEmailApi.middleware]),
})

export default store
