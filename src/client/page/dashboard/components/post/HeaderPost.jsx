import { Avatar, Box, Button, Grid, Divider } from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

import styled from '@emotion/styled'

import { useAppSelector } from '../../../../../common/store/config'
import { ButtonAddFriend } from './ButtonAddFriend'
import { LangBadgePost } from './LangBadgePost'
import { useEffect, useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../../../service/firebase'

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

  .flags{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .divider-flags{
      margin: 0 0.27rem;
    }
  }

  .learn{
        background-color: #F6E7F1;
        border-color: #9C2272;
    }
`
  const [data, setData] = useState()

  useEffect(() => {
    const handleGetData = async () => {
      const docRef = doc(db, 'profile', idUser)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    }

    const fetchData = async () => {
      const data = await handleGetData()
      setData(data)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <Grid container>
      <GridStyled item xs={11}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar src={photo || null} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <h2 className='profile-name'>{name}</h2>
            <div className='flags'>
              <LangBadgePost img={data?.selectorLan.photo} />
              <Divider orientation='vertical' variant='middle' className='divider-flags' />
              {/* {
                data?.selectorLanguage.map((lang, i) => {
                  return <LangBadgePost img={lang?.photo} variant='learn' />
                })
              } Esto funcionará cuando selectorLanguage sea un array */}
            </div>
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
