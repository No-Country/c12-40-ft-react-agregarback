import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

import styled from '@emotion/styled'

import { useAppSelector } from '../../../../../common/store/config'
import { ButtonAddFriend } from './ButtonAddFriend'

export const HeaderPost = ({ name, photo, idUser }) => {
  const currentUserUid = useAppSelector((state) => state.auth.user.user.uid)

  const GridStyled = styled(Grid)`

  font-family: 'Nunito Sans', sans-serif;

  .profile-name{
    font-weight: bold;
    font-size: 0.875rem;
  }

  .post-info{
    color: 484848;
    font-weight: 500;
  }
`

  return (
    <Grid container>
      <GridStyled item xs={11}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar src={photo || null} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <h2 className='profile-name'>{name}</h2>
            {/* Insert flags */}
            <h3 className='post-info'>1 hora • Editado</h3>
            {/* {idUser !== currentUserUid && (
              <ButtonAddFriend
                idUser={idUser}
                currentUserUid={currentUserUid}
              />
            )} Esto debe ir en el perfil */}
          </Box>
        </Box>
      </GridStyled>
      <Grid item xs={1}>
        <Button sx={{ color: 'black' }}>
          <MoreHorizRoundedIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
