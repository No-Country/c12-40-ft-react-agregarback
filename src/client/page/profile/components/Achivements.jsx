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

    margin-bottom: 100px;

    .outer-div{
        border: 0.25px solid #A2CD37;
        border-radius: 5px;
        padding: 0.5rem;
    }

    h2{
        font-weight: bold;
    }

`

const data = [
  {
    img: usage,
    label: '15 días de uso'
  }
]

export const Achivements = () => {
  return (
    <AchivementsStyled data={data}>
      <div className='outer-div'>
        <h2>Logros</h2>
        <div>
          {
            data.map((data, i) => {
              return <AchivementBadge key={i} label={data?.label} img={data?.img} />
            })
          }
        </div>
      </div>
    </AchivementsStyled>
  )
}
