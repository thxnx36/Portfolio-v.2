import { lazy, Suspense } from 'react'
import {
  Routes as ReactDOMRoutes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { MainPage } from 'src/pages'
import { PageSkeleton } from 'src/shared'

const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const AboutMePage = lazy(() => import('../pages/AboutMePage'))
const AdminChatPage = lazy(() => import('../pages/AdminChatPage'))

export const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>
        <ReactDOMRoutes>
          <Route path={ROUTES.main} element={<MainPage />} />
          <Route path={ROUTES.project} element={<PortfolioPage />} />
          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
          <Route path={ROUTES.aboutMe} element={<AboutMePage />} />
          <Route path={ROUTES.admin} element={<AdminChatPage />} />
        </ReactDOMRoutes>
      </Suspense>
    </BrowserRouter>
  )
}
