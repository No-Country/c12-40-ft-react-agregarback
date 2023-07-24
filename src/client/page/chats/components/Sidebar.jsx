import { styled } from 'styled-components'

import Navbar from './Navbar'
import Search from './Search'
import ChatBar from './ChatBar'

const SidebarContainer = styled.div`
  width: 350px;
  padding: 1rem;
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
