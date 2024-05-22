import { FC } from 'react'
import { Switcher } from '../../../shared'
import { IoMoonSharp } from 'react-icons/io5'
import { FaSun } from 'react-icons/fa6'
import { HiMiniLanguage } from 'react-icons/hi2'
import { NavItem } from '../nav-item/NavItem'
import styles from './NavListItemMobile.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: number
  onChangeTheme: () => void
  checked: boolean
  isMobile?: boolean
}

export const NavListItemMobile: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  onChangeTheme,
  checked,
  isMobile,
}) => {
  return (
    <>
      <div className={styles.toolbar}>
        <Switcher
          checked={checked}
          checkedIcon={<FaSun />}
          uncheckedIcon={<IoMoonSharp />}
          uniqueId='switch-theme-sidebar'
          onChange={onChangeTheme}
        />
        <button>
          <HiMiniLanguage size='2em' />
        </button>
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
