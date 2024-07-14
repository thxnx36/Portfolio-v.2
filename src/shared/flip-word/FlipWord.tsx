import { useCallback, useEffect, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  words: string[]
  duration?: number
  classNameText?: string
  classNameTextWrap?: string
}

export const FlipWord: FC<Props> = ({
  words,
  classNameText,
  classNameTextWrap,
  duration = 3000,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, duration)
      return () => clearTimeout(timeout)
    }
  }, [duration, isAnimating, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          type: 'just',
          
          /* stiffness: 100,
          damping: 10 */
        }}
        
        /* exit={{
          opacity: 0,
          y: -40,
          x: 0,
          filter: 'blur(8px)',
          scale: 1.2,
          position: 'absolute',
        }} */
        key={currentWord}
        onAnimationComplete={() => {
          setIsAnimating(false)
        }}
        className={classNameTextWrap}
      >
        {currentWord.split('').map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className={classNameText}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
