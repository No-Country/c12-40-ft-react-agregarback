import React from 'react'
import { Title } from './Title'
import { SelectInput } from './SelectInput'
import PublicIcon from '@mui/icons-material/Public'

export const Step1 = ({ register, unregister, setValue, errors }) => {
  const data = [
    {
      value: 'Mexico',
      title: 'Hello world',
      id: crypto.randomUUID()
    }
  ]

  return (
    <div>
      <Title title='¿De dónde eres?' description='País de origen' />

      <SelectInput
        label='País'
        name='selectorCountry'
        items={data}
        register={register}
        errors={errors}
        icon={<PublicIcon />}
      />

    </div>
  )
}
