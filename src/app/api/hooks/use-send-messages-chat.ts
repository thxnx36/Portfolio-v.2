import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from '../api-base-query'
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
          url: `${env.apiTelegramKey}/sendMessage?chat_id=${env.apiTelegramChatId}&text=${message}`,
          method: 'post',
        }
      },
    }),
  }),
})

export const { useSendTelegramMessageMutation } = sendTelegramMessagelApi
