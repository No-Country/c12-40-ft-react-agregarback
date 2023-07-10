import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import { SelectInput } from '../../../components/SelectInput'
import { levelOfKnowledge, nativeLanguage } from '../constants/data'
import { Typography } from '@mui/material'

export const SelectNativeLanguage = ({ componentCount, register, errors }) => {
  return (
    <>
      {
        componentCount && <Typography>Idioma seleccionado</Typography>
      }
      <SelectInput
        label='Idioma'
        name='selectorLanguage'
        items={nativeLanguage}
        register={register}
        errors={errors}
        icon={<TranslateIcon />}
      />

      <SelectInput
        label='Nivel de conocimiento'
        name='selectorLan'
        items={levelOfKnowledge}
        register={register}
        errors={errors}
        icon={<EqualizerIcon />}
      />
    </>
  )
}
