import { IoIosArrowRoundUp } from 'react-icons/io'
import styles from './ScrollTopButton.module.css'

export const ScrollTopButton = () => {
  return (
    <button className={styles.scrollTopBtn}>
      <span className={styles.arrow}>
        <IoIosArrowRoundUp size={'2em'} />
      </span>
    </button>
  )
}
