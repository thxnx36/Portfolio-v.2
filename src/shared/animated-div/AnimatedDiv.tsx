import { FC, ReactNode } from "react"
import { useAnimatedDiv } from "../../hooks"
import styles from "./AnimatedDiv.module.css"

type Props = {
  children: ReactNode
  tag?: "div" | "section"
  id?: string
  animated?: boolean
}

export const AnimatedDiv: FC<Props> = ({
  children,
  tag,
  id,
  animated = true,
}) => {
  const { isVisible, animatedDivRef } = useAnimatedDiv()

  const Tag = tag || "section"

  return (
    <>
      <Tag
        id={id}
        ref={animatedDivRef}
        className={
          animated
            ? `${styles.animatedDiv} ${isVisible ? styles.show : ""}`
            : ""
        }
      >
        {children}
      </Tag>
    </>
  )
}
