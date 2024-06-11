import { useCreateUserMutation, useJoinUser } from 'src/app'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormEmail = {
  email: string
}

const INITIAL_STATE: FormEmail = {
  email: '',
}

type Props = {
  infoMessage: string
}

export const useJoinToChat = ({ infoMessage }: Props) => {
  const { setUserEmail, setJoinedUser, setIdUser } = useJoinUser()
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
      const createdUser = await createUser({ email }).unwrap()
      if (createdUser) {
        setJoinedUser(true)
        setUserEmail(createdUser?.email)
        setIdUser(createdUser?.userId)
      }
    } catch {
      toast.info(infoMessage)
      setJoinedUser(false)
      setUserEmail('')
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
