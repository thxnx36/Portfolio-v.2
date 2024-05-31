import type { FC } from 'react'
import { NavItem } from '../nav-item/NavItem'
import { Toolbar } from '../toolbar/Toolbar'
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
        <Toolbar
          uniqueIdForSwitcher='switch-theme-mob'
          uniqueToggletId='toggle-lang-mob'
        />
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
