import React from 'react'
import { styled } from 'styled-components'

const MessageSect = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;


  &.owner{
    flex-direction: row-reverse;

    p{
      border: 1px solid #707C9740;
      background-color: none;
      border-radius: 7px 7px 0 7px;
    }
  }

`

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;

  img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
`

const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p{
    background-color: #C32B8F2B;
    padding: 10px 20px;
    border-radius: 0 7px 7px 7px;
    max-width: max-content;
  }
`

const Message = (prop) => {
  return (
    <MessageSect className={prop.classname}>
      <MessageInfo>
        <img src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png' alt='' />
        <span>just now</span>
      </MessageInfo>
      <MessageContent>
        <p>hello</p>
        {/* <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png" alt="" /> */}
      </MessageContent>
    </MessageSect>
  )
}

export default Message
