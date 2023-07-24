import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { Title } from '../../../components/Title'
import { SelectLan } from '../../../components/SelectLan'
import { nativeLanguage } from '../constants/data'

export const Step2 = ({ register, errors, watch }) => {
  return (
    <>
      <Title title='Idioma nativo' description='Es el idioma oficial de tu país de nacimiento' />

      <SelectLan
        label='Idioma nativo'
        name='selectorLan'
        items={nativeLanguage}
        register={register}
        errors={errors}
        icon={<ChatBubbleOutlineIcon />}
        watch={watch}
      />
    </>
  )
}
