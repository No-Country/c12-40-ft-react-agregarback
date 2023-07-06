import {
  Button,
  Container,
  TextField
} from '@mui/material'

import { InputPassword } from '../../components/InputPassword'
import { Separator } from '../../components/Separator'
import { CloseAction } from '../../components/CloseAction'
import { AccountDescription } from '../../components/AccountDescription'
import { useForm } from 'react-hook-form'
import { LogoDescription } from '../../components/LogoDescription'

export const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const eventSubmit = (data) => {
    console.log(data)
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
        <Button
          type='submit'
          sx={{
            marginTop: 5,
            textTransform: 'none',
            fontSize: '16px',
            p: '13px'
          }}
          size='large'
          color='secondary'
          variant='contained'
          fullWidth
        >
          Crear cuenta
        </Button>
      </form>
      <Separator />
      <AccountDescription
        path='/login'
        title='¿Ya tienes una cuenta?'
        linkName='Iniciar sesión'
      />
    </Container>
  )
}
