import { FC } from "react"
import { TextContent } from "../text-content/TextContent"
import styles from "./Content.module.css"

const imgMock1 = "https://www.codingdojo.com/blog/wp-content/uploads/react.jpg"
const imgMock2 =
  "https://images.ctfassets.net/pdf29us7flmy/5O6ONqVdOq4gX0pnJwvOub/81af52481506636aeaa6291143c2a2b2/resized.jpg?w=720&q=100&fm=jpg"

type Props = {
  aboutProject?: any[]
}

export const Content: FC<Props> = ({ aboutProject }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphFirst} />
        ))}
      </ul>

      <div className={styles.contentImg}>
        <img src={imgMock1} alt="content-picture" />
      </div>

      <div className={styles.contentImg}>
        <img src={imgMock2} alt="content-picture" />
      </div>

      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphSecond} />
        ))}
      </ul>
    </div>
  )
}
