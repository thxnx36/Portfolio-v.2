import { DiGithubFull } from 'react-icons/di'
import { GIT_HUB } from '../../constans'
import { text } from '../../localization'
import { Container } from '../../shared'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerContent}>
          <a target='_blank' href={GIT_HUB}>
            <DiGithubFull size='2.5em' />
          </a>
        </div>
      </Container>
    </footer>
  )
}
