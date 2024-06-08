import type { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverLay } from 'src/hooks'
import { CloseButton } from '../buttons'
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
        <CloseButton className={styles.closeButton} onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById('root')!,
  )
}
