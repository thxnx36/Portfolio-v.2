import { createApi } from '@reduxjs/toolkit/query/react'
import type { FormType } from 'src/types'
import { apiBaseQuery } from '../base'
import { getEnvVars } from 'src/utils'

const env = getEnvVars()

export const sendEmailApi = createApi({
  reducerPath: 'sendEmailApi',
  baseQuery: apiBaseQuery({
    baseUrl: env.apiMailerUrl,
  }),
  endpoints: build => ({
    postEmail: build.mutation<void, FormType>({
      query: data => {
        return {
          url: '/sendEmail',
          method: 'post',
          data,
        }
      },
    }),
  }),
})

export const { usePostEmailMutation } = sendEmailApi
