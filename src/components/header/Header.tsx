import { CSSProperties, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { headerPhoto } from 'src/assets'
import {
  Container,
  Title,
  Button,
  Modal,
  FlipWord,
  Paragraph,
} from 'src/shared'
import { Form } from '../form'
import styles from './Header.module.css'

const words = [
  {
    id: 1,
    content: 'Frontend Developer',
  },
  {
    id: 2,
    content: 'React Developer',
  },
  {
    id: 3,
    content: 'JavaScript Developer',
  },
]

export const Header = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleModal = () => setIsOpenModal(prev => !prev)

  return (
    <>
      <header className={styles.header}>
        <Container style={additionalContainerStyles}>
          <div className={styles.content}>
            <div className={styles.info}>
              <Title size='lg'>
                <span className={styles.name}>{t('header.NAME')}</span>
                <FlipWord words={words} classNameText={styles.speciality} />
              </Title>

              <blockquote>
                <Paragraph className={styles.infoText}>
                  {t('header.DESCRIPTION')} 💪
                </Paragraph>
              </blockquote>
              <Button onClick={handleModal} text={t('button.HIRE')} />
            </div>

            <div className={styles.image}>
              <img src={headerPhoto} alt='header-picture' />
            </div>
          </div>
        </Container>
      </header>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={handleModal}
          marqueeText='get in touch'
        >
          <Form onCloseModal={handleModal} />
        </Modal>
      )}
    </>
  )
}

const additionalContainerStyles: CSSProperties = {
  borderRadius: '0 0 5px 5px',
}
