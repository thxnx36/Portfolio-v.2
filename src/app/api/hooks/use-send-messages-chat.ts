import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from '../base'
import { getEnvVars } from '../../../utils'

const env = getEnvVars()

export const sendTelegramMessagelApi = createApi({
  reducerPath: 'sendTelegramMessagelApi',
  baseQuery: apiBaseQuery({
    baseUrl: env.apiTelegramUrl,
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
  }),
})

export const { useSendTelegramMessageMutation } = sendTelegramMessagelApi
