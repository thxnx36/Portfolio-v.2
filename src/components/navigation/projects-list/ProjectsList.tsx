import type { FC } from 'react'
import { useState } from 'react'
import type { ProjectsListType } from '../../../types'
import { Link } from 'react-router-dom'
import { TfiNewWindow } from 'react-icons/tfi'
import { MdArrowDropDown } from 'react-icons/md'
import { MdArrowDropUp } from 'react-icons/md'
import styles from './ProjectsList.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
  projectsPages: ProjectsListType[]
}

export const ProjectsList: FC<Props> = ({ projectsPages }) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)
  const handleDropDown = () => setOpen(prev => !prev)

  return (
    <div className={styles.dropDown}>
      <div onClick={handleDropDown} className={styles.title}>
        <p>{t('navigation.PROJECTS')}</p>
        {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>

      {open && (
        <ul className={styles.list}>
          {projectsPages.map(({ id, name, link }) => (
            <li className={styles.listItem} key={id}>
              <Link to={link}>
                {name} <TfiNewWindow size='.8em' />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
