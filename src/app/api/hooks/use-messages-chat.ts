import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from '../base'
// import { getEnvVars } from 'src/utils'
import { AddMessagePayload, UserType, UsersListType } from 'src/types'

// const env = getEnvVars()

const url = 'http://localhost:3000/api/chat'

export const sendTelegramMessagelApi = createApi({
  reducerPath: 'sendTelegramMessagelApi',
  baseQuery: apiBaseQuery({
    baseUrl: url,
  }),
  endpoints: build => ({
    sendTelegramMessage: build.mutation<void, { message: string }>({
      query({ message }) {
        return {
          url: `/sendMessage`,
          method: 'post',
          data: { message },
        }
      },
    }),

    createUser: build.mutation<UserType, { email: string }>({
      query({ email }) {
        return {
          url: `/${email}/create`,
          method: 'post',
        }
      },
    }),

    getAllUsers: build.query<UsersListType, void>({
      query() {
        return {
          url: '/users',
          method: 'get',
        }
      },
    }),

    deleteUserByUserId: build.mutation<void, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}/delete`,
          method: 'delete',
        }
      },
    }),

    getUserById: build.query<UserType, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}`,
          method: 'get',
        }
      },
    }),

    getMessages: build.query<UserType, { email: string }>({
      query({ email }) {
        return {
          url: `/${email}/messages`,
          method: 'get',
        }
      },
    }),

    addMessage: build.mutation<UserType, AddMessagePayload>({
      query({ email, message }) {
        return {
          url: `/add`,
          method: 'post',
          data: { email, message },
        }
      },
    }),
  }),
})

export const {
  useSendTelegramMessageMutation,
  useGetMessagesQuery,
  useLazyGetMessagesQuery,
  useAddMessageMutation,
  useDeleteUserByUserIdMutation,
  useGetAllUsersQuery,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
} = sendTelegramMessagelApi
