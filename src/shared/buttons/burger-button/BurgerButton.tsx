import { FC } from 'react'
import { FaBurger } from 'react-icons/fa6'
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
      <FaBurger size='1.4em' onClick={onClick} />
    </button>
  )
}
