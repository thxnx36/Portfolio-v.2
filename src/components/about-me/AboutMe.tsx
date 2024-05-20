import { useCallback } from 'react'
import { BrowserTabTitle, Paragraph, Section, Title } from '../../shared'
import { BackButton } from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'
import { technologies } from '../../db'
import { text } from '../../localization'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  return (
    <Section sx={{ margin: 0 }}>
      <div className={styles.container}>
        <div className={styles.title}>
          <BackButton onClick={handleBack} />
          <Title tag='h2' sx={{ margin: 0 }}>
            {text.pages.aboutMe.TITLE}
          </Title>
        </div>
        <div className={styles.content}>
          <Paragraph sx={{ textAlign: 'left', maxWidth: '100%' }}>
            {text.pages.aboutMe.HEY_NICE_MEET} 👋
            <br /> {text.pages.aboutMe.MY_CAREER}
          </Paragraph>

          <Title size='sm' tag='h4'>
            {text.pages.aboutMe.TECHNOLOGIES_SUB_TITLE}
          </Title>
          <ul style={{ marginBottom: '25px' }}>
            {technologies.map((item, i) => (
              <li style={{ listStyle: 'inside', marginBottom: '2px' }} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <Title size='sm' tag='h4'>
            {text.pages.aboutMe.HOBBIES_SUB_TITLE}
          </Title>
          <Paragraph sx={{ textAlign: 'left', maxWidth: '100%' }}>
            {text.pages.aboutMe.HOBBIES}
          </Paragraph>
          <Title size='sm' tag='h4'>
            {text.pages.aboutMe.GOT_IN_DEV_SUB_TITLE}
          </Title>
          <Paragraph sx={{ textAlign: 'left', maxWidth: '100%', margin: 0 }}>
            {text.pages.aboutMe.DEVELOPMENT}
          </Paragraph>
        </div>
      </div>
      <BrowserTabTitle title={text.pages.aboutMe.TITLE} />
    </Section>
  )
}
