import {
  onAuthenticatedAutomatic,
  onGoogleAuth,
  onLogout,
  signUp
} from '../../../service/firebaseAuth'

import {
  checkingCredentials,
  login,
  loginError,
  logout
} from '../slice/sliceAuth'

export const registerAuthentication = (data) => async (dispatch) => {
  const { email, password, name } = data

  dispatch(checkingCredentials())

  const result = await signUp(email, password, name)

  if (result.success) {
    dispatch(login(result.userFirebase))
  } else {
    dispatch(loginError(result.error))
  }
}

export const registerAuthenticationGoogle = () => async (dispatch) => {
  dispatch(checkingCredentials())

  const result = await onGoogleAuth()
  console.log(result)
  if (result.success) {
    console.log(result)

    dispatch(login(result.userFirebase))
  } else {
    dispatch(loginError(result.error))
  }
}

export const autheticatedAutomatic = () => async (dispatch) => {
  dispatch(checkingCredentials())

  const result = await onAuthenticatedAutomatic()
  console.log(result)
  if (result.success) {
    dispatch(login(result.userFirebase))
  } else {
    dispatch(loginError(result.error))
  }
}

export const authenticatedLogout = () => (dispatch) => {
  dispatch(checkingCredentials())

  onLogout()

  dispatch(logout())
}
