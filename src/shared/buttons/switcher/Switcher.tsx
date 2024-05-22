import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Switcher.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  onChange: () => void
  uniqueId: string
  checked?: boolean
  checkedIcon?: ReactNode
  uncheckedIcon?: ReactNode
}

export const Switcher: FC<Props> = ({
  onChange,
  uniqueId,
  checked,
  checkedIcon,
  uncheckedIcon,
  ...props
}) => {
  return (
    <div {...props}>
      <input
        id={uniqueId}
        checked={checked}
        type='checkbox'
        className={styles.checkbox}
        onChange={onChange}
      />
      <label htmlFor={uniqueId} className={styles.checkboxLabel}>
        {uncheckedIcon}
        {checkedIcon}
        <span className={styles.ball}></span>
      </label>
    </div>
  )
}
