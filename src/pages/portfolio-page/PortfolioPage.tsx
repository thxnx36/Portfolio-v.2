import { useEffect } from 'react'
import { Section } from '../../shared'
import { Project } from '../../components/project/Project'
import { useLocation } from 'react-router-dom'

const PortfolioPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Section animated={false} sx={{ margin: 0 }}>
      <Project />
    </Section>
  )
}

export default PortfolioPage