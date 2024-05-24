import type { ReactNode, FC } from 'react';
import { createContext } from 'react'
import { useGetMyinfoQuery } from '../app/api'
import type { MyInfoType } from '../types'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'

type DataContextProps = {
  data: MyInfoType | undefined
  isLoading: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const DataContext = createContext<DataContextProps>({
  data: undefined,
  isLoading: false,
  error: undefined,
})

type DataProviderProps = {
  children: ReactNode
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const { data, error, isLoading } = useGetMyinfoQuery()

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  )
}
