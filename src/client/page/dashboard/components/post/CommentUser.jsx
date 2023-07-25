import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../../../../../service/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useAppSelector } from '../../../../../common/store/config'

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
    <form onSubmit={handleSubmit(onHandle)} style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name='comment'
            {...register('comment', { required: true })}
            id='outlined-basic'
            label='Comment'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={3}>
          <Button type='submit' disabled={isValid} variant='contained'>Enviar</Button>
        </Grid>
      </Grid>
    </form>
  )
}
