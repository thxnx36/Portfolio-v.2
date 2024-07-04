import type { FC } from 'react'
import { NavItem } from '../nav-item/NavItem'
import { Toolbar } from 'src/shared'
import styles from './NavListItemMobile.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: number
  isMobile?: boolean
}

export const NavListItemMobile: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  isMobile,
}) => {
  return (
    <>
      <div className={styles.toolbar}>
        <Toolbar />
      </div>

      <nav>
        <ul>
          <NavItem
            isMobile={isMobile}
            onChangeItem={onChangeItem}
            isActiveItem={isActiveItem}
          />
        </ul>
      </nav>
    </>
  )
}
