import { Routes as ReactDOMRoutes, Route } from "react-router-dom"
import { ROUTES } from "../../routes"
import { MainPage, NotFoundPage, PortfolioPage } from "../../pages"

export const Routes = () => {
  return (
    <ReactDOMRoutes>
      <Route path={ROUTES.main} element={<MainPage />} />
      <Route index path={ROUTES.project} element={<PortfolioPage />} />
      <Route path={ROUTES.notFound} element={<NotFoundPage />} />
    </ReactDOMRoutes>
  )
}
