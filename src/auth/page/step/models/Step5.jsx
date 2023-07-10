import React from 'react'
import { Title } from '../../../components/Title'
import { TextField } from '@mui/material'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import { sex } from '../constants/data'
import { SelectInput } from '../../../components/SelectInput'

export const Step5 = ({ register, errors }) => {
  return (
    <>
      <Title title='¿Cómo te describes?' description='Cuéntale al mundo tu historia' />
      <TextField
        label='Presentate'
        placeholder='Un ejemplo: ¡Hola! Soy Lucía, hablo español y quiero mejorar mi inglés. Conversemos así nos ayudamos a practicar con vocabulario real.'
        rows={4}
        multiline
      />
      <Title title='¿Qué pronombre prefieres?' description='*Opcional' />
      <SelectInput
        label='Pronombre'
        name='selectorSex'
        items={sex}
        register={register}
        errors={errors}
        icon={<SentimentSatisfiedIcon />}
      />
    </>
  )
}
