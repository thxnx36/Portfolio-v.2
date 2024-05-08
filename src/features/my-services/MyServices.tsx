import { Paragraph } from "../../commons/paragraph/Paragraph"
import { Title } from "../../commons/title/Title"
import { useServicesList } from "../../constans/text/services-list"
import { text } from "../../constans/text/text"
import styles from "./MyServices.module.css"
import { Card } from "./card/Card"

export const MyServices = () => {
  const servicesList = useServicesList()

  return (
    <section className={styles.services}>
      <Title>{text.myServices.TITLE}</Title>
      <Paragraph>{text.myServices.SUBTITLE}</Paragraph>
      <div className={styles.servicesItem}>
        {servicesList.map(({ title, text, icon, id }) => (
          <Card title={title} subTitle={text} icon={icon} key={id} />
        ))}
      </div>
    </section>
  )
}
