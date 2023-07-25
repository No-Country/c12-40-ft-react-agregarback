import React from 'react'
import { styled } from 'styled-components'

const AchivementBadgeStyled = styled.div`

  .badge-div{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #79747E ;
      background-color: #F5F5F5 ;
      width: 100%;
      height: 100%;
      
      padding: 0.5rem 1rem;
      gap: 0.5rem ;
      
      border-radius: 6.25rem ;

      img{
        width: 1.125rem;
      }
    
      span{
        font-size: 1rem ;
      }
  }

  .earned{
    background-color: #F5F8EC;
    color: #517C1A;
    font-weight: bold;
  }

`

export default function AchivementBadge ({ img, label }) {
  return (
    <AchivementBadgeStyled>
      <div className='badge-div earned'>
        <img src={img} alt='icon' />
        <span>{label}</span>
      </div>
    </AchivementBadgeStyled>
  )
}
