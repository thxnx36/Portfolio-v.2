import styles from './ChatSkeleton.module.css'

export const ChatSkeleton = () => {
  return (
    <div className={styles.chat}>
      <div className={`${styles.messageSkeleton} ${styles.user}`}></div>
      <div className={`${styles.messageSkeleton} ${styles.sender}`}></div>
      <div className={`${styles.messageSkeleton} ${styles.user}`}></div>
      <div className={`${styles.messageSkeleton} ${styles.sender}`}></div>
    </div>
  )
}
