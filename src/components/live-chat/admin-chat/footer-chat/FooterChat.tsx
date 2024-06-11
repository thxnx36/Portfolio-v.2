import { Button, Textarea } from 'src/shared'
import styles from './FooterChat.module.css'
import { ChangeEvent, FC, FormEvent } from 'react'

type Props = {
  textAreaValue: string
  onChangeMessage: (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => void
  onSendMessage: (e: FormEvent) => Promise<void>
}

export const FooterChat: FC<Props> = ({
  textAreaValue,
  onChangeMessage,
  onSendMessage,
}) => {
  return (
    <form onSubmit={onSendMessage} className={styles.footerChat}>
      <Textarea
        value={textAreaValue}
        onChange={onChangeMessage}
        className={styles.textArea}
        placeholder='Type text'
        rows={3}
      />
      <Button type='submit' text={'Send'} />
    </form>
  )
}
