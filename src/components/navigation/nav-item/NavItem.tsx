import type { FC } from 'react'
import { ProjectsList } from '../projects-list/ProjectsList'
import { Link } from 'react-router-dom'
import { useNavigationList } from 'src/hooks'
import { classNames } from 'src/utils'
import styles from './NavItem.module.css'

const ID = 6

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
          className={classNames(
            styles.navItem,
            isActiveItem === id && styles.active,
          )}
          onClick={() => onChangeItem(id)}
          style={{ borderBottom: isActiveItem === id ? 'none' : '' }}
        >
          {id === ID ? (
            <Link className={styles.link} to={href}>
              <p className={styles.text}>{text}</p>
              <span className={styles.icon}>{icon}</span>
            </Link>
          ) : (
            <a className={styles.link} href={href}>
              <p className={styles.text}>{text}</p>
              <span className={styles.icon}>{icon}</span>
            </a>
          )}
        </li>
      ))}
      {isMobile && <ProjectsList projectsPages={projectsPages} />}
    </>
  )
}
