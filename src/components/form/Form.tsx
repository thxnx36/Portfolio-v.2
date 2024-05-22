import { CSSProperties, FC, useState } from 'react'
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
import { text } from '../../localization'
import styles from './Form.module.css'

type Props = {
  onCloseModal: () => void
}

export const Form: FC<Props> = ({ onCloseModal }) => {
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
    infoMessage: text.toast.success.EMAIL_SENT,
    reCaptchaToken: captchaToken,
  })

  const handleCaptchaChange = (token: string | null) => setCaptchaToken(token)

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={onSubmit}>
          <Title tag='h2'>{text.form.TITLE}</Title>
          <Input
            required
            onChange={handleChange('name_from')}
            value={form.name_from}
            placeholder={text.input.placeholder.YOUR_NAME}
          />
          <Input
            type='email'
            required
            onChange={handleChange('email_from')}
            value={form.email_from}
            placeholder={text.input.placeholder.YOUR_EMAIL}
          />
          <Textarea
            onChange={handleChange('message')}
            value={form.message}
            required
            rows={7}
            cols={50}
            placeholder={text.input.placeholder.YOUR_MESSAGE}
          />
          <div className={styles.reCaptcha}>
            <ReCaptcha onChange={handleCaptchaChange} />
          </div>
          <Button
            style={additionalButtonStyles}
            text={isLoading ? text.button.LOADING : text.button.SEND_MESSAGE}
            type='submit'
            disabled={isDisabledButton}
          />
        </form>
      )}
      <div className={styles.contacts}>
        <Paragraph style={{ margin: '15px 0 0' }}>
          {!isSendFormError
            ? text.form.TEXT_ME_MESSENGERS
            : text.form.CONTACT_ME_IF_ERROR}
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
