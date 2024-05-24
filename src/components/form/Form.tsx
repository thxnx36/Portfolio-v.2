import type { CSSProperties, FC} from 'react';
import { useState } from 'react'
import {
  Button,
  Input,
  Paragraph,
  ReCaptcha,
  SocialList,
  Textarea,
  Title,
} from '../../shared'
import { useMySocialList, useSendEmail } from '../../hooks'
import styles from './Form.module.css'
import { useTranslation } from 'react-i18next'

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
    infoMessage: t('toast.success.EMAIL_SENT'),
    reCaptchaToken: captchaToken,
  })

  const handleCaptchaChange = (token: string | null) => setCaptchaToken(token)

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={onSubmit}>
          <Title tag='h2'>{t('form.TITLE')}</Title>
          <Input
            required
            onChange={handleChange('name_from')}
            value={form.name_from}
            placeholder={t('input.placeholder.YOUR_NAME')}
          />
          <Input
            type='email'
            required
            onChange={handleChange('email_from')}
            value={form.email_from}
            placeholder={t('input.placeholder.YOUR_EMAIL')}
          />
          <Textarea
            onChange={handleChange('message')}
            value={form.message}
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
