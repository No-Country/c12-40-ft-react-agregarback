import React from 'react'
import { styled } from 'styled-components'

const DesciptionStyled = styled.section`

  background-color: white;

  padding: 0 2rem 1rem 2rem;

  div{
    border: 0.25px solid #A2CD37;
    border-radius: 5px;
    padding: 0.5rem;
  }

`

export const Page = () => {
  return (
    <DesciptionStyled>
      <div>
        <h2>Descripción</h2>
        <p>Aquí va la descripción</p>
      </div>
    </DesciptionStyled>
  )
}
