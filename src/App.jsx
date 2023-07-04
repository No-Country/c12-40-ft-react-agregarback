import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Page as Login } from "./auth/page/login/Page"
import { Page as Register } from "./auth/page/register/Page"
import { Page as Chat } from "./client/page/chat/Page"
import { useSelector } from 'react-redux'

function App () {
  const auth = useSelector(state => state.auth)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </>
  )
}

export default App
