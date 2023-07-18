import { Container, Grid, TextField } from '@mui/material'

import { InputPassword } from '../../components/InputPassword'
import { Separator } from '../../components/Separator'
import { CloseAction } from '../../components/CloseAction'
import { AccountDescription } from '../../components/AccountDescription'
import { useForm } from 'react-hook-form'
import { LogoDescription } from '../../components/LogoDescription'
import { useAuth } from '../../hook/useAuth'
import { useAppSelector } from '../../../common/store/config'
import { ButtonFirebase } from '../../components/ButtonFirebase'
import { GoogleSVG } from '../../icon/GoogleSVG'
import { ButtonSubmit } from '../../components/ButtonSubmit'

export const Page = () => {
  const { userRegister, userRegisterWithGoogle } = useAuth()
  const auth = useAppSelector((state) => state.auth.user)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'all' })

  const eventSubmit = (data) => {
    userRegister(data)
  }

  return (
    <Container maxWidth='sm' sx={{ marginTop: 2 }}>
      <CloseAction />
      <LogoDescription title='Registrate en Lowdy' />
      <form onSubmit={handleSubmit(eventSubmit)}>
        <TextField
          id='name'
          label='Nombre completo'
          variant='standard'
          margin='normal'
          fullWidth
          color='secondary'
          {...register('name', { required: true })}
          error={!!errors.email}
          helperText={errors.email && 'Este campo es requerido'}
        />
        <TextField
          id='email'
          label='Correo electrónico'
          variant='standard'
          type='email'
          margin='normal'
          fullWidth
          color='secondary'
          autoComplete='current-password'
          error={!!errors.email}
          {...register('email', { required: true })}
          helperText={errors.email && 'Este campo es requerido'}
        />
        <InputPassword register={register} errors={errors} />
        <ButtonSubmit title='Crear cuenta' isValid={isValid} status={auth.status} />
      </form>
      <Separator />
      <Grid container spacing={2} mt={1}>
        <ButtonFirebase
          click={userRegisterWithGoogle}
          title='Registrarse con Google'
          icon={<GoogleSVG />}
          status={auth.status}
        />
      </Grid>
      <AccountDescription
        path='/auth/login'
        title='¿Ya tienes una cuenta?'
        linkName='Iniciar sesión'
      />
    </Container>
  )
}
