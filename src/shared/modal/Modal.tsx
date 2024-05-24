import type { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { useOverLay } from '../../hooks'
import styles from './Modal.module.css'

type Props = {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const { onCloseContent, contentRef } = useOverLay({ f: onClose, isOpen })

  return createPortal(
    <div className={styles.overlay} onClick={onCloseContent}>
      <div ref={contentRef} className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={'2em'} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('root')!,
  )
}
