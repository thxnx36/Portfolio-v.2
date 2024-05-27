import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Project } from '../components'

const PortfolioPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <Project />
}

export default PortfolioPage
