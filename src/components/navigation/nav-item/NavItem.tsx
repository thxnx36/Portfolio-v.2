import { FC } from 'react'
import { useNavigationList } from '../../../hooks'
import { TfiNewWindow } from 'react-icons/tfi'
import { ProjectsList } from '../projects-list/ProjectsList'
import { Link } from 'react-router-dom'
import styles from './NavItem.module.css'

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
          {text === 'About me' ? (
            <Link className={styles.link} to={href}>
              {isMobile ? (
                <>
                  {text} <TfiNewWindow />
                </>
              ) : (
                icon
              )}
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
