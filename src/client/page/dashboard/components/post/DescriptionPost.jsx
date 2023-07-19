import { Button, Typography } from '@mui/material'
import React from 'react'

export const DescriptionPost = ({ description }) => {
  return (
    <Typography variant='body1'>
      {description} <Button color='secondary'> ver más</Button>
    </Typography>
  )
}
