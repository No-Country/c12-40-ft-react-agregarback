import React from 'react'
import { styled } from 'styled-components'

const UserChatSect = styled.div`
  
`

const UserChat = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover{
    background-color: #2f2d52;
  }

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
  }
`

const UserChatInfo = styled.div`
  span{
    font-size: 18px;
    font-weight: 500;
  }
  p{
    font-size: 14px;
    color: lightgray;
  }
  
`

const Chats = () => {
  return (
    <UserChatSect>
      <UserChat>
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png" alt="" placeholder='Busca un usuario' />
        <UserChatInfo>
          <span>Mai</span>
          <p>Hola!</p>
        </UserChatInfo>
      </UserChat>
      <UserChat>
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png" alt="" placeholder='Busca un usuario' />
        <UserChatInfo>
          <span>Mai</span>
          <p>Hola!</p>
        </UserChatInfo>
      </UserChat><UserChat>
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png" alt="" placeholder='Busca un usuario' />
        <UserChatInfo>
          <span>Mai</span>
          <p>Hola!</p>
        </UserChatInfo>
      </UserChat><UserChat>
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png" alt="" placeholder='Busca un usuario' />
        <UserChatInfo>
          <span>Mai</span>
          <p>Hola!</p>
        </UserChatInfo>
      </UserChat>
    </UserChatSect>
  )
}

export default Chats