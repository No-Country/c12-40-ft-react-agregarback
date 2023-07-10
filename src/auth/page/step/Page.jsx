import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, LinearProgress } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'

import { useForm } from 'react-hook-form'
import { FadeIn } from '../../../common/style/fade/fade-in.style'
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from './models'
import { Link } from 'react-router-dom'

export const Page = () => {
  const components = [Step1, Step2, Step3, Step4, Step5, Step6, Step7]

  const [step, setStep] = useState(0)
  const [showComponent, setShowComponent] = useState(false)

  const {
    register,
    handleSubmit,
    unregister,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm({ mode: 'all' })

  useEffect(() => {
    setShowComponent(true)
  }, [])

  const CurrentStepComponent = components[step]

  const onSubmit = async (data) => {
    if (step < components.length - 1) {
      setShowComponent(false)
      setShowComponent(true)
      setTimeout(() => {
        setStep((prevStep) => prevStep + 1)
      }, 300)
    } else {
      console.log(data)
    }
  }

  const progress = ((step + 1) / (components.length)) * 100

  const handleBackArrow = () => {
    if (step >= 1) {
      setStep(data => data - 1)
    }
  }

  return (
    <Container maxWidth='sm'>
      <Grid container sx={{ py: 2 }}>
        <Grid item xs={6}>
          <Button type='button' onClick={handleBackArrow} sx={{ color: 'black' }}>
            <ArrowBackIcon />
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button sx={{ color: 'black' }} to='/' component={Link}>
            <CloseIcon />
          </Button>
        </Grid>
      </Grid>
      <LinearProgress
        variant='determinate'
        value={progress}
        color='secondary'
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {showComponent && CurrentStepComponent && (
          <FadeIn
            key={step}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <CurrentStepComponent
              register={register}
              unregister={unregister}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </FadeIn>
        )}
        <Button
          sx={{ mt: 4, p: 1.4, textTransform: 'none', fontSize: '19px' }}
          color='secondary'
          size='large'
          fullWidth
          variant='contained'
          type='submit'
          disabled={!isValid}
        >
          {step === components.length - 1
            ? 'Enviar'
            : 'Siguiente'}
        </Button>
      </form>
    </Container>
  )
}
