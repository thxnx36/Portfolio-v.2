import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  text: string
  icon?: ReactNode
  tag?: 'a' | 'link'
  to?: string
  href?: string
  target?: '_blank' | '_top'
  type?: 'submit'
  disabled?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = ({
  text,
  icon,
  disabled,
  tag,
  to,
  type,
  target,
  href,
  onClick,
  ...props
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
        <Link className={styles.button} to={to} {...props}>
          {innerContent()}
        </Link>
      ) : tag === 'a' ? (
        <a {...props} target={target} className={styles.button} href={href}>
          {innerContent()}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          {...props}
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
