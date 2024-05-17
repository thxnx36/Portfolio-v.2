import { FC } from "react"
import { Paragraph } from "../../../shared"

type Props = {
  text?: { textOne: string; textTwo: string; textThree: string }
}

export const TextContent: FC<Props> = ({ text }) => {
  return (
    <>
      <li>
        <Paragraph sx={{ textAlign: "left" }}>{text?.textOne}</Paragraph>
      </li>
      <li>
        <Paragraph sx={{ textAlign: "left" }}>{text?.textTwo}</Paragraph>
      </li>
      <li>
        <Paragraph sx={{ textAlign: "left" }}>{text?.textThree}</Paragraph>
      </li>
    </>
  )
}
