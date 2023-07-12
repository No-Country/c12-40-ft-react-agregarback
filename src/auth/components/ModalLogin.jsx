import React from 'react'
import { CloseAction } from './CloseAction'
import { LogoDescription } from './LogoDescription'
import { Grid, TextField } from '@mui/material'
import { InputPassword } from './InputPassword'
import { Separator } from './Separator'
import { AccountDescription } from './AccountDescription'
import { ButtonFirebase } from './ButtonFirebase'
import { useAuth } from '../hook/useAuth'
import { GoogleSVG } from '../icon/GoogleSVG'
import { useAppSelector } from '../../common/store/config'
import { ButtonSubmit } from './ButtonSubmit'

export const ModalLogin = ({ register, submit, errors, event, isValid }) => {
  const auth = useAppSelector((state) => state.auth.user)
  const { userRegisterWithGoogle } = useAuth()

  return (
    <>
      <CloseAction />
      <LogoDescription title='Logueate en Lowdy' />
      <form onSubmit={submit(event)}>
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
        <ButtonSubmit title='Iniciar sesión' isValid={isValid} status={auth.status} />
      </form>
      <Separator />
      <Grid container spacing={2} mt={1}>
        <ButtonFirebase
          click={userRegisterWithGoogle}
          title='Ingresar con Google'
          icon={<GoogleSVG />}
          status={auth.status}
        />
      </Grid>
      <AccountDescription
        path='/auth/register'
        title='¿No tienes cuenta aún?'
        linkName='Registrarse'
      />
    </>
  )
}
