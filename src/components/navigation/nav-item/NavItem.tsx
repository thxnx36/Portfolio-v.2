import { FC, ReactNode } from 'react'
import styles from './NavItem.module.css'

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
      data-tooltip={text}
    >
      <a className={styles.link} href={href}>
        {icon}
      </a>
    </li>
  )
}
