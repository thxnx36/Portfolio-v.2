import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTES } from 'src/constants'
import { Paragraph, Title, Container, ButtonAnchor } from 'src/shared'
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
          <Paragraph style={additionalStyles.paragraph}>
            {t('SKILLS.SUBTITLE')}
          </Paragraph>
          <div className={styles.buttons}>
            <ButtonAnchor
              href={env.CVUrl}
              target='blank'
              style={additionalStyles.buttonLink}
            >
              {t('button.DOWNLOAD')}
            </ButtonAnchor>
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

const additionalStyles = {
  buttonLink: {
    padding: '10px',
    fontSize: '0.75em',
  },
  paragraph: {
    textAlign: 'left' as CSSProperties['textAlign'],
    margin: '0 0 25px',
  },
}

export const MySkills = withAnimationSection(MySkillsSection)
