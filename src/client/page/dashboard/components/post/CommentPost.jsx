import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const CommentPost = () => {
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
          <Button sx={{ textTransform: 'none', color: 'black' }}>
            <Typography variant='body2'>10 Comentarios</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
