import type { FC } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { classNames } from 'src/utils'
import styles from './BurgerButton.module.css'

type Props = {
  onClick: () => void
  className?: string
}
export const BurgerButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button className={classNames(styles.burgerButton, className)}>
      <RxHamburgerMenu size='1.4em' onClick={onClick} />
    </button>
  )
}
