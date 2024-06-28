import type { CSSProperties } from 'react'
import { UserContact } from './user-contact/UserContact'
import { TechSkills } from './tech-skills/TechSkills'
import { useTranslation } from 'react-i18next'
import { CV_URL } from 'src/constants'
import { skills, languages } from 'src/db'
import { Button } from 'src/shared'
import styles from './MySkills.module.css'

export const MySkills = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.mySkillsContainer}>
      <UserContact userName={t('mySkills.NAME')} />
      <div className={styles.line} />
      <TechSkills title={t('mySkills.SKILLS')} skillsList={skills} />
      <div className={styles.line} />
      <TechSkills title={t('mySkills.LANGUAGES')} skillsList={languages} />
      <div className={styles.line} />
      <Button
        tag='a'
        target='_blank'
        href={CV_URL}
        style={additionalButtonStyles}
        text={t('button.DOWNLOAD')}
      />
    </div>
  )
}

const additionalButtonStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '12px',
}
