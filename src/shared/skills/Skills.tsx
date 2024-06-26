import type { FC } from 'react'
import { Paragraph } from '../paragraph/Paragraph'
import { ProgressLine } from '../progress-line/ProgressLine'
import styles from './Skils.module.css'

type Props = {
  nameSkill: string
  progress: number
  showPercentenes?: boolean
}

export const Skills: FC<Props> = ({ progress, nameSkill, showPercentenes }) => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.info}>
        <Paragraph style={{ margin: 0 }}>{nameSkill}</Paragraph>
        {showPercentenes && (
          <Paragraph style={{ margin: 0 }}>{`${progress}%`}</Paragraph>
        )}
      </div>
      <ProgressLine progress={progress} />
    </div>
  )
}
