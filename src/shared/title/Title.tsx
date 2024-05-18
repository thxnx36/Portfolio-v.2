import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Title.module.css"

export type Props = {
  children: ReactNode
  tag?: "h1" | "h2" | "h3" | "h4" | "h5"
  size?: "xs" | "sm" | "lg"
  fontWeight?: "normal" | "regular" | "bold"
  sx?: CSSProperties
}

export const Title: FC<Props> = ({ children, tag, size, fontWeight, sx }) => {
  const Tag = tag || "h1"
  const className = `${styles.title} ${size ? styles[size] : ""} ${fontWeight ? styles[fontWeight] : ""}`

  return (
    <Tag style={sx} className={`${styles.title} ${className}`}>
      {children}
    </Tag>
  )
}
