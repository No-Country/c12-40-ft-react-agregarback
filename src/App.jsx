import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Page as Login } from "./auth/page/login/Page"
import { Page as Register } from "./auth/page/register/Page"
import { Page as Chat } from "./client/page/chat/Page"
import { Page as Home } from "./client/page/home/Page"
import { Page as Dashboard } from "./client/page/dashboard/Page"
import { useSelector } from 'react-redux'
import { LayoutDashboard } from "./client/page/dashboard/layout/LayoutDashboard"
import Opcion1 from "./client/page/dashboard/pages/Opcion1"
import Opcion2 from "./client/page/dashboard/pages/Opcion2"
import Opcion3 from "./client/page/dashboard/pages/Opcion3"

function App () {
  const auth = useSelector(state => state.auth)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="dashboard/*" element={<LayoutDashboard />}>
          <Route index exact element={<Dashboard />} />
          <Route path="opcion1" element={<Opcion1 />} />
          <Route path="opcion2" element={<Opcion2 />} />
          <Route path="opcion3" element={<Opcion3 />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
