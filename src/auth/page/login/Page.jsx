import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { InputPassword } from '../../components/InputPassword'
import { Separator } from '../../components/Separator'

import { CloseAction } from '../../components/CloseAction'
import { LoginFirebase } from '../../components/LoginFirebase'
import { AccountDescription } from '../../components/AccountDescription'
import { LogoDescription } from '../../components/LogoDescription'

export const Page = () => {
  return (
    <Container maxWidth='sm' sx={{ marginTop: 2 }}>
      <CloseAction />
      <LogoDescription title='Logueate en Lowdy' />
      <form>
        <TextField
          id='email'
          label='Correo electrónico'
          variant='standard'
          type='email'
          margin='normal'
          fullWidth
          color='secondary'
          required
          autoComplete='current-password'
        />
        <InputPassword />
        <Button
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
    </Container>
  )
}
