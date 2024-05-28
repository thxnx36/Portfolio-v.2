import type { FC } from 'react'
import { motion } from 'framer-motion'
import { motionProgrLine } from '../../constants'
import styles from './ProgressLine.module.css'

type Props = {
  progress: number
}

export const ProgressLine: FC<Props> = ({ progress }) => {
  return (
    <div className={styles.line}>
      <motion.progress
        initial={motionProgrLine.initial}
        whileInView={motionProgrLine.whileInView}
        variants={{
          hidden: {
            width: '0%',
            opacity: 1,
          },
          visible: {
            width: `${progress}%`,
            opacity: 1,
          },
        }}
        transition={motionProgrLine.transition}
        className={styles.progress}
      />
    </div>
  )
}
