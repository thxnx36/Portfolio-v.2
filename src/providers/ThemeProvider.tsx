import type { ReactNode, FC } from 'react'
import { useEffect, createContext } from 'react'
import { DARK } from 'src/constants'
import { useLocalStorage } from 'src/hooks'

type ThemeContextProps = {
  theme: string
  changeTheme: (theme: string) => void
}

type ThemeProvider = {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  changeTheme: () => {},
})

export const ThemeProvider: FC<ThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', DARK)

  const changeTheme = (theme: string) => setTheme(theme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
