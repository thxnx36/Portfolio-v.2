import { CSSProperties, FC } from 'react'
import styles from './Avatar.module.css'

type Props = {
  src: string
  withBorder?: boolean
  sx?: CSSProperties
  tag?: 'div' | 'button'
  onClick?: () => void
}
export const Avatar: FC<Props> = ({ src, withBorder, sx, tag, onClick }) => {
  const Tag = tag || 'div'
  return (
    <Tag
      onClick={onClick}
      style={sx}
      className={
        withBorder ? `${styles.photo} ${styles.withBorder}` : styles.photo
      }
    >
      <img src={src} alt='User-photo' />
    </Tag>
  )
}
