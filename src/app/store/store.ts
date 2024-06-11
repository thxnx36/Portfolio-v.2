import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { sendEmailApi, sendTelegramMessagelApi } from '../api'
import joinUserReducer from './slices/chat-user-slice'
import { chatMessagesReducer } from './slices'

const persistConfig = {
  key: 'userChatAuth',
  storage,
}
const persistedJoinUserReducer = persistReducer(persistConfig, joinUserReducer)

const store = configureStore({
  reducer: {
    userAuth: persistedJoinUserReducer,
    messages: chatMessagesReducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [sendTelegramMessagelApi.reducerPath]: sendTelegramMessagelApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([sendEmailApi.middleware, sendTelegramMessagelApi.middleware]),
})

export const persist = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
