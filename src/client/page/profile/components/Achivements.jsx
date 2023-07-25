import React from 'react'
import { styled } from 'styled-components'
import AchivementBadge from './AchivementBadge'

/* import ai from '../img/AI.svg' */
import chat from '../img/chat.svg'
import corrections from '../img/corrections.svg'
import friends from '../img/friends.svg'
import posts from '../img/posts.svg'
/* import rate from '../img/rate.svg'
import recommend from '../img/recommend.svg' */
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
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .achivements-list{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 1rem;
    }

    h2{
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

`

export const Achivements = ({ info }) => {
  console.log(info)
  const data = [
    {
      img: usage,
      label: 'días de uso',
      num: info?.days
    },
    {
      img: corrections,
      label: 'correcciones',
      num: info?.corrections
    },
    {
      img: friends,
      label: 'amigos',
      num: info?.friends
    },
    /* {
      img: ai,
      label: 'Usó Howdy AI',
      num: ''
    }, */
    {
      img: posts,
      label: 'Publicaciones',
      num: info?.posts
    },
    /* {
      img: rate,
      label: 'Calificó amigos',
      num: ''
    }, */
    /* {
      img: recommend,
      label: 'Recomendó Howdy',
      num: ''
    }, */
    {
      img: trad,
      label: 'traducciones',
      num: info?.translates
    },
    {
      img: chat,
      label: 'conversaciones',
      num: info?.chats_num
    }
  ]
  return (
    <AchivementsStyled data={data}>
      <div className='outer-div'>
        <h2>Logros</h2>
        <div className='achivements-list'>
          {
            data.map((datos, i) => {
              return <AchivementBadge key={i} label={datos?.label} img={datos?.img} info={info} num={datos?.num} />
            })
          }
        </div>
      </div>
    </AchivementsStyled>
  )
}
