import { styled } from 'styled-components'
import { ChatInd } from './ChatInd'
import { useState, useEffect } from 'react'

import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../service/firebase'
import { useAppSelector } from '../../../../common/store/config'

const UserChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  height: 70vh;

  overflow-y: auto;
`

const Chat = () => {
  const [chats, setChats] = useState([])
  const user = useAppSelector((state) => state.auth.user.user)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    user.uid && getChats()
  }, [user.uid])

  return (
    <UserChatContainer>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <ChatInd
            key={chat[0]}
            data={chat}
          />
        ))}
    </UserChatContainer>
  )
}

export default Chat
