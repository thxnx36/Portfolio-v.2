import { Button } from "../../commons/buttons/Button"
import { Input } from "../../commons/input/Input"
import { Paragraph } from "../../commons/paragraph/Paragraph"
import { SocialList } from "../../commons/social-list/SocialList"
import { Textarea } from "../../commons/textarea/Textarea"
import { Title } from "../../commons/title/Title"
import { useMySocialList } from "../../hooks/use-my-social-list"
import { text } from "../../localization/text"

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
        <Paragraph margin="15px 0 0">{text.form.TEXT_ME_MESSENGERS}</Paragraph>
        <SocialList list={socialList} />
      </div>
    </form>
  )
}
