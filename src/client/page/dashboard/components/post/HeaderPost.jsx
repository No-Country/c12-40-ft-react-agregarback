import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

import { useAppSelector } from '../../../../../common/store/config'
import { ButtonAddFriend } from './ButtonAddFriend'

export const HeaderPost = ({ name, photo, idUser }) => {
  const currentUserUid = useAppSelector((state) => state.auth.user.user.uid)

  return (
    <Grid container>
      <Grid item xs={11}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar src={photo || null} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant='body1'>{name}</Typography>
            {/* Insert flags */}
            <Typography variant='body2'>1 hora • Editado</Typography>
            {idUser !== currentUserUid && (
              <ButtonAddFriend
                idUser={idUser}
                currentUserUid={currentUserUid}
              />
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Button sx={{ color: 'black' }}>
          <MoreHorizRoundedIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
