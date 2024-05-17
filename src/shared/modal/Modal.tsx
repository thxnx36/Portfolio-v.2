import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { IoClose } from "react-icons/io5"
import styles from "./Modal.module.css"

type Props = {
  children: ReactNode
  onClose: () => void
}

export const Modal: React.FC<Props> = ({ children, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    modalContentRef.current?.focus()

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const onCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className={styles.overlay} onClick={onCloseModal}>
      <div
        ref={modalContentRef}
        className={styles.content}
        // onClick={e => e.stopPropagation()}
        // tabIndex={-1}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={"2em"} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("root")!,
  )
}
