import { FC, ReactNode, CSSProperties, useEffect, useState } from 'react'
import { IoMoonSharp } from 'react-icons/io5'
import { FaSun } from 'react-icons/fa6'
import { DARK, LIGHT } from '../../../constans'
import { getStorageValue } from '../../../utils/local-storage'
import styles from './ChangeThemeButton.module.css'

type Props = {
  onClick: () => void
  icon?: ReactNode
  sx?: CSSProperties
}

export const ChangeThemeButton: FC<Props> = ({ onClick, icon, sx }) => {
  const [theme, setTheme] = useState<string | null>(LIGHT)
  const currentTheme = getStorageValue('theme')

  useEffect(() => {
    setTheme(currentTheme)
  }, [])

  const onChangeIcon = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT
    setTheme(newTheme)
    onClick()
  }

  return (
    <div>
      <input
        id='checkbox'
        checked={theme === LIGHT}
        type='checkbox'
        className={styles.checkbox}
        onChange={onChangeIcon}
      />
      <label htmlFor='checkbox' className={styles.checkboxLabel}>
        <IoMoonSharp />
        <FaSun />
        <span className={styles.ball}></span>
      </label>
    </div>
  )
}
