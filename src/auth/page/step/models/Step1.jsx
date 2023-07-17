import React, { useState, useCallback } from 'react'
import PublicIcon from '@mui/icons-material/Public'
import { Title } from '../../../components/Title'
import { AutoCompleteInput } from '../../../components/AutoCompleteInput'
import { fetchCountryName } from '../../../../../api/country-api'

export const Step1 = ({ register, unregister, setValue, errors, watch }) => {
  const [data, setData] = useState([])

  const handleCountry = useCallback(async () => {
    setData(null)
    const country = await fetchCountryName()
    setData(country)
  }, [])

  return (
    <>
      <Title title='¿De dónde eres?' description='País de origen' />

      <AutoCompleteInput
        label='País'
        name='selectorCountry'
        items={data}
        register={register}
        errors={errors}
        onEvent={handleCountry}
        icon={<PublicIcon />}
        watch={watch}
        setValue={setValue}
      />
    </>
  )
}
