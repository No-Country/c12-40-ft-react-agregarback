import React from 'react'
import { Title } from './Title'
import { SelectInput } from './SelectInput'

import TranslateIcon from '@mui/icons-material/Translate'
import EqualizerIcon from '@mui/icons-material/Equalizer'

export const Step3 = ({ register, errors }) => {
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

  const data2 = [
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
        label='Idioma'
        name='selectorLanguage'
        items={data}
        register={register}
        errors={errors}
        icon={<TranslateIcon />}
      />

      <SelectInput
        label='Nivel de conocimiento'
        name='selectorLan'
        items={data2}
        register={register}
        errors={errors}
        icon={<EqualizerIcon />}
      />
    </div>
  )
}
