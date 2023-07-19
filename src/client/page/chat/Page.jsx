// Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React from 'react'
import { styled } from 'styled-components'
import Sidebar from './components/Sidebar'
import Messages from './components/Messages'
import Inputs from './components/Inputs'
import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'

export const Page = () => {
  return (
    <ContainerGeneral>
      <Sidebar />
    </ContainerGeneral>
  )
}
