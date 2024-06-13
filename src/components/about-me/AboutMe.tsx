import { technologies } from 'src/db'
import { useTranslation } from 'react-i18next'
import { APP_URL, ROUTES } from 'src/constants'
import {
  Section,
  PageWrapper,
  BackButton,
  Title,
  Paragraph,
  SEO,
} from 'src/shared'
import styles from './AboutMe.module.css'
import { useGoBack } from 'src/hooks'

export const AboutMe = () => {
  const { t } = useTranslation()
  const { handleBack } = useGoBack(-1)

  return (
    <Section style={{ margin: 0 }}>
      <PageWrapper>
        <div className={styles.title}>
          <BackButton onClick={handleBack} />
          <Title tag='h2' style={{ margin: 0 }}>
            {t('pages.aboutMe.TITLE')}
          </Title>
        </div>
        <article>
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
        metaDescriptionContent='About me, my skills, hobbies, and work experience'
        metaOgTitleContent='My short life story'
        metaOgDescriptionContent='I specialize in creating web applications using React, JS, TS, HTML, CSS'
        metaOgURLContent={`${APP_URL}${ROUTES.aboutMe}`}
        metaOgImageContent=''
      />
    </Section>
  )
}
