import type { FC } from 'react'
import { useContext } from 'react'
import { Switcher, ToggleLang } from '../../../shared'
import { FaSun } from 'react-icons/fa'
import { IoMoonSharp } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../../providers'
import { DARK, LIGHT } from '../../../constants'
import styles from './Toolbar.module.css'

type Props = {
  uniqueIdForSwitcher: string
  uniqSelectId: string
  reverse?: boolean
}

export const Toolbar: FC<Props> = ({
  uniqueIdForSwitcher,
  uniqSelectId,
  reverse,
}) => {
  const { i18n } = useTranslation()
  const { theme, changeTheme } = useContext(ThemeContext)

  const onChangeTheme = () => changeTheme(theme === LIGHT ? DARK : LIGHT)
  const onChangeLanguage = (language: string) => i18n.changeLanguage(language)

  const checkedSwitcher = theme === LIGHT
  const currentLanguage = i18n.language

  return (
    <div
      className={
        reverse ? `${styles.toolbarBtns} ${styles.reverse}` : styles.toolbarBtns
      }
    >
      <Switcher
        checked={checkedSwitcher}
        checkedIcon={<FaSun />}
        uncheckedIcon={<IoMoonSharp />}
        uniqueId={uniqueIdForSwitcher}
        onChange={onChangeTheme}
      />
      <ToggleLang
        selectValue={currentLanguage}
        uniqSelectId={uniqSelectId}
        onChange={onChangeLanguage}
      />
    </div>
  )
}
