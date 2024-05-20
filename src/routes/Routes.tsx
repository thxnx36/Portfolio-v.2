import { lazy, Suspense } from 'react'
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom'
import { ROUTES } from '../constans'
import { MainPage } from '../pages'

const PortfolioPage = lazy(
  () => import('../pages/portfolio-page/PortfolioPage'),
)
const NotFoundPage = lazy(() => import('../pages/not-found-page/NotFoundPage'))

const AboutMePage = lazy(() => import('../pages/about-me-page/AboutMePage'))

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
