import type { FC } from 'react'
import { AiOutlineApple } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Container } from '../../../shared'
import { ROUTES } from '../../../constans'
import { FiExternalLink } from 'react-icons/fi'
import styles from './PortfolioCard.module.css'

type Props = {
  id: number
  src: string
  title: string
  project: string
}

export const PortfolioCard: FC<Props> = ({ src, title, project, id }) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.line}>
          <ul className={styles.dotContainer}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
        <div className={styles.logo}>
          <AiOutlineApple />
        </div>
      </div>
    </Container>
  )
}
