import { useEffect, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './FlipWord.module.css'

type Props = {
  words: { id: number; content: string }[]
  duration?: number
  classNameText?: string
}

export const FlipWord: FC<Props> = ({
  words,
  classNameText,
  duration = 3000,
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(state => {
        if (state >= words.length - 1) return 0
        return state + 1
      })
    }, duration)
    return () => clearInterval(id)
  }, [duration, words.length])

  return (
    <div className={styles.flipWordContainer}>
      <AnimatePresence>
        <motion.div
          key={words[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          className={`${styles.words} ${classNameText}`}
        >
          {words[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
