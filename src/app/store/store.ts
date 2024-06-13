import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authUserReducer from './slices/chat-auth-user-slice'
import { sendEmailApi, liveChatApi } from '../api'
import { chatMessagesReducer } from './slices'

const persistConfig = {
  key: 'userChatAuth',
  storage,
}
const persistedAuthUserReducer = persistReducer(persistConfig, authUserReducer)

export const store = configureStore({
  reducer: {
    userAuth: persistedAuthUserReducer,
    messages: chatMessagesReducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [liveChatApi.reducerPath]: liveChatApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([sendEmailApi.middleware, liveChatApi.middleware]),
})

export const persist = persistStore(store)
