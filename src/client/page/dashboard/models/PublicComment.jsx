import { Avatar, Box, Button } from '@mui/material'
import { useAppSelector } from '../../../../common/store/config'

export const PublicComment = ({ setModal }) => {
  const user = useAppSelector((state) => state.auth.user)

  const handleClick = () => {
    setModal(true)
  }

  return (
    <Box
      sx={{
        border: '1px solid #B4D65E',
        p: 2,
        width: '100%',
        fontWeight: 'bold',
        borderRadius: '.5rem',
        display: 'flex',
        gap: 2
      }}
    >
      <Avatar
        src={user?.user?.photo ? user?.user?.photo : ''}
        alt={user?.user?.name}
      />
      <Button
        fullWidth
        sx={{
          backgroundColor: '#4b4a4a24',
          textTransform: 'none',
          color: '#0000006c',
          fontWeight: 'bold',
          borderRadius: 5,
          justifyContent: 'start',
          padding: '0 2rem',
          fontSize: '1rem'
        }}
        onClick={handleClick}
      >
        Crear publicación
      </Button>
    </Box>
  )
}
