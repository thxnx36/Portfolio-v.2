import type { FC } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { ROUTES } from 'src/constants'
import { Container } from 'src/shared'
import styles from './PortfolioCard.module.css'

type Props = {
  id: number
  src: string
  title: string
  link: string
  project: string
}

export const PortfolioCard: FC<Props> = ({ src, title, project, link, id }) => {
  const formatUrl = (value: string) => value.substring(0, link.length - 1)

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.line}>
          <ul className={styles.dotContainer}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className={styles.browser}>
            <div className={styles.arrows}>
              <IoIosArrowBack size='0.6em' />
              <IoIosArrowForward size='0.6em' />
            </div>
            <div className={styles.searchBar}>
              <CiSearch />
              <span className={styles.urls}>{formatUrl(link)}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={src} alt='portfolio-picture' />
          <div className={styles.content}>
            <Link to={ROUTES.dynamic.projectId(id)}>
              <h4 className={styles.nameProject}>
                {project} <FiExternalLink size='0.5em' />
              </h4>
            </Link>
            <p className={styles.titleProject}>{title}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
