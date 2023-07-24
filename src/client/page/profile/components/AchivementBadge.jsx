import React from 'react'
import { Chip } from '@mui/material'
import { styled } from 'styled-components'

const AchivementBadgeStyled = styled(Chip)`

`

export default function AchivementBadge () {
  return (
    <AchivementBadgeStyled label='15 días de uso' />
  )
}
