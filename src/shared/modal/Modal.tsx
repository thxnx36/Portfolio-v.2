import type { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverLay } from 'src/hooks'
import { CloseButton } from '../buttons'
import { MarqueeBackground } from '../marquee-background'
import { AnimatedContainer } from '../animated-container'
import styles from './Modal.module.css'

type Props = {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
  marqueeText?: string
}

export const Modal: FC<Props> = ({
  children,
  isOpen,
  marqueeText,
  onClose,
}) => {
  const { onCloseContent, contentRef } = useOverLay({ onClose, isOpen })

  const ModalContent = (
    <AnimatedContainer ref={contentRef} className={styles.modalContent}>
      <CloseButton className={styles.closeButton} onClick={onClose} />
      {children}
    </AnimatedContainer>
  )

  return createPortal(
    marqueeText ? (
      <MarqueeBackground marqueeText={marqueeText} onClick={onCloseContent}>
        {ModalContent}
      </MarqueeBackground>
    ) : (
      <div className={styles.overlay} onClick={onCloseContent}>
        {ModalContent}
      </div>
    ),
    document.getElementById('root')!,
  )
}
