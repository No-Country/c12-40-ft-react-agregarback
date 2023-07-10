import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.header`

  background-color: red;

  width: 100%;

  display: flex;
  justify-content: space-between;

  .person{
    display: flex;
  }

  .person-info{
    display: flex;
    flex-direction: column;
  }

  .languages{
    display: flex;
  }
`

const Banner = () => {
  return (
    <BannerStyled>

      <div className='person'>
        <img src='#' alt='Profile' />

        <div className='person-info'>
          Luciana Guillermina
          <div className='languages'>
            idioma | idioma 1 idioma 2
          </div>
        </div>
      </div>

      <div>
        <img src='#' alt='editar' />
      </div>
    </BannerStyled>
  )
}

export default Banner
