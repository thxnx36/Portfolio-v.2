import { TbError404 } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { COLOR_YELLOW, ROUTES } from 'src/constants'
import { Section, Title, Button, SEO } from 'src/shared'
import { useGoBack } from 'src/hooks'
import styles from './NotFound.module.css'
import { Icon } from './Icon'

export const NotFound = () => {
  const { t } = useTranslation()
  const { handleBack } = useGoBack(-1)

  return (
    <Section style={{ margin: 0 }}>
      <div className={styles.notFoundContainer}>
        <div className={styles.iconsWrap}>
          <TbError404 color={COLOR_YELLOW} size={'10em'} />
          <div className={styles.icon}>
            <Icon />
          </div>
        </div>
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
      <SEO tabTitle={t('pages.notFound.NOT_FOUND_TAB')} />
    </Section>
  )
}
