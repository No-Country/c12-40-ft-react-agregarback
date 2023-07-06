import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Aside = styled.div`
  flex: 1;
  background-color: #C32B8F;
`

const Sidebar = () => {
  return (
    <Aside>
      <Navbar />
      <Search />
      <Chats />
    </Aside>
  )
}

export default Sidebar