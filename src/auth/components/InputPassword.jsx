import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from '@mui/material'
import React, { useState } from 'react'

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <FormControl fullWidth variant='standard' margin='normal'>
      <InputLabel color='secondary' htmlFor='standard-adornment-password'>Contraseña</InputLabel>
      <Input
        color='secondary'
        id='standard-adornment-password'
        type={showPassword ? 'text' : 'password'}
        required
        autoComplete='current-password'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
