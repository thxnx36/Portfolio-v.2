import type { ChangeEvent, SyntheticEvent } from 'react'
import { useState, useCallback, useEffect } from 'react'
import type { FormType } from '../types'
import { usePostEmailMutation } from '../app/api'
import { toast } from 'react-toastify'

const INITIAL_STATE = {
  name_from: '',
  email_from: '',
  message: '',
}

type Props = {
  f: () => void
  infoMessage: string
  reCaptchaToken: string | null
}

export const useSendEmail = ({ infoMessage, reCaptchaToken, f }: Props) => {
  const [sendEmail, { isLoading, isSuccess, isError }] = usePostEmailMutation()
  const [form, setForm] = useState<FormType>(INITIAL_STATE)
  const [isSendFormError, setIsSendError] = useState<boolean>(false)

  const handleChange = useCallback(
    (field: keyof FormType) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target as HTMLInputElement | HTMLTextAreaElement
        setForm(prev => ({
          ...prev,
          [field]: value,
        }))
      },
    [],
  )

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await sendEmail({ ...form, reCaptchaToken })
  }

  useEffect(() => {
    if (isError) {
      setIsSendError(true)
    }
    if (isSuccess) {
      toast.success(infoMessage)
      f()
    }
  }, [isError, isSuccess, f, setIsSendError, infoMessage])

  const isDisabledButton =
    !form.name_from ||
    !form.email_from ||
    !form.message ||
    isLoading ||
    !reCaptchaToken

  return {
    form,
    isLoading,
    isSendFormError,
    isDisabledButton,
    onSubmit,
    handleChange,
  }
}
