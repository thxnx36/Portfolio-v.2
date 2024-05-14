import { useMySocialList } from "../../hooks/use-my-social-list"
import { UserContact } from "./user-contact/UserContact"
import { TechSkills } from "./tech-skills/TechSkills"
import { skills } from "../../db/skills"
import { languages } from "../../db/languages"
import { Button } from "../../commons/buttons/Button"
import { text } from "../../localization/text"
import { CollapseButton } from "../../commons/buttons/collapse-button/CallapseButton"
import { useState } from "react"
import styles from "./Sidebar.module.css"
import { Container } from "../../commons/container/Container"

export const Sidebar = () => {
  const [showMore, setShowMore] = useState(false)
  const { socialList } = useMySocialList()

  const showMoreInfo = () => setShowMore(prev => !prev)

  return (
    <Container
      style={{
        position: "fixed",
        left: "10px",
        top: "10px",
        maxWidth: "250px",
      }}
    >
      <div className={styles.sidebarContainer}>
        <UserContact socialList={socialList} userName={text.sideBar.NAME} />
        <div
          className={
            showMore
              ? `${styles.infoContent} ${styles.showMoreActive}`
              : styles.infoContent
          }
        >
          <div className={styles.line} />
          <TechSkills title={text.sideBar.SKILLS} skillsList={skills} />
          <div className={styles.line} />
          <TechSkills title={text.sideBar.LANGUAGES} skillsList={languages} />
          <div className={styles.line} />
          <Button
            style={{ width: "100%", padding: "10px", fontSize: "12px" }}
            text={text.sideBar.DOWNLOAD}
          />
        </div>
        <div className={styles.showInfoBtn}>
          <CollapseButton onClick={showMoreInfo} open={showMore} />
        </div>
      </div>
    </Container>
  )
}
