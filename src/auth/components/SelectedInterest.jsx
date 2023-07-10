import { Chip, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const SelectedInterest = ({ register, errors, icon, name, label, placeholder }) => {
  const [value, setValue] = useState('')
  const [interests, setInterests] = useState([])

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setInterests((data) => [...data, { data: value, id: crypto.randomUUID() }])
      setValue('')
    }
  }
  const handleDelete = (deletedInterest) => {
    const updatedInterests = interests.filter((interest) => interest.id !== deletedInterest)
    setInterests(updatedInterests)
  }

  register(name, { value: interests })

  return (
    <Grid container>
      <Grid item xs={12} />
      <TextField
        fullWidth
        onKeyDown={handleKeyPress}
        id={name}
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        variant='outlined'
        error={!!errors.email}
        helperText={errors.email && 'Este campo es requerido'}
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              {icon}
            </InputAdornment>
          )
        }}
      />
      <Grid item xs={12} sx={{ display: 'flex', mt: 1 }}>
        <Typography>{interests.length}</Typography>/<Typography>20</Typography>
      </Grid>
      <Grid gap={2} item xs={12} sx={{ display: 'flex', mt: 1, flexWrap: 'wrap' }}>
        {interests.map((i) => (
          <Chip color='secondary' key={i.id} label={i.data} onDelete={() => handleDelete(i.id)} />
        ))}
      </Grid>

    </Grid>
  )
}
