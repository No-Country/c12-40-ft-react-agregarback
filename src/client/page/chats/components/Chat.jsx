import React from 'react'

import { styled } from 'styled-components'

const UserChatContainer = styled.div`
  .userChat {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
      background-color: #2f2d52;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: contain;
    }

    .userChatInfo {
      span {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        color: lightgray;
      }
    }
    
  }
`

const Chat = () => {
  return (
    <UserChatContainer>
      <div className='userChat'>
        <img src='' alt='' />
        <div className='userChatInfo'>
          <span>Hola</span>
          <p>Hola mama</p>
        </div>
      </div>
    </UserChatContainer>
  )
}

export default Chat
