import { FC, useContext } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ThemeContext } from '../../providers'
import { getEnvVars } from '../../utils'

type Props = {
  onChange: (value: string | null) => void
}

export const ReCaptcha: FC<Props> = ({ onChange }) => {
  const { theme } = useContext(ThemeContext)
  const env = getEnvVars()
  return (
    <ReCAPTCHA
      //@ts-ignore
      theme={theme}
      sitekey={env.apiCaptchaSiteKey}
      onChange={onChange}
    />
  )
}
