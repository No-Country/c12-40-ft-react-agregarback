import { Route, Routes } from 'react-router-dom'

import { Page as Login } from './auth/page/login/Page'
import { Page as Register } from './auth/page/register/Page'
import { Page as Chat } from './client/page/chat/Page'
import { Page as Home } from './client/page/home/Page'
import { Page as Dashboard } from './client/page/dashboard/Page'
// import { useSelector } from 'react-redux'
import { LayoutDashboard } from './client/page/dashboard/layout/LayoutDashboard'
import { Page as Step } from './auth/page/step/Page'

function App () {
  // const auth = useSelector(state => state.auth)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='dashboard/*' element={<LayoutDashboard />}>
          <Route index exact element={<Dashboard />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/date/:token' element={<Step />} />
      </Routes>
    </>
  )
}

export default App
