import { DiGithubFull } from "react-icons/di"
import { GIT_HUB } from "../../constans"
import { text } from "../../localization"
import { Container, Paragraph } from "../../shared"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerContent}>
          <Paragraph style={{ margin: "0" }}>
            {text.footer.CREATED_BY}
          </Paragraph>
          <div className={styles.contact}>
            <DiGithubFull size="2em" />
            <a target="_blank" href={GIT_HUB}>
              <p className={styles.name}>{text.footer.TELEGRAM_NAME}</p>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
