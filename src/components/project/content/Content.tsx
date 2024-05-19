import { FC } from 'react'
import { TextContent } from '../text-content/TextContent'
import styles from './Content.module.css'

type Props = {
  aboutProject?: any[]
  project: any
}

export const Content: FC<Props> = ({ aboutProject, project }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphFirst} />
        ))}
      </ul>

      <div className={styles.contentImg}>
        <img src={project.srcPageFirst} alt='content-picture' />
      </div>

      <div className={styles.contentImg}>
        <img src={project.srcPageSecond} alt='content-picture' />
      </div>

      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphSecond} />
        ))}
      </ul>
    </div>
  )
}
