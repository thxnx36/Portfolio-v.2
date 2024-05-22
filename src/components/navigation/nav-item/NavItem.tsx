import { FC, ReactNode } from 'react'
import styles from './NavItem.module.css'
import { useNavigationList } from "../../../hooks"

type Props = {
  href: string
  icon: ReactNode
  text: string
  active: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const NavItem: FC<Props> = ({ href, icon, text, active, onClick }) => {
  // const { navigationList } = useNavigationList()
  return (
    <li
      className={active ? `${styles.navItem} ${styles.active}` : styles.navItem}
      onClick={onClick}
    >
      <a className={styles.link} href={href}>
        <p className={styles.text}>{text}</p>
        {icon}
      </a>
    </li>
  )
}
