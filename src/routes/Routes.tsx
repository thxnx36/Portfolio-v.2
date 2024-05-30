import { lazy, Suspense } from 'react'
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { MainPage } from 'src/pages'

const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const AboutMePage = lazy(() => import('../pages/AboutMePage'))

export const Routes = () => {
  return (
    <Suspense>
      <ReactDOMRoutes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.project} element={<PortfolioPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        <Route path={ROUTES.aboutMe} element={<AboutMePage />} />
      </ReactDOMRoutes>
    </Suspense>
  )
}
