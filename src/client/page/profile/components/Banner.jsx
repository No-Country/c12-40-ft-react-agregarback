import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

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
    gap: 16px;

    margin-top: 2rem;
  }

  .person-img{
    background-color: green;
    min-width: 125px;
    max-width: 325px;
    
    aspect-ratio: 1/1;

    border-radius: 12px;
    
  }

  .person-info{
    display: flex;
    flex-direction: column;
  }

  .languages{
    display: flex;

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

  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .person{
      flex-direction: row;
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1024px){
    .edit-icon{
      width: 36px;
      height: 36px;

      border-radius: 12px;
    }
  }
`

const Banner = () => {
  return (
    <BannerStyled>

      <div className='person'>
        <Box className='person-img' />

        <div className='person-info'>
          Luciana Guillermina
          <div className='languages'>
            <LangBadge label='Español' />
            <LangBadge label='Inglés' />
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
