import type { FC } from 'react'
import { useNavigationList } from '../../../hooks'
import { ProjectsList } from '../projects-list/ProjectsList'
import { Link } from 'react-router-dom'
import styles from './NavItem.module.css'

const ID = 7

type Props = {
  isActiveItem: number
  onChangeItem: (id: number) => void
  isMobile?: boolean
}

export const NavItem: FC<Props> = ({
  isActiveItem,
  onChangeItem,
  isMobile,
}) => {
  const { navigationList, projectsPages } = useNavigationList()
  return (
    <>
      {navigationList.map(({ id, href, text, icon }) => (
        <li
          key={id}
          className={
            isActiveItem === id
              ? `${styles.navItem} ${styles.active}`
              : styles.navItem
          }
          onClick={() => onChangeItem(id)}
          style={{ borderBottom: isActiveItem === id ? 'none' : '' }}
        >
          {id === ID ? (
            <Link className={styles.link} to={href}>
              <p className={styles.text}>{text}</p>
              {icon}
            </Link>
          ) : (
            <a className={styles.link} href={href}>
              <p className={styles.text}>{text}</p>
              {icon}
            </a>
          )}
        </li>
      ))}
      {isMobile && <ProjectsList projectsPages={projectsPages} />}
    </>
  )
}
