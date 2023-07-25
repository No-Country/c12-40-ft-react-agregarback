import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Howdy from '../../../../assets/Howdy.svg'

export const NotChatYet = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

      <Avatar src={Howdy} alt='Howdy' />
      <Typography variant='h4' p={2}>Chatear con amigos</Typography>
      <Typography variant='body1' p={2}>Envía y recibe mensajes a través de Howdy.  Respetando a la comunidad.</Typography>
    </Box>
  )
}
