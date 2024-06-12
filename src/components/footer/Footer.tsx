import { DiGithubFull } from 'react-icons/di'
import { APP, GIT_HUB_URL } from 'src/constants'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <a target='_blank' href={GIT_HUB_URL} rel='noreferrer'>
          <DiGithubFull size='2.9em' />
        </a>
        <span className={styles.version}>{`v${APP.version}`}</span>
      </div>
    </footer>
  )
}
