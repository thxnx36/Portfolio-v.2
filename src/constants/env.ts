import type { EnvVarsType } from '../types'

export const ENV_VARS: EnvVarsType = {
  apiMailerUrl: import.meta.env.VITE_MAILER_API_URL,
  apiTelegramUrl: import.meta.env.VITE_API_TELEGRAM_URL,
  apiCaptchaSecretKey: import.meta.env.VITE_CAPTCHA_SEKRET_KEY,
  apiCaptchaSiteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,
  apiServerUrl: import.meta.env.VITE_SERVER_URL,
  apiChatUrl: import.meta.env.VITE_API_CHAT_URL,
  getEmail: import.meta.env.VITE_EMAIL,
}
