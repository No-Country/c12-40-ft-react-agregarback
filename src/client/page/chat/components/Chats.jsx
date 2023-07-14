import React, { useState } from 'react'
// import { db } from '../../../../service/firebase'
// import { doc, onSnapshot } from 'firebase/firestore'
import { styled } from 'styled-components'
// import { AuthContext } from '../context/AuthContext'
// import { ChatContext } from '../context/ChatContext'

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
  const [chats] = useState([])

  // const { currentUser } = useContext(AuthContext)
  // const { dispatch } = useContext(ChatContext)

  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
  //       console.log(doc)
  //       setChats(doc.data())
  //     })
  //     return () => {
  //       unsub()
  //     }
  //   }
  //   currentUser.uid && getChats()
  //   console.log(Object.entries(chats))
  // }, [currentUser.uid])

  // const handleSelect = (u) => {
  //   dispatch({ type: 'CHANGE_USER', payload: u })
  // }

  return (
    <UserChatSect>
      {Object.entries(chats)?.map((chat) => (
        <UserChat
          key={chats[0]}
          // onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt='' />
          <UserChatInfo>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </UserChatInfo>
        </UserChat>
      ))}
    </UserChatSect>
  )
}

export default Chats
