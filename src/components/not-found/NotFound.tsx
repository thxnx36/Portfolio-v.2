import { Button, SEO, Section, Title } from '../../shared'
import { TbError404 } from 'react-icons/tb'
import { COLOR_YELLOW } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { useTranslation } from 'react-i18next'
import styles from './NotFound.module.css'

export const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <Section style={{ margin: 0 }}>
      <div className={styles.notFoundContainer}>
        <TbError404 color={COLOR_YELLOW} size={'5em'} />
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
