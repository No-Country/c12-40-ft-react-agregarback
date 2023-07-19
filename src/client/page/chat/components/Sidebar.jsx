import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import { primary20 } from '../../../../common/variables'

const Aside = styled.div`
  flex: 1;
  background-color: ${primary20};
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
