import React from 'react'
import { Title } from '../../../components/Title'
import { SelectedInterest } from '../../../components/SelectedInterest'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

export const Step7 = ({ register, errors }) => {
  return (
    <>
      <Title
        title='Tus intereses'
        description='Paso opcional y puedes completarlo más tarde'
      />
      <SelectedInterest
        register={register}
        label='Interés'
        errors={errors}
        icon={<ControlPointIcon />}
        placeholder='Ej: cantar'
        name='selectedInterest'
      />
    </>
  )
}
