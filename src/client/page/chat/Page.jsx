// Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React from 'react'
import Sidebar from './components/Sidebar'
import { styled } from 'styled-components'

const Title = styled.h1`
  color: red;
`

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
`

export const Page = () => {
  return (
    <Main>
      <Container>
        <Title>Chat</Title>
        <Sidebar />
      </Container>
    </Main>
  )
}

// styles components abajo

