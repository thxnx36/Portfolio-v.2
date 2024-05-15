import { MainPage, NotFoundPage, PortfolioPage } from "./pages"
import { ThemeProvider } from "./providers"
import { Routes, Route } from "react-router-dom"
import { ROUTES } from "./routes"
import "./App.css"
import "./variables.css"
import "react-multi-carousel/lib/styles.css"

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="app-wrapper">
          <Routes>
            <Route path={ROUTES.main} element={<MainPage />} />
            <Route index path={ROUTES.project} element={<PortfolioPage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
