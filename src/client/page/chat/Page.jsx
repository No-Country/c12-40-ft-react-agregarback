// Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React from 'react'
import Sidebar from './components/Sidebar'
import { styled } from 'styled-components'

const Main = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 65%;
  height: 80%;
  display: flex;
  overflow: hidden;
`

const ChatSect = styled.section`
  flex: 2;
  color: red;
  background-color: lightblue;
`

export const Page = () => {
  return (
    <Main>
      <Container>
        <Sidebar />
        <ChatSect>Chat section</ChatSect>
      </Container>
    </Main>
  )
}
