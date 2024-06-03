import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from 'src/providers'

export const Toast = () => {
  const { theme } = useContext(ThemeContext)

  return <ToastContainer position='top-right' autoClose={3000} theme={theme} />
}
