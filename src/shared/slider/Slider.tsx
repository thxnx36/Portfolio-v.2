import { FC, ReactElement, ReactNode } from 'react'
import Carousel from 'react-multi-carousel'
import { RESPONSIVE } from '../../constans'
import styles from './Slider.module.css'

type Props = {
  leftArrow?: ReactElement
  rightArrow?: ReactElement
  children: ReactNode
}

export const Slider: FC<Props> = ({ children }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass={styles.container}
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass={styles.item}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={RESPONSIVE}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  )
}
