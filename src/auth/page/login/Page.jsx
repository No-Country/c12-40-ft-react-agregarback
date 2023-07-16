import { Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ModalLogin } from '../../components/ModalLogin'
import { useAuth } from '../../hook/useAuth'

export const Page = () => {
  const { userLogin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'all' })

  const eventSubmit = (data) => {
    userLogin(data)
  }

  return (
    <Container maxWidth='sm' sx={{ marginTop: 2 }}>
      <ModalLogin
        register={register}
        submit={handleSubmit}
        errors={errors}
        event={eventSubmit}
        isValid={isValid}
      />
    </Container>
  )
}
