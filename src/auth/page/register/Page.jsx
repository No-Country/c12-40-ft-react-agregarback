import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material'

import { ContainerFlexCenter } from '../../../common/style/container/ContainerFlexCenter'
import { InputPassword } from '../../components/InputPassword'
import { Separator } from '../../components/Separator'
import HowDy from '../../../assets/Howdy.svg'
import { CloseAction } from '../../components/CloseAction'
import { AccountDescription } from '../../components/AccountDescription'

export const Page = () => {
  return (
    <Container maxWidth='sm' sx={{ marginTop: 2 }}>
      <CloseAction />
      <ContainerFlexCenter>
        <Avatar alt='Remy Sharp' src={HowDy} sx={{ width: 76, height: 76 }} />
        <Typography variant='h5' component='h2' color='black'>
          Registrate en Howdy
        </Typography>
      </ContainerFlexCenter>
      <form>
        <TextField
          id='name'
          label='Nombre completo'
          variant='standard'
          margin='normal'
          fullWidth
          color='secondary'
        />
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
