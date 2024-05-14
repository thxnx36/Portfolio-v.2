import { FC } from "react"
import { Paragraph } from "../paragraph/Paragraph"
import { Title } from "../title/Title"

type Props = {
  title: string
  subTitle: string
}

export const SectionHeader: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Title type="h2">{title}</Title>
      <Paragraph>{subTitle}</Paragraph>
    </>
  )
}
