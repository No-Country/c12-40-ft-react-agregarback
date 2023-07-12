import React from 'react'

import { styled } from 'styled-components'

import { Chip } from '@mui/material'

const ChipStyled = styled(Chip)`

border-radius: 10px !important;
`

export const LangBadge = ({ label, variante }) => {
  return (
    <ChipStyled label={label} className={variante} />
  )
}
