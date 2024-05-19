import { IoIosArrowRoundForward } from 'react-icons/io'
import { useCallback, useState } from 'react'
import { Form } from '../form/Form'
import { headerPhoto } from '../../assets'
import { Button, Container, Modal, Title } from '../../shared'
import { text } from '../../localization'
import styles from './Header.module.css'

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleModal = useCallback(
    () => setIsOpenModal(prev => !prev),
    [setIsOpenModal],
  )

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <Title size='lg'>
              {text.header.NAME} <br />{' '}
              <span className={styles.speciality}>{text.header.PATH}</span>{' '}
              {text.header.SPECIALTY}
            </Title>
            <blockquote className={styles.infoText}>
              {text.header.DESCRIPTION} 💪
            </blockquote>
            <Button
              onClick={handleModal}
              text={text.button.HIRE}
              icon={<IoIosArrowRoundForward size={'1.3em'} />}
            />
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
