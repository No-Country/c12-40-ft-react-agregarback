import React from 'react'
import { styled } from 'styled-components'

const AchivementBadgeStyled = styled.div`

  .border{

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    width: fit-content; 
    height: 3rem; 
    overflow: hidden;
    border-radius: 6.25rem ;
  }

  .border::before{
    content: "";
    position: absolute;
    top: -5px; /* Ajusta el valor negativo para que el degradado se muestre en el borde */
    left: -5px; /* Ajusta el valor negativo para que el degradado se muestre en el borde */
    right: -5px; /* Ajusta el valor negativo para que el degradado se muestre en el borde */
    bottom: -5px; /* Ajusta el valor negativo para que el degradado se muestre en el borde */
    z-index: 1;
    background-image: linear-gradient(to bottom right, #79747E, #79747E);
  }
  
  .badge-div{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F5F5F5 ;
      
      margin: 0.15rem;
      padding: 0 1rem ;
      gap: 0.5rem ;

      position: relative;
      z-index: 2;
      width: 100%;
      height: 92%;
      border-radius: inherit;
        

      img{
        width: 1.125rem;
      }
    
      span{
        font-size: 1rem ;
      }
  }


  .earned{
    color: #517C1A;
    font-weight: bold;
    }

  .earned:before{
    background-color: #C1358A;
    background-image: linear-gradient(to bottom right, #C1358A, #A2CD37);
    }

`

export default function AchivementBadge ({ img, label, num }) {
  return (
    <AchivementBadgeStyled>
      <div className='border'>
        <div className='badge-div'>
          <img src={img} alt='icon' />
          <span>{num + ' ' + label}</span>
        </div>
      </div>
    </AchivementBadgeStyled>
  )
}
