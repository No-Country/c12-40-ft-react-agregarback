import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { CommentUser } from './CommentUser'
import { CommentRecentUser } from './CommentRecentUser'

export const CommentPost = ({ idPost }) => {
  const [comment, setComment] = useState(false)
  const [comments, setComments] = useState([])

  const handleComment = () => {
    setComment(!comment)
  }

  return (
    <Grid container mt={1} sx={{ alignItems: 'center' }}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <FavoriteIcon fontSize='small' />
          <Typography variant='body2'>10</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 0.5 }}>
          <Button onClick={handleComment} sx={{ textTransform: 'none', color: 'black' }}>
            <Typography variant='body2'>{comments.length} Comentarios</Typography>
          </Button>
        </Box>
      </Grid>
      {
        comment && (
          <>
            <CommentUser idPost={idPost} setComment={setComment} />
            <CommentRecentUser comments={comments} setComments={setComments} idPost={idPost} />
          </>
        )
      }
    </Grid>
  )
}
