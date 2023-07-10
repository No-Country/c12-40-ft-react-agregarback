import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

export const SelectInput = ({ label, items = [], name, register, errors, icon }) => {
  const [value, setValue] = useState('')
  const [adorn, setAdorn] = useState(false)

  const handleBlur = () => {
    value === '' ? setAdorn(false) : setAdorn(true)
  }
  const handleChange = (e) => {
    if (e.target.value !== '') {
      setValue(e.target.value)
    }
  }

  return (
    <FormControl fullWidth error={!!errors[name]}>
      <InputLabel color='secondary' id='demo-simple-select-label'>
        {label}
      </InputLabel>
      <Select
        onFocus={() => setAdorn(true)}
        onBlur={handleBlur}
        labelId='demo-simple-select-label'
        id={name}
        name={name}
        label={label}
        value={value}
        color='secondary'
        {...register(name, { required: true })}
        onChange={handleChange}
        startAdornment={adorn ? <InputAdornment position='start'>{icon}</InputAdornment> : null}
      >
        {
          items.map(item => (
            <MenuItem key={item.id} value={item.value}>{item.title}</MenuItem>
          ))
        }
      </Select>
      {errors[name] && (
        <FormHelperText error>Este campo es requerido</FormHelperText>
      )}
    </FormControl>
  )
}
