import type { FC } from 'react'
import styles from './Head.module.css'
import { PagesHead } from 'src/shared'

type Props = {
  onClick: () => void
  projectTitle?: string
  imgSrc?: string
}

export const Head: FC<Props> = ({ onClick, projectTitle, imgSrc }) => {
  return (
    <>
      <PagesHead onClick={onClick} title={projectTitle} />
      <div className={styles.headImg}>
        <img src={imgSrc} alt={`${projectTitle}-project`} />
      </div>
    </>
  )
}
