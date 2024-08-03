import { useContext } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { ThemeContext } from 'src/providers'
import { LANG, LANGUAGES, THEME } from 'src/constants'
import { useTranslation } from 'react-i18next'
import { classNames } from 'src/utils'
import styles from './Toolbar.module.css'

export const Toolbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language

  const themeButtons = [
    {
      id: 1,
      icon: <BsSun size='0.9em' />,
      value: THEME.LIGHT,
    },
    {
      id: 2,
      icon: <BsMoon size='0.9em' />,
      value: THEME.DARK,
    },
  ]

  const onChangeTheme = () =>
    changeTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  const onChangeLanguage = (language: string) => i18n.changeLanguage(language)

  return (
    <div role='radiogroup' className={styles.toolbarContainer}>
      <button
        className={styles.toolbarSwitch}
        value={theme === THEME.DARK ? themeButtons[0].value : themeButtons[1].value}
        role='radio'
        onClick={onChangeTheme}
      >
        {theme === THEME.DARK ? themeButtons[0].icon : themeButtons[1].icon}
      </button>
      <button
        className={classNames(styles.toolbarSwitch, styles.switchLang)}
        value={
          currentLanguage === LANGUAGES.ENG ? LANG[1].value : LANG[0].value
        }
        role='radio'
        onClick={() =>
          onChangeLanguage(
            currentLanguage === LANGUAGES.ENG ? LANG[1].value : LANG[0].value,
          )
        }
      >
        {currentLanguage === LANGUAGES.ENG ? LANG[1].label : LANG[0].label}
      </button>
    </div>
  )
}
