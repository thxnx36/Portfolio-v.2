import styles from './ChatSkeleton.module.css'

export const ChatSkeleton = () => {
  return (
    <ul className={styles.chat}>
      <li className={`${styles.messageSkeleton} ${styles.user}`} />
      <li className={`${styles.messageSkeleton} ${styles.sender}`} />
      <li className={`${styles.messageSkeleton} ${styles.user}`} />
      <li className={`${styles.messageSkeleton} ${styles.sender} `} />
      <li className={`${styles.messageSkeleton} ${styles.sender}`} />
      <li className={`${styles.messageSkeleton} ${styles.user} `} />
    </ul>
  )
}
