import { StrictMode } from 'react'
import { persist, store } from './app'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from './providers'
import { HelmetProvider } from 'react-helmet-async'
import { Routes } from './routes'
import { Layout } from './layout'
import './i18n'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <ThemeProvider>
            <HelmetProvider>
              <Layout>
                <Routes />
              </Layout>
            </HelmetProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
