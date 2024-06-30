import type { FC } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './BurgerButton.module.css'

type Props = {
  onClick: () => void
  className?: string
}
export const BurgerButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button
      className={
        className ? `${styles.burgerButton} ${className}` : styles.burgerButton
      }
    >
      <RxHamburgerMenu size='1.4em' onClick={onClick} />
    </button>
  )
}
