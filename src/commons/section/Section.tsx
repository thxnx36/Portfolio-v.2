import { CSSProperties, FC, ReactNode } from "react"
import { AnimatedDiv } from "../animated-div"
import styles from "./Section.module.css"

type Props = {
  children: ReactNode
  id?: string
  style?: CSSProperties
}

export const Section: FC<Props> = ({ children, id, style }) => {
  return (
    <AnimatedDiv id={id} type="section">
      <div style={style} className={styles.section}>
        {children}
      </div>
    </AnimatedDiv>
  )
}
