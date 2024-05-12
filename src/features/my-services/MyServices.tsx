import { CardsContainer } from "../../commons/cards-container/CardsContainer"
import { Paragraph } from "../../commons/paragraph/Paragraph"
import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { Title } from "../../commons/title/Title"
import { useServicesList } from "../../hooks/use-services-list"
import { text } from "../../localization/text"
import { Card } from "./card/Card"

export const MyServices = () => {
  const servicesList = useServicesList()

  return (
    <Section>
      <SectionHeader
        title={text.myServices.TITLE}
        subTitle={text.myServices.SUBTITLE}
      />
      <CardsContainer>
        {servicesList.map(({ title, text, icon, id }) => (
          <Card title={title} subTitle={text} icon={icon} key={id} />
        ))}
      </CardsContainer>
    </Section>
  )
}
