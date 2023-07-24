import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import { SelectInput } from '../../../components/SelectInput'
import { levelOfKnowledge, nativeLanguage } from '../constants/data'
import { Typography } from '@mui/material'
import { SelectLan } from '../../../components/SelectLan'

export const SelectNativeLanguage = ({ componentCount, register, errors, watch }) => {
  const data = watch('selectorLan').value

  return (
    <>
      {
        componentCount && <Typography>Idioma seleccionado</Typography>
      }
      <SelectLan
        label='Idioma'
        name='selectorLanguage'
        items={nativeLanguage?.filter(lan => lan.value !== data)}
        register={register}
        errors={errors}
        icon={<TranslateIcon />}
        watch={watch}
      />

      <SelectInput
        label='Nivel de conocimiento'
        name='selectorKnowledge'
        items={levelOfKnowledge}
        register={register}
        errors={errors}
        icon={<EqualizerIcon />}
        watch={watch}
      />
    </>
  )
}
