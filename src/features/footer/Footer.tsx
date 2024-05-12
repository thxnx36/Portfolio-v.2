import { Container } from "../../commons/container/Container"
import { Paragraph } from "../../commons/paragraph/Paragraph"
import { FaTelegram } from "react-icons/fa"
import styles from "./Footer.module.css"
import { COLOR_BLUE } from "../../constans/colors"
import { TELEGRAM_URL } from "../../constans/link"
import { text } from "../../localization/text"

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerContent}>
          <Paragraph margin="5px">{text.footer.CREATED_BY}</Paragraph>
          <div className={styles.contact}>
            <FaTelegram color={COLOR_BLUE} />
            <a target="_blank" href={TELEGRAM_URL}>
              <p className={styles.name}>{text.footer.TELEGRAM_NAME}</p>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
