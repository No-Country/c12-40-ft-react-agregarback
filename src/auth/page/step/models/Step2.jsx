import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { SelectInput } from '../../../components/SelectInput'
import { Title } from '../../../components/Title'

export const Step2 = ({ register, errors, watch }) => {
  const data = [
    {
      value: 'english',
      title: 'English',
      id: crypto.randomUUID()
    },
    {
      value: 'spanish',
      title: 'Spanish',
      id: crypto.randomUUID()
    }
  ]

  return (
    <>
      <Title title='Idioma nativo' description='Es el idioma oficial de tu país de nacimiento' />

      <SelectInput
        label='Idioma nativo'
        name='selectorLan'
        items={data}
        register={register}
        errors={errors}
        icon={<ChatBubbleOutlineIcon />}
        watch={watch}
      />
    </>
  )
}
