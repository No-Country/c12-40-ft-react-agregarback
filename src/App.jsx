import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Page as Login } from "./auth/page/login/Page"
import { useSelector } from 'react-redux'

function App () {
  const auth = useSelector(state => state.auth)

  const Public = (
    <Route path="/" element={<Login />} />
  )


  return (
    <>
      <Routes>
        {/* Public */}
        {
          auth.authentication === 'not-authenticated' ? <Private/> : <Public />
        }

        {/* Private */}
      </Routes>
    </>
  )
}

export default App
