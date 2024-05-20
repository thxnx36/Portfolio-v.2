import { useEffect } from 'react'
import { Project } from '../../components/project/Project'
import { useLocation } from 'react-router-dom'

const PortfolioPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <Project />
}

export default PortfolioPage
