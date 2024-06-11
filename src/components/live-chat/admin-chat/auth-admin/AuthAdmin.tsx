import { ChangeEvent, FC, FormEvent } from 'react'
import { Button, Input } from 'src/shared'
import styles from './AuthAdmin.module.css'

type Props = {
  value: string
  onLogin: (e: FormEvent) => void
  onChangePass: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AuthAdmin: FC<Props> = ({ value, onLogin, onChangePass }) => {
  return (
    <div className={styles.authContainer}>
      <form onSubmit={onLogin} className={styles.auth}>
        <Input
          id='input-password'
          name='password'
          type='password'
          value={value}
          placeholder='password'
          onChange={onChangePass}
        />
        <Button text='Log in' disabled={!value.length}  />
      </form>
    </div>
  )
}
