import React from 'react'
import { styled } from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #9C2272;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
`

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #BF4F74;
    color: white;
  }
`

const UserImg = styled.img`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <span>Howdy chat</span>
      <User>
        <UserImg src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png' alt='' />
        <span>Cristian</span>
        <Button>Logout</Button>
      </User>
    </NavbarContainer>
  )
}

export default Navbar
