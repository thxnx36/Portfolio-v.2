import { FC } from 'react'
import { NavigationListType } from '../../../types/navigation-list-type'
import { Container, Switcher } from '../../../shared'
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
  navigationList: NavigationListType[]
}

export const NavListItemMobile: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  onChangeTheme,
  navigationList,
  checked,
}) => {
  return (
    <Container style={{ padding: '5px' }}>
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
      <ul className={styles.listItem}>
        {navigationList.map(({ id, href, text, icon }) => (
          <NavItem
            onClick={() => onChangeItem(id)}
            key={id}
            href={href}
            text={text}
            icon={icon}
            active={isActiveItem === id}
          />
        ))}
      </ul>
    </Container>
  )
}
