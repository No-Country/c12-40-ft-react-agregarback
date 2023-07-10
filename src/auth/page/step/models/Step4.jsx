import { LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import React, { useState } from 'react'
import { Title } from '../../../components/Title'

export const Step4 = ({ register, errros }) => {
  const [value, setValue] = useState(null)

  return (
    <>
      <Title title='¿Cuándo naciste?' description='' />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label='Día de cumpleaños'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  )
}
