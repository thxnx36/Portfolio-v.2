import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { CV_URL, ROUTES } from 'src/constants'
import { Button, Paragraph, Section, Title, Container } from 'src/shared'
import { Link } from 'react-router-dom'
import { TechnologiesCard } from './technologies-card/TechnologiesCard'
import styles from './MySkills.module.css'

export const MySkills = () => {
  const { t } = useTranslation()

  return (
    <Section id='skills'>
      <Container>
        <div className={styles.slillsWrapper}>
          <div className={styles.text}>
            <Title tag='h2'>{t('SKILLS.TITLE')}</Title>
            <Paragraph style={{ textAlign: 'left' }}>
              {t('SKILLS.SUBTITLE')}
            </Paragraph>
            <div className={styles.buttons}>
              <Button
                tag='a'
                target='_blank'
                href={CV_URL}
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
    </Section>
  )
}

const additionalButtonStyles: CSSProperties = {
  padding: '10px',
  fontSize: '0.75em',
}
