import React from 'react'

import { styled } from 'styled-components'

import Navbar from './Navbar'
import Search from './Search'
import ChatBar from './ChatBar'

const SidebarContainer = styled.div`
  flex: 1;
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar />
      <Search />
      <ChatBar />
    </SidebarContainer>
  )
}

export default Sidebar
