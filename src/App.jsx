import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Page as Login } from "./auth/page/login/Page"

function App () {


  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        {/* Private */}
      </Routes>
    </>
  )
}

export default App
