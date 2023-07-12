import { Route, Routes } from 'react-router-dom'

import { Page as Login } from './auth/page/login/Page'
import { Page as Register } from './auth/page/register/Page'
import { Page as Chat } from './client/page/chat/Page'
import { Page as Home } from './client/page/home/Page'
import { Page as Dashboard } from './client/page/dashboard/Page'
// import { useSelector } from 'react-redux'
import { LayoutDashboard } from './client/page/dashboard/layout/LayoutDashboard'
import { Page as Step } from './auth/page/step/Page'
import { PublicRouter } from './auth/layout/PublicRouter'
import { PrivateRoute } from './auth/layout/PrivateRoute'
import { useEffect } from 'react'
import { autheticatedAutomatic } from './auth/store/thunk/thunk'
import { useAppDispatch } from './common/store/config'
import { Prueba } from './Prueba'
import { UserTokenAuth } from './auth/layout/UserTokenAuth'

function App () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(autheticatedAutomatic())
  }, [])

  return (
    <>
      <Routes>
        <Route path='auth/*' element={<PublicRouter />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='client/*' element={<PrivateRoute />}>
          <Route path='chat' element={<Chat />} />
          <Route path='dashboard/*' element={<LayoutDashboard />}>
            <Route index exact element={<Dashboard />} />
          </Route>
        </Route>
        <Route path='date' element={<UserTokenAuth />}>
          <Route path=':token' element={<Step />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Prueba />} />
      </Routes>
    </>
  )
}

export default App
