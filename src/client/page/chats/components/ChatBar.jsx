import React, { useEffect, useState } from 'react'

import { styled } from 'styled-components'
import { ChatInd } from './ChatInd'
import { useAppSelector } from '../../../../common/store/config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../../service/firebase'

const UserChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  height: 70vh;


  overflow-y: auto;
`

const Chat = () => {
  const user = useAppSelector(state => state.auth.user)
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const userUid = user.user.uid

    const user1Query = query(collection(db, 'room'), where('user1', '==', userUid))

    const user2Query = query(collection(db, 'room'), where('user2', '==', userUid))

    Promise.all([getDocs(user1Query), getDocs(user2Query)])
      .then(([user1QuerySnapshot, user2QuerySnapshot]) => {
        const roomsData = []

        user1QuerySnapshot.forEach((doc) => {
          const roomData = doc.data()
          const roomWithId = { id: doc.id, ...roomData }
          roomsData.push(roomWithId)
        })

        user2QuerySnapshot.forEach((doc) => {
          const roomData = doc.data()
          const roomWithId = { id: doc.id, ...roomData }
          roomsData.push(roomWithId)
        })

        const userToChatId = roomsData[0].user1 === userUid ? roomsData[0].user2 : roomsData[0].user1
        const userToChatRef = doc(db, 'users', userToChatId)
        getDoc(userToChatRef)
          .then((userToChatSnapshot) => {
            if (userToChatSnapshot.exists()) {
              const userToChatData = userToChatSnapshot.data()
              console.log(userToChatData)
              setRooms(data => [...data, { ...userToChatData, id: userToChatId, idRoom: roomsData[0].id }])
            } else {
              console.log('El usuario con el que se va a chatear no existe.')
            }
          })
          .catch((error) => {
            console.error('Error al obtener información del usuario con el que se va a chatear:', error)
          })
      })
      .catch((error) => {
        console.error('Error al obtener las habitaciones:', error)
      })
  }, [])

  return (
    <UserChatContainer>

      {
        rooms.map((room) => (
          <ChatInd key={room?.id} id={room?.id} name={room?.name} roomId={room?.idRoom} />
        ))
      }

    </UserChatContainer>
  )
}

export default Chat
