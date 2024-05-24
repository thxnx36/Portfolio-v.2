import type { EnvVarsType } from '../types'

export const ENV_VARS: EnvVarsType = {
  apiServicesId: import.meta.env.VITE_SERVICE_ID,
  apiTemplateId: import.meta.env.VITE_TEMPLATE_ID,
  apiEmailApiUrl: import.meta.env.VITE_API_URL,
  apiUserId: import.meta.env.VITE_USER_ID,
  apiCaptchaSecretKey: import.meta.env.VITE_CAPTCHA_SEKRET_KEY,
  apiCaptchaSiteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,
}
