import React from 'react'
import styled from 'styled-components'
import { HeaderPost } from '../components/post/HeaderPost'
import { DescriptionPost } from '../components/post/DescriptionPost'
import { ImagePost } from '../components/post/ImagePost'
import { CommentPost } from '../components/post/CommentPost'
import { Divider } from '@mui/material'

const PublicComment = styled.section`
  width: 100%;
  border: 1px solid #b4d65e;
  border-radius: 0.5rem;
  padding: 2rem 2rem 1rem 2rem;
  font-weight: bold;

  button{
    color: #C32B8F;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`
export const Post = ({ name, description, photo, idUser, idPost }) => {
  return (
    <PublicComment>
      <HeaderPost name={name} photo={photo} idUser={idUser} />
      <Divider sx={{ my: 1 }} />
      <DescriptionPost description={description} />
      <button>
        Ver traducción {/* Traducir */}
      </button>
      <ImagePost />
      <CommentPost idPost={idPost} />

    </PublicComment>
  )
}
