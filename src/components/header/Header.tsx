import { Container } from "../../commons/container/Container"
import { Button } from "../../commons/buttons/Button"
import { HEADER_PHOTO } from "../../constans/images"
import { text } from "../../localization/text"
import { Title } from "../../commons/title/Title"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <Title size="lg">
              {text.header.NAME} <br /> <span className={styles.speciality}>{text.header.PATH}</span>{" "}
              {text.header.SPECIALTY}
            </Title>
            <blockquote className={styles.infoText}>
              {text.header.DESCRIPTION}
            </blockquote>
            <Button text={text.button.HIRE} icon="->" />
          </div>
          <div className={styles.image}>
            <img src={HEADER_PHOTO} alt="header-picture" />
          </div>
        </div>
      </Container>
    </header>
  )
}
