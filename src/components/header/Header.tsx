import { CSSProperties, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { headerPhoto } from 'src/assets'
import { Container, Title, Button, Modal, FlipWord } from 'src/shared'
import { Form } from '..'
import styles from './Header.module.css'

const words = ['Frontend Developer', 'React Developer', 'JavaScript Developer']

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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={styles.name}>{t('header.NAME')}</span>
                  {/* <br /> */}
                  <FlipWord
                    words={words}
                    classNameText={styles.speciality}
                    classNameTextWrap={styles.specialityWrap}
                  />
                </div>
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
