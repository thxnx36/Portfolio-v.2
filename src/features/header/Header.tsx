import { Container } from "../../commons/container/Container"
import { Button } from "../../commons/buttons/Button"
import { HEADER_PHOTO } from "../../constans/images"
import styles from "./Header.module.css"
import { text } from "../../localization/text"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {text.header.NAME} <br /> <span>{text.header.PATH}</span>{" "}
              {text.header.SPECIALTY}
            </h1>
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
