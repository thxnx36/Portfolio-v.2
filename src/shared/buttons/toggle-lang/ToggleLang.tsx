import { Fragment, type FC } from 'react'
import { ENG, LANG } from 'src/constants'
import styles from './ToggleLang.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
  uniqueToggletId: string
}

export const ToggleLang: FC<Props> = ({ uniqueToggletId }) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const onChangeLanguage = (language: string) => i18n.changeLanguage(language)

  const isCurrentLanguage = (value: string) => value === currentLanguage

  return (
    <div className={styles.tabs}>
      {LANG.map(({ id, label, value }) => (
        <Fragment key={id}>
          <input
            value={value}
            type='checkbox'
            className={styles.checkbox}
            id={`${uniqueToggletId}-${id}`}
            onChange={() => onChangeLanguage(value)}
            checked={isCurrentLanguage(value)}
            disabled={isCurrentLanguage(value)}
          />
          <label className={styles.tab} htmlFor={`${uniqueToggletId}-${id}`}>
            {label}
          </label>
        </Fragment>
      ))}
      <span
        className={`${styles.glider} ${isCurrentLanguage(ENG) ? styles.gliderEn : styles.gliderUk}`}
      />
    </div>
  )
}
