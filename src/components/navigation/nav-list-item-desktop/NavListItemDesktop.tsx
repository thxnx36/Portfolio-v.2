import type { FC } from 'react'
import { NavItem } from '../nav-item/NavItem'
import styles from './NavListItemDesktop.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: number
}

export const NavListItemDesktop: FC<Props> = ({
  onChangeItem,
  isActiveItem,
}) => {
  return (
    <ul className={styles.navListItemContainer}>
      <NavItem onChangeItem={onChangeItem} isActiveItem={isActiveItem} />
    </ul>
  )
}
