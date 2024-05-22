import { DiGithubFull } from 'react-icons/di'
import { GIT_HUB_URL } from '../../constans'
import { Container } from '../../shared'
import { version } from '../../../package.json'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerContent}>
          <a target='_blank' href={GIT_HUB_URL}>
            <DiGithubFull size='2.9em' />
          </a>
          <span
            className={styles.version}
          >{`v${version} the app in develop`}</span>
        </div>
      </Container>
    </footer>
  )
}
