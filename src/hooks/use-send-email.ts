import {
  useState,
  useCallback,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from 'react'
import { FormType } from '../types/form-type'
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
}

export const useSendEmail = ({ infoMessage, f }: Props) => {
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
    await sendEmail(form)
  }

  useEffect(() => {
    if (isError) {
      setIsSendError(true)
    }
    if (isSuccess) {
      toast.success(infoMessage)
      f()
    }
  }, [isError, isSuccess, f, setIsSendError])

  const isDisabledButton =
    !form.name_from || !form.email_from || !form.message || isLoading

  return {
    form,
    isLoading,
    isSendFormError,
    isDisabledButton,
    onSubmit,
    handleChange,
  }
}
