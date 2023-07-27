import { Box, Grid, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CommentUser } from './CommentUser'
import { CommentRecentUser } from './CommentRecentUser'
import likes from '../../img/likes-post.svg'

import { styled } from 'styled-components'
import { ReactionPost } from './ReactionPost'

const GridStyled = styled(Grid)`

  width: 100%;

  .likes-comments{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .likes-div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: #737373;
    font-weight: 500;
  }
  
  .post-comment{
    font-size: 0.75rem;
    font-style: normal;
    font-weight: bold;
    line-height: 1rem;
    letter-spacing: 0.03125rem;

    color: #737373;
    margin: 1rem 0 0.75rem 0;
    cursor: pointer;
  }
`

export const CommentPost = ({ idPost }) => {
  const [comment, setComment] = useState(false)
  const [comments, setComments] = useState([])

  const handleComment = () => {
    setComment(!comment)
  }

  useEffect(() => {
    setComments(comments)
  }, [comments])

  return (
    <GridStyled container mt={1} sx={{ alignItems: 'center' }}>
      <div className='likes-comments'>
        <div className='likes-div'>
          <img src={likes} alt='likes icon' />
          <p>10</p>
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 0.5 }}>

          <p className='post-comment' onClick={handleComment}>{comments.length} Comentarios</p>

        </Box>
      </div>
      <Divider style={{ width: '100%', margin: '0.5rem 0 1rem 0' }} />
      <ReactionPost />
      <CommentUser idPost={idPost} setComment={setComment} />

      {
        comment && (
          <>
            <CommentRecentUser comments={comments} setComments={setComments} idPost={idPost} />
          </>
        )
      }
    </GridStyled>
  )
}
