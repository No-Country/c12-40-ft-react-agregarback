import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'

export const ReactionPost = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
    >
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'none',
          color: 'black'
        }}
      >
        {/* <PlayCircleFilledWhiteOutlinedIcon fontSize='large' />
        <Typography>Escuchar</Typography>
      </Button>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'none',
          color: 'black'
        }}
      > */}
        <FavoriteBorderOutlinedIcon fontSize='large' />
        <Typography>Reaccionar</Typography>
      </Button>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'none',
          color: 'black'
        }}
      >
        <CommentOutlinedIcon fontSize='large' />
        <Typography>Comentar</Typography>
      </Button>
    </Box>
  )
}
