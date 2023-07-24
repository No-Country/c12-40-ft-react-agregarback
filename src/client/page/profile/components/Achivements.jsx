import React from 'react'
import { styled } from 'styled-components'
import AchivementBadge from './AchivementBadge'

import ai from '../img/AI.svg'
import chat from '../img/chat.svg'
import corrections from '../img/corrections.svg'
import friends from '../img/friends.svg'
import posts from '../img/posts.svg'
import rate from '../img/rate.svg'
import recommend from '../img/recommend.svg'
import trad from '../img/trad.svg'
import usage from '../img/usage.svg'

const AchivementsStyled = styled.section`

    background-color: white;

    padding: 1rem 0rem;

    width: 100%;

    .outer-div{
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
      <div className='outer-div'>
        <h2>Logros</h2>
        <div>
          <AchivementBadge />
        </div>
      </div>
    </AchivementsStyled>
  )
}
