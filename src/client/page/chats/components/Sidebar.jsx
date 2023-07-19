import React from 'react'

import { styled } from 'styled-components'

import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chat'

const Aside = styled.div`
  flex: 1;
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
