import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { useAppSelector } from '../../../../common/store/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm({ mode: 'all' })

  const eventSubmit = async (data) => {
    try {
      const messageData = {
        ...data,
        idRoom: roomId,
        idUser: uid,
        timestamp: serverTimestamp()
      }

      await addDoc(collection(db, 'messages'), messageData)

      reset()
    } catch (error) {
      console.error('Error al agregar el mensaje:', error)
    }

    reset()
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
