import { Paragraph } from "../../commons/paragraph/Paragraph"
import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { Title } from "../../commons/title/Title"
import { useServicesList } from "../../constans/text/services-list"
import { text } from "../../constans/text/text"
import styles from "./MyServices.module.css"
import { Card } from "./card/Card"

export const MyServices = () => {
  const servicesList = useServicesList()

  return (
    <Section>
      <SectionHeader
        title={text.myServices.TITLE}
        subTitle={text.myServices.SUBTITLE}
      />
      <div className={styles.servicesItem}>
        {servicesList.map(({ title, text, icon, id }) => (
          <Card title={title} subTitle={text} icon={icon} key={id} />
        ))}
      </div>
    </Section>
  )
}
