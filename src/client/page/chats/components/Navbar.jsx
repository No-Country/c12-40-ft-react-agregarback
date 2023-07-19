import React from 'react'
import { styled } from 'styled-components'
import { primary120 } from '../../../../common/variables'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  justify-content: space-between;

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      width: 30px;
      height: 30px;
      background-color: ${primary120};
      display: grid;
      place-content: center;
      border-radius: 50%;
      color: white;
    }
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <span>Chats</span>
      <div className='user'>
        <span>+</span>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
