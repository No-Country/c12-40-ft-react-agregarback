import React from 'react'
import { styled } from 'styled-components'
import { primary120 } from '../../../../common/variables'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      width: 25px;
      height: 25px;
      background-color: ${primary120};
      display: grid;
      place-content: center;
      border-radius: 50%;
    }
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <span>Chat</span>
      <div className='user'>
        <span>+</span>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
