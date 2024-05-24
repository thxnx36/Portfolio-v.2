import type { FC, ReactNode } from 'react'
import { useOverLay } from '../../hooks'
import styles from './Drawer.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  side: 'left' | 'right'
}

export const Drawer: FC<Props> = ({ isOpen, onClose, side, children }) => {
  const { contentRef, onCloseContent } = useOverLay({ f: onClose, isOpen })

  const sideClass = side === 'left' ? styles.drawerLeft : styles.drawerRight

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onCloseContent}></div>
      )}
      <div
        className={`${styles.drawer} ${sideClass} ${isOpen ? styles.open : ''}`}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}
