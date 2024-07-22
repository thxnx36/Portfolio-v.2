import { FC, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './ButtonWithIcon.module.css'

type Props = {
  icon: ReactNode
  className?: string
  onClick?: () => void
}

export const ButtonWithIcon: FC<Props> = ({ onClick, icon, className }) => {
  return (
    <button
      className={classNames(styles.buttonWithIcon, className)}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
