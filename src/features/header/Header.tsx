import { Container } from "../../commons/container/Container"
import { Button } from "../../commons/button/Button"
import { HEADER_PHOTO } from "../../constans/images"
import styles from "./Header.module.css"
import { text } from "../../constans/text/text"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                {text.header.NAME} <br /> <span>{text.header.PATH}</span>{" "}
                {text.header.SPECIALTY}
              </h1>
              <p className={styles.infoText}>{text.header.DESCRIPTION}</p>
              <Button text="Hire me" icon="->" />
            </div>
            <div className={styles.image}>
              <img src={HEADER_PHOTO} alt="header-picture" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
