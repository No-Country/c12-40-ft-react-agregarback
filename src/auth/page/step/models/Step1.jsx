import React from 'react'
import PublicIcon from '@mui/icons-material/Public'
import { SelectInput } from '../../../components/SelectInput'
import { Title } from '../../../components/Title'

export const Step1 = ({ register, unregister, setValue, errors }) => {
  const data = [
    {
      value: 'Mexico',
      title: 'Hello world',
      id: crypto.randomUUID()
    }
  ]

  return (
    <>
      <Title title='¿De dónde eres?' description='País de origen' />

      <SelectInput
        label='País'
        name='selectorCountry'
        items={data}
        register={register}
        errors={errors}
        icon={<PublicIcon />}
      />

    </>
  )
}
