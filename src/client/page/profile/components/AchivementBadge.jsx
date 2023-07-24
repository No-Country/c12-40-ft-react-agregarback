import React from 'react'
import { Chip, Avatar } from '@mui/material'
import { styled } from 'styled-components'

const AchivementBadgeStyled = styled(Chip)`
  border: 1px solid #79747E !important;
  background-color: #F5F5F5 !important;

  padding: 1.2rem 0.5rem !important;
  gap: 0.5rem !important;

  border-radius: 6.25rem !important;

  .avatar{
    
      width: fit-content !important;
      height: fit-content !important;
      border-radius: 0;
  }

  span{
    font-size: 1rem !important;
  }
`

export default function AchivementBadge ({ img, label }) {
  return (
    <AchivementBadgeStyled label={label} avatar={<Avatar src={img} className='avatar' />} />
  )
}
