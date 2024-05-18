import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { FC, ReactNode } from 'react'
import styles from './CollapseButton.module.css'

type Props = {
  icon?: ReactNode
  open: boolean
  onClick: () => void
}

export const CollapseButton: FC<Props> = ({ icon, open, onClick }) => {
  return (
    <div className={styles.arrowContainer}>
      <button className={styles.arrow} onClick={onClick}>
        {icon || open ? (
          <MdKeyboardDoubleArrowUp size='1.5em' />
        ) : (
          <MdKeyboardDoubleArrowDown size='1.5em' />
        )}
      </button>
    </div>
  )
}
