import React, { useEffect, useState } from 'react'
import Message from './Message'
import { styled } from 'styled-components'
import { useChatStore } from '../store/useChatStore'
import { db } from '../../../../service/firebase'
import { doc, onSnapshot } from '@firebase/firestore'

const MessagesSect = styled.div`
    background-color: white;
    padding: 10px;
    height: calc(100% - 100px);
    overflow-y: scroll;
`

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useChatStore

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  console.log(messages)

  return (
    <MessagesSect>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </MessagesSect>
  )
}

export default Messages
