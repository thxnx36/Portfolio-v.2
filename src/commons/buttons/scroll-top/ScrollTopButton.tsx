import { IoIosArrowRoundUp } from "react-icons/io"
import { useScrollListener } from "../../../hooks"
import styles from "./ScrollTopButton.module.css"

export const ScrollTopButton = () => {
  const { scrollToTop, showButton } = useScrollListener()

  return (
    <>
      {showButton && (
        <button className={styles.scrollTopBtn} onClick={scrollToTop}>
          <span className={styles.arrow}>
            <IoIosArrowRoundUp size={"2.5em"} />
          </span>
        </button>
      )}
    </>
  )
}
