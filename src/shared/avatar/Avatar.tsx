import { FC, HTMLAttributes } from 'react'
import styles from './Avatar.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  src: string
  withBorder?: boolean
  onClick?: () => void
}
export const Avatar: FC<Props> = ({
  src,
  withBorder,
  onClick,
  className,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.photo} ${withBorder ? styles.withBorder : ''} ${className || ''}`}
      {...props}
    >
      <img src={src} alt='User-photo' />
    </div>
  )
}
