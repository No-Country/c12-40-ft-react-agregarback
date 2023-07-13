import { CircularProgress } from '@mui/material'
import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../common/store/config'

export const PrivateRoute = () => {
  const auth = useAppSelector((state) => state.auth.user.status)

  if (auth === 'checking') {
    return <CircularProgress size={24} color='secondary' />
  }

  if (auth === 'not-authenticated') {
    <Navigate to='/auth/login' />
  }

  return auth === 'authenticated' && <Outlet />
}
