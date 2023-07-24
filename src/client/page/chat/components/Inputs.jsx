import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { useAppSelector } from '../../../../common/store/config'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../../service/firebase'

const InputsSect = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid gray;

  input{
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 18px;
    color: #2f2d52;

    &::placeholder{
      color: lightgray;
    }
  }
`

const Send = styled.div`
  height: 100%;
  padding: 1px;
  display: flex;
  text-align: center;
  
  button{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    background-color: #DA7FBB;
    border-radius: 5px;

    &:hover{
      background-color: #CE55A5;
      
    }
  }
`

const Inputs = ({ roomId }) => {
  const uid = useAppSelector(state => state.auth.user.user.uid)
  const uidFriend = useAppSelector(state => state.client.chat.friend.uid)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm({ mode: 'all' })

  const eventSubmit = async (data) => {
    try {
      await updateDoc(doc(db, 'chats', roomId), {
        messages: arrayUnion({
          id: crypto.randomUUID(),
          text: data.message,
          senderId: uid,
          date: Timestamp.now()
        })
      })
      await updateDoc(doc(db, 'userChats', uid), {
        [roomId + '.lastMessage']: {
          text: data.message
        },
        [roomId + '.date']: serverTimestamp()
      })

      await updateDoc(doc(db, 'userChats', uidFriend), {
        [roomId + '.lastMessage']: {
          text: data.message
        },
        [roomId + '.date']: serverTimestamp()
      })

      reset()
    } catch (error) {
      console.error('Error al agregar el mensaje:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(eventSubmit)}>
      <InputsSect>

        <input type='text' name='message' {...register('message', { required: true })} placeholder='Escribe aqui...' />
        <Send>
          <Button disabled={!isValid} type='submit'>Send</Button>
        </Send>
      </InputsSect>
    </form>
  )
}

export default Inputs
