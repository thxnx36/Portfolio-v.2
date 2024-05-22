import { useMySocialList } from '../../hooks'
import { UserContact } from './user-contact/UserContact'
import { TechSkills } from './tech-skills/TechSkills'
import { skills } from '../../db'
import { languages } from '../../db'
import { text } from '../../localization'
import { CSSProperties } from 'react'
import { Button, Container } from '../../shared'
import { CV_URL } from '../../constans'
import styles from './MySkills.module.css'

export const MySkills = () => {
  const { socialList } = useMySocialList()

  return (
    <div className={styles.mySkillsContainer}>
      <UserContact socialList={socialList} userName={text.mySkills.NAME} />
      <div className={styles.line} />
      <TechSkills title={text.mySkills.SKILLS} skillsList={skills} />
      <div className={styles.line} />
      <TechSkills title={text.mySkills.LANGUAGES} skillsList={languages} />
      <div className={styles.line} />
      <Button
        tag='a'
        target='_blank'
        href={CV_URL}
        style={additionalButtonStyles}
        text={text.button.DOWNLOAD}
      />
    </div>
  )
}

const additionalButtonStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '12px',
}
