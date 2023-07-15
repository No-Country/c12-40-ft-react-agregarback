import React from 'react'
import { Title } from '../../../components/Title'
import { SelectedInterest } from '../../../components/SelectedInterest'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

export const Step7 = ({ register, errors, watch, setValue }) => {
  const levelOfKnowledge = [
    {
      value: 'cantar',
      title: 'Cantar',
      id: crypto.randomUUID()
    },
    {
      value: 'bailar',
      title: 'Bailar',
      id: crypto.randomUUID()
    },
    {
      value: 'aprender',
      title: 'Aprender',
      id: crypto.randomUUID()
    },
    {
      value: 'reir',
      title: 'Reír',
      id: crypto.randomUUID()
    },
    {
      value: 'compartir',
      title: 'Compartir',
      id: crypto.randomUUID()
    }
  ]
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
        name='selectedInterest'
        watch={watch}
        setValue={setValue}
        items={levelOfKnowledge}
      />
    </>
  )
}
