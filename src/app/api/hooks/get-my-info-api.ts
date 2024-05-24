import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MyInfoType } from '../../../types'

export const myInfoApi = createApi({
  reducerPath: 'myInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getMyinfo: build.query<MyInfoType, void>({
      query: () => {
        return {
          url: `src/db/db.json`,
          method: 'get',
        }
      },
    }),
  }),
})

export const { useGetMyinfoQuery } = myInfoApi
