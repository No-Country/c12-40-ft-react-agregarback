import React from 'react'
import { Title } from '../../../components/Title'
import { UploadImage } from '../components/UploadImage'

export const Step6 = ({ register, errors, setValue }) => {
  return (
    <>
      <Title
        title='Tu imagen de perfil'
        description='Paso opcional y puedes completarlo más tarde'
      />
      <UploadImage name='selectedImageProfile' register={register} errors={errors} setValue={setValue} />
    </>
  )
}
