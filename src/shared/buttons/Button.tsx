import { CSSProperties, FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Props = {
  text: string
  icon?: ReactNode
  tag?: 'a' | 'link'
  to?: string
  href?: string
  target?: '_blank' | '_top'
  type?: 'submit'
  sx?: CSSProperties
  disabled?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = ({
  text,
  icon,
  sx,
  disabled,
  tag,
  to,
  type,
  target,
  href,
  onClick,
}) => {
  const innerContent = () => {
    return (
      <>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{icon}</span>
      </>
    )
  }
  return (
    <>
      {tag === 'link' && to ? (
        <Link style={sx} className={styles.button} to={to}>
          {innerContent()}
        </Link>
      ) : tag === 'a' ? (
        <a style={sx} target={target} className={styles.button} href={href}>
          {innerContent()}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          style={sx}
          className={
            disabled ? `${styles.button} ${styles.disabled}` : styles.button
          }
        >
          <div className={styles.content}>{innerContent()}</div>
        </button>
      )}
    </>
  )
}
