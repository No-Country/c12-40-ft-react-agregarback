import { Alert } from '@mui/material'
import React from 'react'

export const AlertError = ({ error, errorMessage }) => {
  return (
    <>
      {
        error && <Alert severity='error'>{errorMessage}</Alert>
      }
    </>
  )
}
