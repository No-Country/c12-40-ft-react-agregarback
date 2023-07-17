import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { Title } from '../../../components/Title'
import { useState, useEffect } from 'react'
import { TextField } from '@mui/material'

export const Step4 = ({ register, errors, watch, setValue }) => {
  const [dateUser, setDateUser] = useState(null)

  const validateDate = (date) => {
    const maxDate = dayjs('2007-01-01')
    return date.isAfter(maxDate)
  }

  useEffect(() => {
    register('selectedDate', { required: true })
    if (watch('selectedDate')) {
      const result = dayjs(watch('selectedDate'))
      setValue('selectedDate', result.valueOf(), { shouldValidate: true })
      setDateUser(result)
    }
  }, [])

  return (
    <>
      <Title title='¿Cuándo naciste?' description='' />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label='Día de cumpleaños'
          value={dateUser ?? null}
          onChange={(date) => {
            setDateUser(date)
            setValue('selectedDate', date.valueOf(), { shouldValidate: true })
          }}
          shouldDisableDate={validateDate}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.selectedDate}
              helperText={errors.selectedDate && errors.selectedDate.message}
              fullWidth
            />
          )}
        />
      </LocalizationProvider>
    </>
  )
}
