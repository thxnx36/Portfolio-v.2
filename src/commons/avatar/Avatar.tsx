import { CSSProperties, FC } from "react"
import styles from "./Avatar.module.css"

type Props = {
  src: string
  withBorder?: boolean
  style?: CSSProperties
}
export const Avatar: FC<Props> = ({ src, withBorder, style }) => {
  return (
    <div
      style={style}
      className={
        withBorder ? `${styles.photo} ${styles.withBorder}` : styles.photo
      }
    >
      <img src={src} alt="User-photo" />
    </div>
  )
}
