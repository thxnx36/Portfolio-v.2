import { FC, ReactNode, useEffect, useRef, useState } from "react"
import styles from "./AnimatedDiv.module.css"
import { useAnimatedDiv } from "../../hooks"

type Props = {
  children: ReactNode
  type?: "div" | "section"
  id?: string
}

export const AnimatedDiv: FC<Props> = ({ children, type, id }) => {
  const { isVisible, hasAnimated, animatedDivRef } = useAnimatedDiv()

  const Tag = type || "section"

  return (
    <Tag
      id={id}
      ref={animatedDivRef}
      className={`${styles.animatedDiv} ${isVisible || hasAnimated ? `${styles.show}` : ""}`}
    >
      {children}
    </Tag>
  )
}
