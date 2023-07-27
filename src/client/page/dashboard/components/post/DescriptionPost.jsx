import { Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const DescriptionPost = ({ description }) => {
  const { t } = useTranslation()

  return (
    <Typography variant='body1'>
      {description} <Button color='secondary'>{t('HomeLog.Post.Modal.ViewMore')}</Button>
    </Typography>
  )
}
