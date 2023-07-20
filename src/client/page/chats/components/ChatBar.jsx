import React from 'react'

import { styled } from 'styled-components'
import { ChatInd } from './ChatInd'

const UserChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  height: 70vh;


  overflow-y: auto;
`

const Chat = () => {
  return (
    <UserChatContainer>
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
      <ChatInd />
    </UserChatContainer>
  )
}

export default Chat
