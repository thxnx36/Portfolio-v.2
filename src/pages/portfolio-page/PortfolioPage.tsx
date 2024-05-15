import { useEffect } from "react"
import { BrowserTabTitle, Section } from "../../commons"
import { Project } from "../../components/project/Project"
import { useLocation } from "react-router-dom"

export const PortfolioPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Section>
      <Project />
    </Section>
  )
}
