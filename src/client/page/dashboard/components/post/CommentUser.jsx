import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../../../../../service/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useAppSelector } from '../../../../../common/store/config'

import { styled } from 'styled-components'
const FormStyled = styled.form`
  .comment-input{
    border-radius: 100% !important;
  }
`

export const CommentUser = ({ idPost, setComment }) => {
  const user = useAppSelector(state => state.auth.user.user)
  const {
    register,
    reset,
    isValid,
    handleSubmit
  } = useForm({
    mode: 'all'
  })

  const onHandle = async (data) => {
    await addDoc(collection(db, 'comments'), {
      idPost,
      idUser: user.uid,
      msg: data.comment,
      name: user.name,
      photo: user.photo,
      createdAt: serverTimestamp()
    })
    console.log('comentario enviado')
    reset()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onHandle)} style={{ width: '100%' }}>

      <TextField
        fullWidth
        name='comment'
        {...register('comment', { required: true })}
        id='outlined-basic'
        variant='outlined'
        multiline
        placeholder='Añadir un comentario'
        className='comment-input'
      />
      <button type='submit' disabled={isValid} variant='contained'>Enviar</button>

    </FormStyled>
  )
}
