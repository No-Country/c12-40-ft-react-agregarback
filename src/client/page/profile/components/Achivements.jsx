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
import { useTranslation } from 'react-i18next'

const AchivementsStyled = styled.section`

    background-color: white;

    padding: 1rem;

    width: 100%;

    scroll-margin-bottom: 100px;

    
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
      justify-content: center;
      align-items: center;

      gap: 1rem;
    }

    h2{
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 768px){
      padding: 1rem 0;

      .achivements-list{
        flex-direction: column;
      }
    }

`

export const Achivements = ({ info }) => {
  const { t } = useTranslation()

  const data = [
    {
      img: usage,
      label: 'Profile.Archivements.Archivement1',
      num: info?.days
    },
    {
      img: corrections,
      label: 'Profile.Archivements.Archivement2',
      num: info?.corrections
    },
    {
      img: friends,
      label: 'Profile.Archivements.Archivement3',
      num: info?.friends
    },
    /* {
      img: ai,
      label: 'Usó Howdy AI',
      num: ''
    }, */
    {
      img: posts,
      label: 'Profile.Archivements.Archivement4',
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
      label: 'Profile.Archivements.Archivement5',
      num: info?.translates
    },
    {
      img: chat,
      label: 'Profile.Archivements.Archivement6',
      num: info?.chats_num
    }
  ]
  return (
    <AchivementsStyled data={data}>
      <div className='outer-div'>
        <h2>{t('Profile.Archivements.Title')}</h2>
        <div className='achivements-list'>
          {
            data.map((datos, i) => {
              return <AchivementBadge key={i} label={t(datos?.label)} img={datos?.img} info={info} num={datos?.num} />
            })
          }
        </div>
      </div>
    </AchivementsStyled>
  )
}
