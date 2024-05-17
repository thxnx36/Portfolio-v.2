import { FC, ReactNode } from "react"
import styles from "./SideBar.module.css"

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const SideBar: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <div className={`${styles.sidebar} ${isOpen ? `${styles.open}` : ""}`}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
