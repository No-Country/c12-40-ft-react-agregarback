import React, { useState, useEffect } from 'react'
import { db } from '../../../../../service/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where
} from 'firebase/firestore'
import { Button } from '@mui/material'

export const ButtonAddFriend = ({ idUser, currentUserUid }) => {
  const [isRequestPending, setIsRequestPending] = useState({ value: null, title: null })
  const combineID = currentUserUid > idUser ? currentUserUid + idUser : idUser + currentUserUid

  useEffect(() => {
    const checkFriendRequest = async () => {
      const docRef = doc(db, 'friendRequests', combineID)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const q = query(
          collection(db, 'friendRequests'),
          where('status', '==', 'accepted')
        )

        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          setIsRequestPending({ value: 'friend', title: 'Amigo' })
        } else {
          setIsRequestPending({ value: 'pending', title: 'Solicitud enviada' })
        }
      } else {
        setIsRequestPending({ value: 'not_friend', title: 'Agregar amigo' })
      }
    }
    checkFriendRequest()
  }, [idUser, currentUserUid, db])

  const handleAddFriend = async (friendId) => {
    try {
      const friendRequestsRef = doc(
        db,
        'friendRequests',
        combineID
      )
      await setDoc(friendRequestsRef, {
        sender: currentUserUid,
        receiver: friendId,
        status: 'pending',
        createdAt: serverTimestamp()
      })
      setIsRequestPending({ value: 'pending', title: 'Solicitud enviada' })
    } catch (error) {
      console.error('Error al enviar la solicitud de amistad:', error)
    }
  }

  const handleConfirmRequestFriend = async (friendId) => {
    try {
      const friendRequestsRef = doc(
        db,
        'friendRequests',
        combineID
      )
      await setDoc(friendRequestsRef, { status: 'accepted', acceptedBy: currentUserUid }, { merge: true })

      const friendsRef = collection(db, 'friends')
      await setDoc(friendsRef, {
        [currentUserUid]: true,
        [friendId]: true
      })

      setIsRequestPending('friend')
    } catch (error) {
      console.error('Error al aceptar la solicitud de amistad:', error)
    }
  }

  return (
    <>
      <Button
        disabled={isRequestPending?.value === 'friend' || isRequestPending?.value === 'pending'}
        onClick={() => handleAddFriend(idUser)}
      >
        {isRequestPending?.title}
      </Button>

    </>
  )
}
