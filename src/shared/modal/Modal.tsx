import type { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverLay } from 'src/hooks'
import { CloseButton } from '../buttons'
import { AnimatedContainer } from '../animated-container'
import styles from './Modal.module.css'

type Props = {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const { onCloseContent, contentRef } = useOverLay({ onClose, isOpen })

  return createPortal(
    <div className={styles.overlay} onClick={onCloseContent}>
      <AnimatedContainer ref={contentRef} className={styles.modalContent}>
        <CloseButton className={styles.closeButton} onClick={onClose} />
        {children}
      </AnimatedContainer>
    </div>,
    document.getElementById('root')!,
  )
}
