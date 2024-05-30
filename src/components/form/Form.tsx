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
import styles from './Form.module.css'

type Props = {
  onCloseModal: () => void
}

export const Form: FC<Props> = ({ onCloseModal }) => {
  const { t } = useTranslation()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const { socialList } = useMySocialList()
  const {
    form,
    isDisabledButton,
    isLoading,
    isSendFormError,
    handleChange,
    onSubmit,
  } = useSendEmail({
    f: onCloseModal,
    successMessage: t('toast.success.EMAIL_SENT'),
    infoMessage: t('toast.info.FIXING'),
    reCaptchaToken: captchaToken,
  })

  const handleCaptchaChange = (token: string | null) => setCaptchaToken(token)

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={onSubmit}>
          <Title tag='h2'>{t('form.TITLE')}</Title>
          <Input
            id='form-input-name'
            required
            onChange={handleChange('nameSender')}
            value={form.nameSender}
            placeholder={t('input.placeholder.YOUR_NAME')}
          />
          <Input
            id='form-input-email'
            type='email'
            required
            onChange={handleChange('from')}
            value={form.from}
            placeholder={t('input.placeholder.YOUR_EMAIL')}
          />
          <Textarea
            id='form-textarea-message'
            onChange={handleChange('text')}
            value={form.text}
            required
            rows={7}
            cols={50}
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
          />
          <div className={styles.reCaptcha}>
            <ReCaptcha onChange={handleCaptchaChange} />
          </div>
          <Button
            style={additionalButtonStyles}
            text={isLoading ? t('button.LOADING') : t('button.SEND_MESSAGE')}
            type='submit'
            disabled={isDisabledButton}
          />
        </form>
      )}
      <div className={styles.contacts}>
        <Paragraph style={{ margin: '15px 0 0' }}>
          {!isSendFormError
            ? t('form.TEXT_ME_MESSENGERS')
            : t('form.CONTACT_ME_IF_ERROR')}
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
