import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { headerPhoto } from 'src/assets'
import { Container, Title, Button, Modal } from 'src/shared'
import { Form } from '..'
import styles from './Header.module.css'

export const Header = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleModal = () => setIsOpenModal(prev => !prev)

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <Title size='lg'>
              {t('header.NAME')} <br />{' '}
              <span className={styles.speciality}>{t('header.PATH')}</span>{' '}
              {t('header.SPECIALTY')}
            </Title>
            <blockquote className={styles.infoText}>
              {t('header.DESCRIPTION')} 💪
            </blockquote>
            <Button onClick={handleModal} text={t('button.HIRE')} />
          </div>
          <div className={styles.image}>
            <img src={headerPhoto} alt='header-picture' />
          </div>
        </div>
      </Container>

      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={handleModal}>
          <Form onCloseModal={handleModal} />
        </Modal>
      )}
    </header>
  )
}
