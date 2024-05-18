import { FC, ReactNode } from 'react'
import styles from './NavItem.module.css'
import { ToolTip } from '../../../shared'

type Props = {
  href: string
  icon: ReactNode
  text: string
  active: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const NavItem: FC<Props> = ({ href, icon, text, active, onClick }) => {
  return (
    <li
      className={active ? `${styles.navItem} ${styles.active}` : styles.navItem}
      onClick={onClick}
    >
      <ToolTip sx={{ width: '100%', height: '100%' }} text={text}>
        <a className={styles.link} href={href}>
          {icon}
        </a>
      </ToolTip>
    </li>
  )
}
