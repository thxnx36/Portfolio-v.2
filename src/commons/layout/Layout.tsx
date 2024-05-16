import { FC, ReactNode } from "react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ScrollTopButton } from "../buttons"
import styles from "./Layout.module.css"
import "./css-variables/variables.css"
import "react-multi-carousel/lib/styles.css"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>{children}</div>
      <SpeedInsights />
      <ScrollTopButton />
    </div>
  )
}
