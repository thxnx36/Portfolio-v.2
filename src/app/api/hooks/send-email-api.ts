import { createApi } from "@reduxjs/toolkit/query/react"
import { sendEmailPayloadType } from "../../../types/send-email-payload-type"
import { apiBaseQuery } from "../api-base-query"

export const sendEmailApi = createApi({
  reducerPath: "sendEmailApi",
  baseQuery: apiBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: build => ({
    postEmail: build.mutation<void, sendEmailPayloadType>({
      query: ({ name_from, message, email_from }) => {
        const data = new URLSearchParams({
          service_id: import.meta.env.VITE_SERVICE_ID,
          template_id: import.meta.env.VITE_TEMPLATE_ID,
          user_id: import.meta.env.VITE_USER_ID,
          name_from,
          email_from,
          message,
        }).toString()

        return {
          url: "/",
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data,
        }
      },
    }),
  }),
})

export const { usePostEmailMutation } = sendEmailApi
