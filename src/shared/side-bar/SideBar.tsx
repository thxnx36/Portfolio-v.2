import { FC, ReactNode } from 'react'
import { useOverLay } from '../../hooks'
import styles from './SideBar.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const SideBar: FC<Props> = ({ isOpen, onClose, children }) => {
  const { contentRef, onCloseContent } = useOverLay({ f: onClose, isOpen })

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onCloseContent}></div>
      )}
      <div className={`${styles.sidebar} ${isOpen ? `${styles.open}` : ''}`}>
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}
