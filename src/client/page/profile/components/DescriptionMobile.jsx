import React, { useState } from 'react'
import { styled } from 'styled-components'

const DesciptionStyled = styled.section`

  background-color: white;

  padding: 1rem 0;

  width: 100%;

  div{
    border: 0.25px solid #A2CD37;
    border-radius: 5px;
    padding: 0.5rem;

    h2{
      font-weight: bold;
    }
    
  }

  .btn{
    color: #C32B8F;
    text-decoration: underline;
    cursor: pointer;

    display: inline-block;
  }

`

export const Page = ({ data }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <DesciptionStyled>
      <div>
        <h2>Descripción</h2>
        <p>
          {showMore ? data?.selectedDescription : `${data?.selectedDescription.substring(0, 120)}... `}
          <span className='btn' onClick={() => setShowMore(!showMore)}>{showMore ? 'Ver menos' : 'Ver más'}</span>
        </p>
      </div>
    </DesciptionStyled>
  )
}
