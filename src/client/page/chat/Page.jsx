// Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React from 'react'
import Sidebar from './components/Sidebar'
import { styled } from 'styled-components'
import Messages from './components/Messages'
import Inputs from './components/Inputs'
import { useChatStore } from './store/useChatStore'

const Main = styled.div`
  background-color: #F6E7F1;
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
  background-color: lightblue;
  color: black;
`

const ChatInfo = styled.div`
  height: 50px;
  background-color: #FAFBFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  span {
    color: black;
  }
`

const ChatIcons = styled.div`
  
`

export const Page = () => {
  const { data } = useChatStore()
  return (
    <Main>
      <Container>
        <Sidebar />
        <ChatSect>
          <ChatInfo>
            <span>{data.users?.name}</span>
            <ChatIcons>
              <img src='' alt='' />
              <img src='' alt='' />
              <img src='' alt='' />
            </ChatIcons>
          </ChatInfo>
          <Messages />
          <Inputs />
        </ChatSect>
      </Container>
    </Main>
  )
}
