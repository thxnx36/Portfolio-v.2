import { FC } from "react"
import { Paragraph } from "../../../shared"

type Props = {
  stackList?: string[]
}

export const StackList: FC<Props> = ({ stackList }) => {
  return (
    <Paragraph style={{ maxWidth: "100%", textAlign: "center", margin: 0 }}>
      {stackList}
    </Paragraph>
  )
}
