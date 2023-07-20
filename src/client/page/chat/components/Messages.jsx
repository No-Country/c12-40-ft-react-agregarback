import React, { useEffect, useState } from 'react'
import Message from './Message'
import { styled } from 'styled-components'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../../service/firebase'
import { useAppSelector } from '../../../../common/store/config'

const MessagesContainer = styled.div`
  background-color: white;
  padding: 10px;
  height: 70vh;
  overflow-y: auto;
`

const Messages = ({ roomId }) => {
  const user = useAppSelector((state) => state.auth.user.user)
  const [messages, setMessages] = useState()

  useEffect(() => {
    const q = query(collection(db, 'messages'), where('idRoom', '==', roomId))
    onSnapshot(q, (querySnapshot) => {
      const msg = []
      querySnapshot.forEach((doc) => {
        msg.push({ id: doc.id, ...doc.data() })
      })
      setMessages(msg)
    })
  }, [roomId])

  return (
    <MessagesContainer>
      {messages?.map((message) => (
        <Message
          key={message?.id}
          message={message?.message}
          classname={message?.idUser === user.uid ? 'owner' : ''}
          photo={message?.idUser === user.uid ? user.photo : null}
        />
      ))}
    </MessagesContainer>
  )
}

export default Messages
