export type sendEmailPayloadType = {
  name_from: string
  email_from: string
  message: string
  reCaptchaToken: string | null
}
