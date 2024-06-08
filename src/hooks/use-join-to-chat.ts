import { useCreateUserMutation } from 'src/app'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormEmail = {
  email: string
}

const INITIAL_STATE: FormEmail = {
  email: '',
}

type Props = {
  setIsJoined: (value: string) => void
  setEmail: (value: string) => void
  infoMessage: string
}

export const useJoinToChat = ({
  infoMessage,
  setIsJoined,
  setEmail,
}: Props) => {
  const [createUser, { isLoading }] = useCreateUserMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
    clearErrors,
  } = useForm<FormEmail>({
    mode: 'onBlur',
    defaultValues: INITIAL_STATE,
  })

  const handleChange =
    (field: keyof FormEmail) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setValue(field, value)
      clearErrors(field)
    }

  const onSubmit: SubmitHandler<FormEmail> = async ({ email }: FormEmail) => {
    try {
      await createUser({ email }).unwrap()
      setIsJoined('true')
      setEmail(email)
    } catch {
      toast.info(infoMessage)
      setIsJoined('false')
    }
  }

  const isDisabledButton = isSubmitting || !isValid || isLoading

  return {
    register,
    handleSubmit,
    handleChange,
    errors,
    isLoading,
    isDisabledButton,
    onSubmit,
  }
}
