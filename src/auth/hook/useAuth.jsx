import { useAppDispatch } from '../../common/store/config'
import { authenticatedLogout, registerAuthentication, registerAuthenticationGoogle } from '../store/thunk/thunk'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const userRegister = (data) => {
    dispatch(registerAuthentication(data))
  }

  const userRegisterWithGoogle = () => {
    dispatch(registerAuthenticationGoogle())
  }

  const userLogout = () => {
    dispatch(authenticatedLogout())
  }

  return {
    userRegister,
    userRegisterWithGoogle,
    userLogout
  }
}
