import React from 'react'

import Sidebar from './components/Sidebar'

import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'
import { Outlet } from 'react-router-dom'

export const Page = () => {
  return (
    <ContainerGeneral>
      <Sidebar />
      <Outlet />
    </ContainerGeneral>
  )
}
