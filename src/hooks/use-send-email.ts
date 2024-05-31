import type { ChangeEvent, SyntheticEvent } from 'react'
import type { FormType } from '../types'
import { useState } from 'react'
import { usePostEmailMutation } from '../app/api'
import { toast } from 'react-toastify'

const INITIAL_STATE = {
  from: '',
  nameSender: '',
  text: '',
}

type Props = {
  f: () => void
  successMessage: string
  infoMessage: string
  reCaptchaToken: string | null
}

export const useSendEmail = ({
  successMessage,
  infoMessage,
  reCaptchaToken,
  f,
}: Props) => {
  const [sendEmail, { isLoading }] = usePostEmailMutation()
  const [form, setForm] = useState<FormType>(INITIAL_STATE)
  const [isSendFormError, setIsSendError] = useState<boolean>(false)

  const handleChange =
    (field: keyof FormType) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target as HTMLInputElement | HTMLTextAreaElement
      setForm(prev => ({
        ...prev,
        [field]: value,
      }))
    }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      await sendEmail(form).unwrap()
      toast.success(successMessage)
      f()
    } catch {
      setIsSendError(true)
      toast.info(infoMessage)
    }
  }

  const isDisabledButton =
    !form.from || !form.nameSender || !form.text || isLoading || !reCaptchaToken

  return {
    form,
    isLoading,
    isSendFormError,
    isDisabledButton,
    onSubmit,
    handleChange,
  }
}
