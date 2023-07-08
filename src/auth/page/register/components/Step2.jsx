import React from 'react'
import { SelectInput } from './SelectInput'
import { Title } from './Title'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

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
    <div>
      <Title title='Idioma nativo' description='Es el idioma oficial de tu país de nacimiento' />

      <SelectInput
        label='Idioma nativo'
        name='selectorLan'
        items={data}
        register={register}
        errors={errors}
        icon={<ChatBubbleOutlineIcon />}
      />
    </div>
  )
}
