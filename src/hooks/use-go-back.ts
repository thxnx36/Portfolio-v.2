import { useNavigate } from 'react-router-dom'

export const useGoBack = (path: number) => {
  const navigate = useNavigate()

  const handleBack = () => navigate(path)

  return { handleBack }
}
