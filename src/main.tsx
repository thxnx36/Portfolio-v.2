import { StrictMode } from 'react'
import { store } from './app'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './providers'
import { Routes } from './routes'
import { Layout } from './layout'
import './i18n'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <Layout>
              <Routes />
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
