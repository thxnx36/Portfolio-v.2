import type { FC } from 'react'
import { useContext } from 'react'
import { FaSun } from 'react-icons/fa'
import { IoMoonSharp } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { LIGHT, DARK } from 'src/constants'
import { ThemeContext } from 'src/providers'
import { Switcher, ToggleLang } from 'src/shared'
import styles from './Toolbar.module.css'

type Props = {
  uniqueIdForSwitcher: string
  uniqueToggletId: string
}

export const Toolbar: FC<Props> = ({ uniqueIdForSwitcher, uniqueToggletId }) => {
  const { i18n } = useTranslation()
  const { theme, changeTheme } = useContext(ThemeContext)

  const onChangeTheme = () => changeTheme(theme === LIGHT ? DARK : LIGHT)
  const onChangeLanguage = (language: string) => i18n.changeLanguage(language)

  const checkedSwitcher = theme === LIGHT
  const currentLanguage = i18n.language

  return (
    <div className={styles.toolbarBtns}>
      <Switcher
        checked={checkedSwitcher}
        checkedIcon={<FaSun />}
        uncheckedIcon={<IoMoonSharp />}
        uniqueId={uniqueIdForSwitcher}
        onChange={onChangeTheme}
      />
      <ToggleLang
        selectValue={currentLanguage}
        uniqueToggletId={uniqueToggletId}
        onChange={onChangeLanguage}
      />
    </div>
  )
}
