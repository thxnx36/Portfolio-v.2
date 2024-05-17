import { CSSProperties, FC } from "react"
import {
  Button,
  Input,
  Paragraph,
  SocialList,
  Textarea,
  Title,
} from "../../shared"
import { useMySocialList, useSendEmail } from "../../hooks"
import { text } from "../../localization"
import styles from "./Form.module.css"

type Props = {
  onCloseModal: () => void
}

export const Form: FC<Props> = ({ onCloseModal }) => {
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
  })

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={onSubmit}>
          <Title type="h2">{text.form.TITLE}</Title>
          <Input
            required
            onChange={handleChange("name_from")}
            value={form.name_from}
            placeholder={text.input.placeholder.YOUR_NAME}
          />
          <Input
            type="email"
            required
            onChange={handleChange("email_from")}
            value={form.email_from}
            placeholder={text.input.placeholder.YOUR_EMAIL}
          />
          <Textarea
            onChange={handleChange("message")}
            value={form.message}
            required
            rows={7}
            cols={50}
            placeholder={text.input.placeholder.YOUR_MESSAGE}
          />
          <Button
            sx={additionalButtonStyles}
            text={isLoading ? text.button.LOADING : text.button.SEND_MESSAGE}
            type="submit"
            disabled={isDisabledButton}
          />
        </form>
      )}
      <div className={styles.contacts}>
        <Paragraph sx={{ margin: "15px 0 0" }}>
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
  width: "100%",
  padding: "10px",
  fontSize: "12px",
}
