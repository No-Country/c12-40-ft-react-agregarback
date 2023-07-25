import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Avatar, Box, Button, Modal, Typography } from '@mui/material'
import {
  and,
  collection,
  doc,
  getDoc,
  getDocs,
  or,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from '../../../../service/firebase'
import {
  useAppSelector
} from '../../../../common/store/config'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const Navbar = () => {
  const [modal, setModal] = useState(false)
  const [friends, setFriends] = useState([])

  const user = useAppSelector((state) => state.auth.user.user)

  const handleClick = async () => {
    try {
      const q = query(
        collection(db, 'friendRequests'),
        and(
          where('status', '==', 'accepted'),
          where('chat', '==', false),
          or(where('sender', '==', user.uid), where('receiver', '==', user.uid))
        )
      )
      const querySnapshot = await getDocs(q)

      const tempFriends = {}

      for (const userUid of querySnapshot.docs) {
        const senderUid = userUid.data().sender
        const receiverUid = userUid.data().receiver
        const friendUid = senderUid !== user.uid ? senderUid : receiverUid

        const docRef = doc(db, 'users', friendUid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          tempFriends[docSnap.id] = { ...docSnap.data(), id: docSnap.id }
        } else {
          console.log('No such document for user:', friendUid)
        }
      }

      setFriends(Object.values(tempFriends))
    } catch (error) {
      console.error('Error al consultar las solicitudes de amistad:', error)
      return []
    } finally {
      setModal(true)
    }
  }

  const handleChat = async (userFriend, userOwner) => {
    const combineID = userOwner.uid > userFriend.id ? userOwner.uid + userFriend.id : userFriend.id + userOwner.uid
    try {
      const res = await getDoc(doc(db, 'chats', combineID))
      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combineID), { messages: [] })
        await updateDoc(doc(db, 'userChats', userOwner.uid), {
          [combineID + '.userInfo']: {
            uid: userFriend.id,
            displayName: userFriend.name,
            photoURL: userFriend.photo
          },
          [combineID + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, 'userChats', userFriend.id), {
          [combineID + '.userInfo']: {
            uid: userOwner.uid,
            displayName: userOwner.name,
            photoURL: userOwner.photo
          },
          [combineID + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, 'friendRequests', combineID), {
          chat: true
        })
      }
      setModal(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NavbarContainer>
      <span>Chats</span>
      <div className='user'>
        <Button variant='contained' onClick={handleClick}>
          +
        </Button>
      </div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h4' mb={2}>Amigos</Typography>
          {friends?.length === 0 && <Typography>No tienes chats pendientes</Typography>}
          {friends?.map((f) => (
            <Box
              key={f.email}
              sx={{
                px: 2,
                py: 1,
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1,
                alignItems: 'center',
                backgroundColor: '#8b96942f',
                borderRadius: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={f.photo} alt={f.name} />
                <Typography p={2}>{f.name}</Typography>
              </Box>
              <Button onClick={() => handleChat(f, user)} color='secondary'>Chatear</Button>
            </Box>
          ))}
        </Box>
      </Modal>
    </NavbarContainer>
  )
}

export default Navbar
