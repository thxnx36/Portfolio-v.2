import { lazy, Suspense } from 'react'
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { MainPage } from '../../pages'

const PortfolioPage = lazy(
  () => import('../../pages/portfolio-page/PortfolioPage'),
)
const NotFoundPage = lazy(
  () => import('../../pages/not-found-page/NotFoundPage'),
)

export const Routes = () => {
  return (
    <Suspense>
      <ReactDOMRoutes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route index path={ROUTES.project} element={<PortfolioPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </ReactDOMRoutes>
    </Suspense>
  )
}
