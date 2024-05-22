import { FC, ReactNode } from 'react'
import { useOverLay } from '../../hooks'
import styles from './SideBar.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  side: 'left' | 'right'
}

export const SideBar: FC<Props> = ({ isOpen, onClose, side, children }) => {
  const { contentRef, onCloseContent } = useOverLay({ f: onClose, isOpen })

  const sideClass = side === 'left' ? styles.sidebarLeft : styles.sidebarRight

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onCloseContent}></div>
      )}
      <div
        className={`${styles.sidebar} ${sideClass} ${isOpen ? styles.open : ''}`}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}
