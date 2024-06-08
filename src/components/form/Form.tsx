import type { CSSProperties, FC } from 'react'
import { useState } from 'react'
import { useMySocialList, useSendEmail } from 'src/hooks'
import {
  Title,
  Input,
  Textarea,
  ReCaptcha,
  Button,
  Paragraph,
  SocialList,
} from 'src/shared'
import { useTranslation } from 'react-i18next'
import { VALIDATE_EMAIL } from 'src/constants'
import styles from './Form.module.css'

type Props = {
  onCloseModal: () => void
}

export const Form: FC<Props> = ({ onCloseModal }) => {
  const { t } = useTranslation()
  const { socialList } = useMySocialList()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    handleChange,
    errors,
    isSendFormError,
    isLoading,
    isDisabledButton,
    onSubmit,
  } = useSendEmail({
    f: onCloseModal,
    successMessage: t('toast.success.EMAIL_SENT'),
    infoMessage: t('toast.info.FIXING'),
  })

  const handleCaptchaChange = (token: string | null) => setCaptchaToken(token)

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title tag='h2'>{t('form.TITLE')}</Title>
          <Input
            id='form-input-name'
            type='text'
            {...register('nameSender', {
              required: true,
              minLength: 3,
            })}
            onChange={handleChange('nameSender')}
            error={!!errors.nameSender}
            errorText={
              errors.nameSender?.type === 'minLength'
                ? t('form.error.SHORT_NAME')
                : t('form.error.ENTER_NAME')
            }
            placeholder={t('input.placeholder.YOUR_NAME')}
          />
          <Input
            id='form-input-email'
            type='email'
            {...register('from', {
              required: t('form.error.ENTER_EMAIL'),
              pattern: {
                value: VALIDATE_EMAIL,
                message: t('form.error.EMAIL_NOT_VALID'),
              },
            })}
            onChange={handleChange('from')}
            error={!!errors.from}
            errorText={errors.from?.message}
            placeholder={t('input.placeholder.YOUR_EMAIL')}
          />
          <Textarea
            id='form-textarea-message'
            {...register('text', { required: true, minLength: 10 })}
            rows={7}
            cols={50}
            onChange={handleChange('text')}
            error={!!errors.text}
            errorText={
              errors.text?.type === 'minLength'
                ? t('form.error.SHORT_MESSAGE')
                : t('form.error.ENTER_MESSAGE')
            }
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
          />
          <div className={styles.reCaptcha}>
            <ReCaptcha onChange={handleCaptchaChange} />
          </div>
          <Button
            style={additionalButtonStyles}
            text={isLoading ? t('button.LOADING') : t('button.SEND_MESSAGE')}
            type='submit'
            disabled={isDisabledButton || !captchaToken}
          />
        </form>
      )}
      <div className={styles.contacts}>
        <Paragraph style={{ margin: '15px 0 0' }}>
          {!isSendFormError
            ? t('form.TEXT_ME_MESSENGERS')
            : t('form.error.CONTACT_ME_IF_ERROR')}
        </Paragraph>
        <SocialList list={socialList} />
      </div>
    </>
  )
}

const additionalButtonStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '12px',
}
