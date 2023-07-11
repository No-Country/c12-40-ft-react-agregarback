import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { SelectInput } from '../../../components/SelectInput'
import { Title } from '../../../components/Title'

export const Step2 = ({ register, errors }) => {
  const data = [
    {
      value: 'english',
      title: 'English',
      id: crypto.randomUUID()
    },
    {
      value: 'espanish',
      title: 'Espanish',
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
      />
    </>
  )
}
