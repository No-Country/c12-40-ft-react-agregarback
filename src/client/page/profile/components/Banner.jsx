import React from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit'
import { Divider } from '@mui/material'

import { LangBadge } from './LangBadge'

const BannerStyled = styled.header`

  background: linear-gradient(180deg, #FFC0CB 50%, #ffffff 50%);

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 3rem;

  gap: 1rem;

  color: black;

  .person{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    width: 80%;

    margin-top: 2rem;
  }

  .person-img{
    max-width: 125px;
    
    aspect-ratio: 1/1;
    border-radius: 12px;

    
    img{
      border-radius: 12px;
      width: 100%;
      aspect-ratio: 1/1;
    }
    
  }

  .person-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .languages{
    display: flex;
    align-items: center;

    gap: 16px;
  }

  .edit-icon{
    padding: 0.5rem;

    border-radius: 10px;
    background-color: #F5F8EC;

    color: #9C2272;

    width: 32px;
    height: 32px;

    box-shadow: 0px 1px 3px 0px #C32B8F;
    -webkit-box-shadow: 0px 1px 3px 0px #C32B8F;
    -moz-box-shadow: 0px 1px 3px 0px #C32B8F;
  }

  .vertical{
    height: 2.5rem;
  }

  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .person{
      flex-direction: row;
      align-items: flex-end;

      gap: 2rem;
    }

    .person-info{
      align-items: flex-start;
    }

    .person-img{
      max-width: 200px;
    }
  }

  @media screen and (min-width: 1024px){
    .edit-icon{
      width: 36px;
      height: 36px;

      border-radius: 12px;
    }

    .person{
      gap: 4rem;
    }

    .person-img{
      max-width: 325px;
    }
  }
`

const Banner = ({ data }) => {
  const { name, img, native, learning } = data
  return (
    <BannerStyled>

      <div className='person'>

        <div className='person-img'>
          <img src={img} alt={name} />
        </div>
        <div className='person-info'>
          {name}
          <div className='languages'>
            <LangBadge label={native} />
            <Divider orientation='vertical' variant='middle' className='vertical' />
            {
              learning.map((lang, index) => {
                return <LangBadge key={index} label={lang} />
              })
            }
          </div>
        </div>
      </div>

      <div>
        <EditIcon className='edit-icon' />
      </div>
    </BannerStyled>
  )
}

export default Banner
