import { FC } from 'react'
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
          uniqSelectId='select-lang-mob'
        />
      </div>

      <nav>
        <ul className={styles.listItem}>
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
