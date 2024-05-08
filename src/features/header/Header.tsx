import { BoxContainer } from "../../commons/box-container/BoxContainer"
import { Button } from "../../commons/button/Button"
import { HEADER_PHOTO } from "../../constans/images"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header>
      <BoxContainer>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                Hi! I'm Vlad Kryvytchenko <br /> <span>Front-end</span>{" "}
                Developer
              </h1>
              <p className={styles.infoText}>
                In the world of frontend development, innovation is the brush
                and code is the canvas, creating digital masterpieces that
                redefine user experiences
              </p>
              <Button text="Hire me" icon="->" />
            </div>
            <div className={styles.image}>
              <img src={HEADER_PHOTO} alt="header-picture" />
              <div className={styles.blur}></div>
            </div>
          </div>
        </div>
      </BoxContainer>
    </header>
  )
}
