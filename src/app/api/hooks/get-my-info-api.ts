import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MyInfoType } from '../../../types/my-info-type'

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
