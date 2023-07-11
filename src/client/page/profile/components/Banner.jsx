import React from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit'
import { Divider } from '@mui/material'

import { LangBadge } from './LangBadge'

const BannerStyled = styled.header`

  background: linear-gradient(180deg, #FFC0CB 40%, #ffffff 20%);

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  gap: 1rem;

  color: black;

  .person{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    width: 80%;
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
    align-items: flex-start;
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

    background: linear-gradient(180deg, #FFC0CB 50%, #ffffff 20%);

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
  return (
    <BannerStyled>

      <div className='person'>

        <div className='person-img'>
          <img src={data?.img} alt={data?.name} />
        </div>
        <div className='person-info'>
          {data?.name}
          <div className='languages'>
            <LangBadge label={data?.native} />
            <Divider orientation='vertical' variant='middle' className='vertical' />
            {
              data?.learning
                ? data?.learning.map((lang, index) => {
                  return <LangBadge key={index} label={data && lang} />
                })
                : '...'
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
