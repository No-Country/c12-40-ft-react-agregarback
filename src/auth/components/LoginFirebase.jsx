import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'

export const LoginFirebase = () => {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12}>
        <Button size='large' fullWidth variant='outlined' sx={{ color: 'black', border: '1px solid black' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textTransform: 'none' }}>
            <GoogleIcon fontSize='medium' />
            <Box sx={{ ml: 1 }}>
              <Typography variant='body2'>Iniciar sesión con Google</Typography>
            </Box>
          </Box>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button size='large' fullWidth variant='outlined' sx={{ color: 'black', border: '1px solid black' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textTransform: 'none' }}>
            <FacebookSharpIcon fontSize='medium' />
            <Box sx={{ ml: 1 }}>
              <Typography variant='body2'>Iniciar sesión con Facebook</Typography>
            </Box>
          </Box>
        </Button>
      </Grid>
    </Grid>
  )
}
