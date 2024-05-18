import { FC } from 'react'
import styles from './ProgressLine.module.css'

type Props = {
  progress: number
}

export const ProgressLine: FC<Props> = ({ progress }) => {
  return (
    <div className={styles.line}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  )
}
