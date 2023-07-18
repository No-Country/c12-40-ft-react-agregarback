import React from 'react'
import { styled } from 'styled-components'

const DesciptionStyled = styled.section`

    background-color: white;

    padding: 0 2rem 1rem 2rem;

    width: 100%;

    div{
        border: 0.25px solid #A2CD37;
        border-radius: 5px;
        padding: 0.5rem;

    h2{
        font-weight: bold;
    }
    
    }

`

export const Page = ({ data }) => {
  return (
    <DesciptionStyled>
      <div>
        <h2>Descripción</h2>
        <p>
          {data?.description}
        </p>
      </div>
    </DesciptionStyled>
  )
}
