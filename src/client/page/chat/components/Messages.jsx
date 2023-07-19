import React from 'react'
import Message from './Message'
import { styled } from 'styled-components'

const MessagesContainer = styled.div`
    background-color: white;
    padding: 10px;
    height: 70vh;
    overflow-y: auto;
`

const Messages = () => {
  return (
    <MessagesContainer>
      <Message classname='owner' />
      <Message />
      <Message />
      <Message />
      <Message classname='owner' />
      <Message classname='owner' />
      <Message />
      <Message />
      <Message classname='owner' />
      <Message classname='owner' />
      <Message />
      <Message classname='owner' />
    </MessagesContainer>
  )
}

export default Messages
