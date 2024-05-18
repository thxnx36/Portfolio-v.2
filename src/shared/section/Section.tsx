import { CSSProperties, FC, ReactNode } from "react"
import { AnimatedDiv } from "../animated-div"
import styles from "./Section.module.css"

type Props = {
  children: ReactNode
  id?: string
  sx?: CSSProperties
  animated?: boolean
}

export const Section: FC<Props> = ({ children, id, sx, animated }) => {
  return (
    <AnimatedDiv animated={animated} id={id} tag="section">
      <div style={sx} className={styles.section}>
        {children}
      </div>
    </AnimatedDiv>
  )
}
