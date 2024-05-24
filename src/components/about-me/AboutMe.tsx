import { useCallback } from 'react'
import { PageWrapper, Paragraph, SEO, Section, Title } from '../../shared'
import { BackButton } from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'
import { technologies } from '../../db'
import { APP_URL, ROUTES } from '../../constans'
import styles from './AboutMe.module.css'
import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  return (
    <Section style={{ margin: 0 }}>
      <PageWrapper>
        <div className={styles.title}>
          <BackButton onClick={handleBack} />
          <Title tag='h2' style={{ margin: 0 }}>
            {t('pages.aboutMe.TITLE')}
          </Title>
        </div>
        <article className={styles.content}>
          <Paragraph style={{ textAlign: 'left', maxWidth: '100%' }}>
            {t('pages.aboutMe.HEY_NICE_MEET')} 👋
            <br /> {t('pages.aboutMe.MY_CAREER')}
          </Paragraph>
          <article>
            <Title size='sm' tag='h3'>
              {t('pages.aboutMe.TECHNOLOGIES_SUB_TITLE')}
            </Title>
            <ul style={{ marginBottom: '25px' }}>
              {technologies.map((item, i) => (
                <li
                  style={{ listStyle: 'inside', marginBottom: '2px' }}
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <Title size='sm' tag='h4'>
              {t('pages.aboutMe.HOBBIES_SUB_TITLE')}
            </Title>
            <Paragraph style={{ textAlign: 'left', maxWidth: '100%' }}>
              {t('pages.aboutMe.HOBBIES')}
            </Paragraph>
          </article>
          <article>
            <Title size='sm' tag='h4'>
              {t('pages.aboutMe.GOT_IN_DEV_SUB_TITLE')}
            </Title>
            <Paragraph
              style={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}
            >
              {t('pages.aboutMe.DEVELOPMENT')}
            </Paragraph>
          </article>
        </article>
      </PageWrapper>
      <SEO
        tabTitle={t('pages.aboutMe.seo.TITLE')}
        metaDescriptionContent={t('pages.aboutMe.seo.ABOUTE_ME_MY_SKILLS')}
        metaOgTitleContent={t('pages.aboutMe.seo.SHORT_STORY')}
        metaOgDescriptionContent={t('pages.aboutMe.seo.SPECIALIZE')}
        metaOgURLContent={`${APP_URL}${ROUTES.aboutMe}`}
        metaOgImageContent=''
      />
    </Section>
  )
}
