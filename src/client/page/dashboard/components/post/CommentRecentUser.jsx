import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../../../../service/firebase'
import { Grid, Typography } from '@mui/material'

export const CommentRecentUser = ({ idPost, setComments, comments }) => {
  useEffect(() => {
    const q = query(
      collection(db, 'comments'),
      where('idPost', '==', idPost),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = []
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      })

      setComments(data)
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      {comments?.map(c => (
        <Grid container key={c.id} sx={{ p: 2 }}>
          <Grid item xs={11}>
            <Typography variant='body1'>{c.msg}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Algo</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}
