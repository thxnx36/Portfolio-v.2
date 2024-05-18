import { FC, useContext } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ThemeContext } from '../../providers'

type Props = {
  onChange: (value: string | null) => void
}

export const ReCaptcha: FC<Props> = ({ onChange }) => {
  const { theme } = useContext(ThemeContext)
  const key = '6LeHRuEpAAAAAN85i4oh3n-q-xvObU4mK_N8t-eG'
  // import.meta.env.VITE_CAPTCHA_SITE_KEY

  return (
    <ReCAPTCHA
      //@ts-ignore
      theme={theme}
      sitekey={key}
      onChange={onChange}
    />
  )
}
