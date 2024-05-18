import { FC, useContext } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ThemeContext } from '../../providers'

type Props = {
  onChange: (value: string | null) => void
}

export const ReCaptcha: FC<Props> = ({ onChange }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ReCAPTCHA
      //@ts-ignore
      theme={theme}
      sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
      onChange={onChange}
    />
  )
}
