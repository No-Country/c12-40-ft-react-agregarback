import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

export const HeaderPost = ({ name, photo }) => {
  return (
    <Grid container>
      <Grid item xs={11}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar src={photo || null} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant='body1'>{name}</Typography>
            {/* Insert flags */}
            <Typography variant='body2'>1 hora • Editado</Typography>
          </Box>
        </Box>

      </Grid>
      <Grid item xs={1}>
        <Button sx={{ color: 'black' }}><MoreHorizRoundedIcon /></Button>
      </Grid>
    </Grid>
  )
}
