import { createApi } from '@reduxjs/toolkit/query/react'
import type { sendEmailPayloadType } from '../../../types'
import { apiBaseQuery } from '../api-base-query'
import { getEnvVars } from '../../../utils'

const env = getEnvVars()

export const sendEmailApi = createApi({
  reducerPath: 'sendEmailApi',
  baseQuery: apiBaseQuery({
    baseUrl: env.apiEmailApiUrl,
  }),
  endpoints: build => ({
    postEmail: build.mutation<void, sendEmailPayloadType>({
      query: ({ name_from, message, email_from, reCaptchaToken }) => {
        const data = new URLSearchParams({
          service_id: env.apiServicesId,
          template_id: env.apiTemplateId,
          user_id: env.apiUserId,
          name_from,
          email_from,
          message,
          'g-recaptcha-response': reCaptchaToken as string,
        }).toString()

        return {
          url: '/',
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data,
        }
      },
    }),
  }),
})

export const { usePostEmailMutation } = sendEmailApi
