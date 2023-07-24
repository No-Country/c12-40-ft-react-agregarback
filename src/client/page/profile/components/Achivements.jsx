import React from 'react'
import { styled } from 'styled-components'

const AchivementsStyled = styled.section`

    background-color: white;

    padding: 1rem 0rem;

    width: 100%;

    div{
        border: 0.25px solid #A2CD37;
        border-radius: 5px;
        padding: 0.5rem;
    }

    h2{
        font-weight: bold;
    }

`

export const Achivements = () => {
  return (
    <AchivementsStyled>
      <div>
        <h2>Achivements</h2>
      </div>
    </AchivementsStyled>
  )
}
