import { FC } from "react"
import styles from "./Avatar.module.css"

type Props = {
  src: string
  status?: boolean
}
export const Avatar: FC<Props> = ({ src, status }) => {
  return <div className={styles.avatarContainer}>
        <img src={src} alt="profile-avatar" />
  </div>
}
