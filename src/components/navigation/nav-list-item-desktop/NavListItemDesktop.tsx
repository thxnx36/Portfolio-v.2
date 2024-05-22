import { CSSProperties, FC } from 'react'
import { NavItem } from '../nav-item/NavItem'
import { NavigationListType } from '../../../types/navigation-list-type'
import styles from './NavListItemDesktop.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: number
  navigationList: NavigationListType[]
  sx?: CSSProperties
}

export const NavListItemDesktop: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  navigationList,
  sx,
}) => {
  return (
    <ul style={sx} className={styles.navListItemContainer}>
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
  )
}
