import { Typography } from '@mui/material'
import React from 'react'

export const TitleSeparator = ({ children }) => {
  return (
    <Typography
      sx={{ border: '1px solid #B4D65E', p: 2, width: '100%', fontWeight: 'bold', borderRadius: '.5rem' }}
      variant='h5'
      component='h2'
    >
      {children}
    </Typography>
  )
}
