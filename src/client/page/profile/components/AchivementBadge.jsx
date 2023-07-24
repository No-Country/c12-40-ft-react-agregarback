import React from 'react'
import { styled } from 'styled-components'

const AchivementBadgeStyled = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #79747E ;
  background-color: #F5F5F5 ;

  padding: 0.5rem 1rem;
  gap: 0.5rem ;

  border-radius: 6.25rem ;

  img{
    width: 1.125rem;
  }

  span{
    font-size: 1rem ;
  }
`

export default function AchivementBadge ({ img, label }) {
  return (
    <AchivementBadgeStyled>
      <img src={img} alt='icon' />
      <span>{label}</span>
    </AchivementBadgeStyled>
  )
}
