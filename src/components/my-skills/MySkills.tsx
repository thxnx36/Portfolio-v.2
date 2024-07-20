import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTES } from 'src/constants'
import { Button, Paragraph, Title, Container } from 'src/shared'
import { Link } from 'react-router-dom'
import { TechnologiesCard } from './technologies-card/TechnologiesCard'
import { withAnimationSection } from 'src/hoc'
import { getEnvVars } from 'src/utils'
import styles from './MySkills.module.css'

const env = getEnvVars()

const MySkillsSection = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className={styles.slillsWrapper}>
        <div className={styles.text}>
          <Title withGradient tag='h2'>
            {t('SKILLS.TITLE')}
          </Title>
          <Paragraph style={{ textAlign: 'left' }}>
            {t('SKILLS.SUBTITLE')}
          </Paragraph>
          <div className={styles.buttons}>
            <Button
              tag='a'
              target='_blank'
              href={env.CVUrl}
              style={additionalButtonStyles}
              text={t('button.DOWNLOAD')}
            />
            <Link className={styles.aboutMeLink} to={ROUTES.aboutMe}>
              {t('SKILLS.MORE_ME_LINK')}
            </Link>
          </div>
        </div>
        <div className={styles.stackCard}>
          <TechnologiesCard />
        </div>
      </div>
    </Container>
  )
}

const additionalButtonStyles: CSSProperties = {
  padding: '10px',
  fontSize: '0.75em',
}

export const MySkills = withAnimationSection(MySkillsSection)
