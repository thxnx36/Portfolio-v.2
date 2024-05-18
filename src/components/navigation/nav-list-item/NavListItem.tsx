import { CSSProperties, FC } from 'react'
import { useNavigationList } from '../../../hooks'
import { NavItem } from '../nav-item/NavItem'
import styles from './NavListItem.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  sx?: CSSProperties
}

export const NavListItem: FC<Props> = ({ onChangeItem, isActiveItem, sx }) => {
  const { navigationList } = useNavigationList()

  return (
    <ul style={sx} className={styles.navListItemContainer}>
      {navigationList.map(({ id, href, text, icon }) => (
        <NavItem
          onClick={() => onChangeItem(id)}
          key={id}
          href={href}
          text={text}
          icon={icon}
          active={isActiveItem(id)}
        />
      ))}
    </ul>
  )
}
