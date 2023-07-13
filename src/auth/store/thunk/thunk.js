export const checkingAuthentication = (
  { email, password }
) => async (dispatch) => {
  dispatch(checkingCredentials())

  const url = 'http://localhost:4000/api/user/login'

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.msg)
    }
    const data = await res.json()

    if (!('email' in data && 'name' in data)) {
      throw new Error('El dato recibido no es valido, intente nuevamente')
    }

    window.localStorage.setItem('token', data.token)
    const user = {
      displayName: data.name,
      photoURL: data.photoURL,
      token: data.token
    }

    dispatch(login(user))
  } catch (error) {
    const errorMessage = errorService(error)
    dispatch(loginError({ message }))
  }
}
