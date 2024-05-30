import type { FC, ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useSpinner } from 'src/hooks'
import { Toast } from 'src/shared'
import styles from './Layout.module.css'
import './root-css/variables.css'
import './root-css/index.css'
import './root-css/spinner.css'
import './root-css/reset.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  useSpinner()
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>{children}</div>
      <SpeedInsights />
      <Toast />
    </div>
  )
}
