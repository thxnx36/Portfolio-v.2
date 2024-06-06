import { Fragment, type ChangeEvent, type FC } from 'react'
import { ENG, LANG } from 'src/constants'
import styles from './ToggleLang.module.css'

type Props = {
  uniqueToggletId: string
  onChange: (value: string) => void
  selectValue: string
}
export const ToggleLang: FC<Props> = ({
  onChange,
  uniqueToggletId,
  selectValue,
}) => {
  const onChangeLang = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value)

  const isCurrentLang = (value: string) => value === selectValue

  return (
    <div className={styles.tabs}>
      {LANG.map(({ id, label, value }) => (
        <Fragment key={id}>
          <input
            value={value}
            type='checkbox'
            className={styles.checkbox}
            id={`${uniqueToggletId}-${id}`}
            onChange={onChangeLang}
            checked={isCurrentLang(value)}
            disabled={isCurrentLang(value)}
          />
          <label className={styles.tab} htmlFor={`${uniqueToggletId}-${id}`}>
            {label}
          </label>
        </Fragment>
      ))}
      <span
        className={`${styles.glider} ${isCurrentLang(ENG) ? styles.gliderEn : styles.gliderUk}`}
      />
    </div>
  )
}
