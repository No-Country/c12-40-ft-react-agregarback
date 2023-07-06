import React from 'react'
import { CloseAction } from './CloseAction'
import { LogoDescription } from './LogoDescription'
import { Button, TextField } from '@mui/material'
import { InputPassword } from './InputPassword'
import { Separator } from './Separator'
import { LoginFirebase } from './LoginFirebase'
import { AccountDescription } from './AccountDescription'

export const ModalLogin = ({ register, submit, errors, event }) => {
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
          Iniciar sesión
        </Button>
      </form>
      <Separator />
      <LoginFirebase />
      <AccountDescription
        path='/register'
        title='¿No tienes cuenta aún?'
        linkName='Registrarse'
      />
    </>
  )
}
