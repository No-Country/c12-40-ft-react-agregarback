import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import React, { useState } from 'react'

export const SelectInput = ({
  label,
  items = [],
  name,
  register,
  errors,
  icon,
  watch
}) => {
  const [adorn, setAdorn] = useState(false)

  const handleFocus = () => {
    setAdorn(true)
  }

  return (
    <FormControl fullWidth error={!!errors[name]}>
      <InputLabel color='secondary' id='demo-simple-select-label'>
        {label}
      </InputLabel>
      <Select
        onFocus={handleFocus}
        onBlur={() => setAdorn(false)}
        labelId='demo-simple-select-label'
        id={name}
        name={name}
        label={label}
        value={watch(name) ?? ''}
        color='secondary'
        {...register(name, { required: true })}
        startAdornment={
          adorn
            ? (
              <InputAdornment position='start'>{icon}</InputAdornment>
              )
            : null
        }
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.value.toLowerCase()}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {errors[name] && (
        <FormHelperText error>Este campo es requerido</FormHelperText>
      )}
    </FormControl>
  )
}
