import React from 'react'

import Sidebar from './components/Sidebar'

import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { neutral } from '../../../common/variables'

const ChatsContainer = styled.div`
  display: flex;
  background-color: ${neutral};
  border-radius: 8px;
`

export const Page = () => {
  return (
    <ContainerGeneral>
      <ChatsContainer>
        <Sidebar />
        <Outlet />
      </ChatsContainer>
    </ContainerGeneral>
  )
}
