import type { FC, ReactNode } from 'react'
import styles from './CardsContainer.module.css'

type Props = {
  children: ReactNode
}

export const CardsContainer: FC<Props> = ({ children }) => {
  return <div className={styles.cardsContainer}>{children}</div>
}
