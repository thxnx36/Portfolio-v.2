import { FC, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  children: ReactNode
}

export const TransitionContainer: FC<Props> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translate: '-100%' }}
        animate={{ translate: '0%' }}
        exit={{ translate: '100%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
