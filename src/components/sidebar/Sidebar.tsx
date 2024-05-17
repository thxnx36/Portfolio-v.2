import { useMySocialList } from "../../hooks"
import { UserContact } from "./user-contact/UserContact"
import { TechSkills } from "./tech-skills/TechSkills"
import { skills } from "../../db"
import { languages } from "../../db"
import { text } from "../../localization"
import { useState } from "react"
import { Button, CollapseButton, Container } from "../../shared"
import styles from "./Sidebar.module.css"
import { CV_URL } from "../../constans"

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
          <a target="_blank" href={CV_URL}>
            <Button
              style={{ width: "100%", padding: "10px", fontSize: "12px" }}
              text={text.button.DOWNLOAD}
            />
          </a>
        </div>
        <div className={styles.showInfoBtn}>
          <CollapseButton onClick={showMoreInfo} open={showMore} />
        </div>
      </div>
    </Container>
  )
}
