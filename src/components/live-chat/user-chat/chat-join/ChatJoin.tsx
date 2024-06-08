import { Button, Input, Title } from 'src/shared'
import { useTranslation } from 'react-i18next'
import { VALIDATE_EMAIL } from 'src/constants'
import { useJoinToChat } from 'src/hooks'
import { FC } from 'react'
import styles from './ChatJoin.module.css'

type Props = {
  setIsJoined: (value: string) => void
  setEmail: (value: string) => void
}

export const ChatJoin: FC<Props> = ({ setIsJoined, setEmail }) => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    handleChange,
    errors,
    isLoading,
    isDisabledButton,
    onSubmit,
  } = useJoinToChat({
    setIsJoined,
    setEmail,
    infoMessage: t('toast.info.FIXING'),
  })

  return (
    <form className={styles.joinForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.joinInner}>
        <Title size='sm' tag='h3'>
          {t('chat.JOIN_TO_CHAT')}
        </Title>
        <Input
          id='form-input-email'
          type='email'
          {...register('email', {
            required: t('form.error.ENTER_EMAIL'),
            pattern: {
              value: VALIDATE_EMAIL,
              message: t('form.error.EMAIL_NOT_VALID'),
            },
          })}
          onChange={handleChange('email')}
          error={!!errors.email}
          errorText={errors.email?.message}
          placeholder={t('input.placeholder.YOUR_EMAIL')}
        />
        <Button
          text={isLoading ? t('button.LOADING') : t('button.JOIN')}
          disabled={isDisabledButton}
        />
        <small style={{ margin: 20 }}>(beta)</small>
      </div>
    </form>
  )
}
