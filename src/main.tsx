import { StrictMode } from 'react'
import { store } from './app'
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
        <ThemeProvider>
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
