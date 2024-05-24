import type { ChangeEvent, FC } from 'react'
import { LANG } from '../../constans'
import styles from './ToggleLang.module.css'
import { BsTranslate } from 'react-icons/bs'
type Props = {
  uniqSelectId: string
  onChange: (value: string) => void
  selectValue: string
  size?: string
}
export const ToggleLang: FC<Props> = ({
  onChange,
  uniqSelectId,
  selectValue,
  size = '1.4em',
}) => {
  const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value)
  const disabledOption = (value: string) => value === selectValue

  return (
    <div className={styles.container}>
      <select id={uniqSelectId} value={selectValue} onChange={onChangeLang}>
        {LANG.map(({ id, label, value }) => (
          <option key={id} value={value} disabled={disabledOption(value)}>
            {label}
          </option>
        ))}
      </select>
      <BsTranslate size={size} />
    </div>
  )
}
