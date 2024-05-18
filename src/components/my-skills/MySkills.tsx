import { useMySocialList, useResizeScreen } from '../../hooks'
import { UserContact } from './user-contact/UserContact'
import { TechSkills } from './tech-skills/TechSkills'
import { skills } from '../../db'
import { languages } from '../../db'
import { text } from '../../localization'
import { CSSProperties, useState } from 'react'
import { Button, CollapseButton, Container } from '../../shared'
import { CV_URL } from '../../constans'
import styles from './MySkills.module.css'

export const MySkills = () => {
  const [showMore, setShowMore] = useState(false)
  const { socialList } = useMySocialList()
  const { isResizeScreen } = useResizeScreen(1502)

  const showMoreInfo = () => setShowMore(prev => !prev)

  return (
    <Container
      sx={
        !isResizeScreen
          ? {
              ...additionalContainerStyles,
            }
          : { position: 'unset' }
      }
    >
      <div className={styles.mySkillsContainer}>
        <UserContact socialList={socialList} userName={text.mySkills.NAME} />
        <div
          className={
            showMore
              ? `${styles.infoContent} ${styles.showMoreActive}`
              : styles.infoContent
          }
        >
          <div className={styles.line} />
          <TechSkills title={text.mySkills.SKILLS} skillsList={skills} />
          <div className={styles.line} />
          <TechSkills title={text.mySkills.LANGUAGES} skillsList={languages} />
          <div className={styles.line} />
          <a target='_blank' href={CV_URL}>
            <Button sx={additionalButtonStyles} text={text.button.DOWNLOAD} />
          </a>
        </div>
        <div className={styles.showInfoBtn}>
          <CollapseButton onClick={showMoreInfo} open={showMore} />
        </div>
      </div>
    </Container>
  )
}

const additionalContainerStyles: CSSProperties = {
  position: 'fixed',
  left: '10px',
  top: '10px',
  maxWidth: '250px',
}

const additionalButtonStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '12px',
}
