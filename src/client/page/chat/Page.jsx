// Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React from 'react'
import Sidebar from './components/Sidebar'
import { styled } from 'styled-components'

export const Page = () => {
  return (
    <div>
      <h1>Chat</h1>
      <Sidebar />
    </div>
  )
}

// styles components abajo

styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  height: 100%;
  overflow: hidden;
  width: 100%;
`
