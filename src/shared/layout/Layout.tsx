import { FC, ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ScrollTopButton } from '../buttons'
import { Toast } from '../toast'
import { useSpinner } from '../../hooks'
import styles from './Layout.module.css'
import './root-css/variables.css'
import './root-css/index.css'
import './root-css/spinner.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  // useSpinner()
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>{children}</div>
      <SpeedInsights />
      <ScrollTopButton />
      <Toast />
    </div>
  )
}
