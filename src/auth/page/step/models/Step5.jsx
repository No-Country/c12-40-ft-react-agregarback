import React from 'react'
import { Title } from '../../../components/Title'
import { TextField } from '@mui/material'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import { sex } from '../constants/data'
import { SelectInput } from '../../../components/SelectInput'

export const Step5 = ({ register, errors, watch }) => {
  return (
    <>
      <Title title='¿Cómo te describes?' description='Cuéntale al mundo tu historia' />
      <TextField
        label='Presentate'
        placeholder='Un ejemplo: ¡Hola! Soy Lucía, hablo español y quiero mejorar mi inglés. Conversemos así nos ayudamos a practicar con vocabulario real.'
        rows={4}
        multiline
        value={watch('selectedDescription')}
        {...register('selectedDescription', { required: true })}
        helperText={!!errors.selectedDescription && 'Completa este campo'}
        error={!!errors.selectedDescription}
      />
      <Title title='¿Qué pronombre prefieres?' description='*Opcional' />
      <SelectInput
        label='Pronombre'
        name='selectorSex'
        items={sex}
        register={register}
        errors={errors}
        icon={<SentimentSatisfiedIcon />}
        watch={watch}
      />
    </>
  )
}
