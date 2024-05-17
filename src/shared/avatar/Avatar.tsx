import { CSSProperties, FC } from "react"
import styles from "./Avatar.module.css"

type Props = {
  src: string
  withBorder?: boolean
  sx?: CSSProperties
}
export const Avatar: FC<Props> = ({ src, withBorder, sx }) => {
  return (
    <div
      style={sx}
      className={
        withBorder ? `${styles.photo} ${styles.withBorder}` : styles.photo
      }
    >
      <img src={src} alt="User-photo" />
    </div>
  )
}
