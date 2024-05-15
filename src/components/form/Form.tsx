import {
  Button,
  Input,
  Paragraph,
  SocialList,
  Textarea,
  Title,
} from "../../commons"
import { useMySocialList } from "../../hooks"
import { text } from "../../localization"

export const Form = () => {
  const { socialList } = useMySocialList()

  return (
    <form>
      <Title type="h2">{text.form.TITLE}</Title>
      <Input placeholder={text.input.placeholder.YOUR_NAME} />
      <Input placeholder={text.input.placeholder.YOUR_EMAIL} />
      <Input placeholder={text.input.placeholder.YOUR_SUBJECT} />
      <Textarea
        rows={7}
        cols={50}
        placeholder={text.input.placeholder.YOUR_MESSAGE}
      />
      <Button
        style={{ width: "100%", padding: "10px", fontSize: "12px" }}
        text={text.button.SEND_MESSAGE}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paragraph style={{ margin: "15px 0 0" }}>
          {text.form.TEXT_ME_MESSENGERS}
        </Paragraph>
        <SocialList list={socialList} />
      </div>
    </form>
  )
}
