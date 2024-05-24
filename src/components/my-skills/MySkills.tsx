import { useMySocialList } from '../../hooks'
import { UserContact } from './user-contact/UserContact'
import { TechSkills } from './tech-skills/TechSkills'
import { skills } from '../../db'
import { languages } from '../../db'
import type { CSSProperties } from 'react'
import { Button } from '../../shared'
import { CV_URL } from '../../constans'
import { useTranslation } from 'react-i18next'
import styles from './MySkills.module.css'

export const MySkills = () => {
  const { t } = useTranslation()
  const { socialList } = useMySocialList()

  return (
    <div className={styles.mySkillsContainer}>
      <UserContact socialList={socialList} userName={t('mySkills.NAME')} />
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
