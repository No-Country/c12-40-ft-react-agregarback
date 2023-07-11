import React, { useState } from 'react'
import { Button } from '@mui/material'

import { Title } from '../../../components/Title'
import { SelectNativeLanguage } from '../components/SelectNativeLanguage'

export const Step3 = ({ register, errors }) => {
  const [componentCount, setComponentCount] = useState(1)

  const handleClick = () => {
    if (componentCount <= 2) {
      setComponentCount(prevCount => prevCount + 1)
    }
  }

  return (
    <>
      <Title
        title='Idioma nativo'
        description='Es el idioma oficial de tu país de nacimiento'
      />

      {Array.from({ length: componentCount }).map((_, index) => (
        <SelectNativeLanguage componentCount={componentCount >= 1} key={index} register={register} errors={errors} />
      ))}

      <Button
        sx={{ textTransform: 'none', justifyContent: 'start' }}
        color='secondary'
        size='small'
        variant='text'
        onClick={handleClick}
      >
        Agregar otro
      </Button>
    </>
  )
}
