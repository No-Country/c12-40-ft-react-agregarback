import React, { useState } from 'react'
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
  const [showMore, setShowMore] = useState(false)

  const text = 'Descricpion muy larga para ver si esto funciona Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <DesciptionStyled>
      <div>
        <h2>Descripción</h2>
        <h6>
          {showMore ? text : `${text.substring(0, 130)}`}
          <button className='btn' onClick={() => setShowMore(!showMore)}>{showMore ? 'Ver menos' : 'Ver más'}</button>
        </h6>
      </div>
    </DesciptionStyled>
  )
}
