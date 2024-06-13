import { useTranslation } from 'react-i18next'
import { ROUTES } from 'src/constants'
import { Section, Title, Button, SEO, MarqueeBackground } from 'src/shared'
import { useGoBack } from 'src/hooks'
import { Icon } from './Icon'
import styles from './NotFound.module.css'

export const NotFound = () => {
  const { t } = useTranslation()
  const { handleBack } = useGoBack(-1)

  return (
    <Section style={{ margin: 0 }}>
      <MarqueeBackground marqueeText='page 404'>
        <div className={styles.notFoundContainer}>
          <span className={styles.number}>
            404
            <div className={styles.icon}>
              <Icon />
            </div>
          </span>
          <Title tag='h1'>{t('pages.notFound.NOT_FOUND')}</Title>
          <Title size='sm' tag='h4'>
            {t('pages.notFound.RETURN_HOME')}
          </Title>
          <Button
            tag='link'
            to={ROUTES.main}
            onClick={handleBack}
            text={t('button.GO_BACK')}
          />
        </div>
      </MarqueeBackground>

      <SEO tabTitle={t('pages.notFound.NOT_FOUND_TAB')} />
    </Section>
  )
}
