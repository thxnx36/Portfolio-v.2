import { CardsContainer, Section, SectionHeader } from "../../commons"
import { useServicesList } from "../../hooks"
import { text } from "../../localization/text"
import { Card } from "./card/Card"

export const MyServices = () => {
  const { servicesList } = useServicesList()

  return (
    <Section animated={false} id="services">
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
