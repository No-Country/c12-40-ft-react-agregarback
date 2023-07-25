import React from 'react'
import styled from 'styled-components'
import { HeaderPost } from '../components/post/HeaderPost'
import { DescriptionPost } from '../components/post/DescriptionPost'
import { ImagePost } from '../components/post/ImagePost'
import { CommentPost } from '../components/post/CommentPost'
import { ReactionPost } from '../components/post/ReactionPost'
import { Button, Divider } from '@mui/material'

const PublicComment = styled.section`
  width: 100%;
  border: 1px solid #b4d65e;
  border-radius: 0.5rem;
  padding: 2rem 2rem 1rem 2rem;
  font-weight: bold;
`
export const Post = ({ name, description, photo, idUser, idPost }) => {
  return (
    <PublicComment>
      <HeaderPost name={name} photo={photo} idUser={idUser} />
      <Divider sx={{ my: 1 }} />
      <DescriptionPost description={description} />
      <Button sx={{ fontWeight: 'bold' }} color='secondary'>
        Ver traducción
      </Button>
      <ImagePost />
      <CommentPost idPost={idPost} />
      <Divider sx={{ my: 1 }} />
      <ReactionPost />
    </PublicComment>
  )
}
