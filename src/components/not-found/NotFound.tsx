import { Button, SEO, Section, Title } from '../../shared'
import { TbError404 } from 'react-icons/tb'
import { COLOR_YELLOW } from '../../constans'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { text } from '../../localization'
import { ROUTES } from '../../constans'
import styles from './NotFound.module.css'

export const NotFound = () => {
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  return (
    <Section style={{ margin: 0 }}>
      <div className={styles.notFoundContainer}>
        <TbError404 color={COLOR_YELLOW} size={'5em'} />
        <Title tag='h1'>{text.pages.notFound.NOT_FOUND}</Title>
        <Title size='sm' tag='h4'>
          {text.pages.notFound.RETURN_HOME}
        </Title>
        <Button
          tag='link'
          to={ROUTES.main}
          onClick={handleBack}
          text={text.button.GO_BACK}
        />
      </div>
      <SEO tabTitle={text.pages.notFound.NOT_FOUND_TAB} />
    </Section>
  )
}
