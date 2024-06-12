import { FC, ReactNode } from 'react'
import styles from './MarqueeBackground.module.css'

type Props = {
  children: ReactNode
  text: string
}

export const MarqueeBackground: FC<Props> = ({ children, text }) => {
  const renderMarquee = (direction: string) =>
    Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className={`${styles.marquee} ${styles[direction]}`}>
        <span>{text}</span>
      </div>
    ))

  return (
    <>
      <div className={styles.inner}>{children}</div>
      <div className={styles.blurredBackground}>
        <div className={styles.marqueContainer}>
          {renderMarquee('leftToRight')}
        </div>
        <div className={styles.marqueContainer}>
          {renderMarquee('rightToLeft')}
        </div>
        <div className={styles.marqueContainer}>
          {renderMarquee('leftToRight')}
        </div>
        <div className={styles.marqueContainer}>
          {renderMarquee('rightToLeft')}
        </div>
      </div>
    </>
  )
}
