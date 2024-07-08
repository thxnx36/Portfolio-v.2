import { useTranslation } from 'react-i18next'
import {
  Section,
  PageWrapper,
  Title,
  Paragraph,
  BrowserTabTitle,
  PagesHead,
} from 'src/shared'
import { useGoBack, useQualitiesList } from 'src/hooks'
import { technologies } from 'src/constants'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  const { t } = useTranslation()
  const { handleBack } = useGoBack(-1)
  const { qualities } = useQualitiesList()

  return (
    <Section style={{ margin: 0 }}>
      <PageWrapper>
        <PagesHead onClick={handleBack} title={t('pages.aboutMe.TITLE')} />
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
              {t('pages.aboutMe.LANG_SUB_TITLE')}
            </Title>
            <ul>
              <li className={styles.qualities}>
                <Paragraph
                  style={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}
                >
                  English: Intermediate
                </Paragraph>
              </li>
              <li className={styles.qualities}>
                <Paragraph
                  style={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}
                >
                  Ukrainian: Native
                </Paragraph>
              </li>
            </ul>
          </article>
          <article>
            <Title size='sm' tag='h4'>
              {t('pages.aboutMe.QUALITIES_SUB_TITLE')}
            </Title>
            <ul>
              {qualities.map(({ id, title, text }) => (
                <li key={id} className={styles.qualities}>
                  <Paragraph
                    style={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}
                  >
                    {title}
                  </Paragraph>
                  <Paragraph
                    style={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}
                  >
                    {text}
                  </Paragraph>
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
      <BrowserTabTitle title={t('pages.aboutMe.seo.TITLE')} />
    </Section>
  )
}
