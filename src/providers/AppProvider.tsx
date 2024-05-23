import { ReactNode, FC } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { DataProvider } from './DataProvider'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <DataProvider>{children}</DataProvider>
    </ThemeProvider>
  )
}
