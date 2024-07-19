import type { FC, HTMLAttributes } from 'react'
import { classNames } from 'src/utils'
import styles from './Avatar.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  src: string
  tag?: 'div' | 'button'
  withBorder?: boolean
  onClick?: () => void
}
export const Avatar: FC<Props> = ({
  src,
  withBorder,
  onClick,
  className,
  tag,
  ...props
}) => {
  const Tag = tag || 'div'

  return (
    <Tag
      onClick={onClick}
      className={classNames(
        styles.avatar,
        withBorder && styles.withBorder,
        className,
      )}
      {...props}
    >
      <img src={src} alt='User photo' />
    </Tag>
  )
}
