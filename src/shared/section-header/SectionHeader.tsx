import { FC } from "react"
import { Title } from "../title/Title"
import { Paragraph } from "../paragraph"

type Props = {
  title: string
  subTitle: string
}

export const SectionHeader: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Title tag="h2">{title}</Title>
      <Paragraph>{subTitle}</Paragraph>
    </>
  )
}
