// import { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from '../../../../service/firebase'
// import { onAuthStateChanged } from 'firebase/auth'

// // create context
// const AuthContext = createContext()

// // provider context
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null)

//   const value = {
//     currentUser,
//     setCurrentUser
//   }

//   //   useEffect(() => {
//   //     const unsub = onAuthStateChanged(auth, (user) => {
//   //       setCurrentUser(user)
//   //       console.log(user)
//   //     })

//   //     return () => {
//   //       unsub()
//   //     }
//   //   }, [])

//   return (
//     <AuthContext.Provider value={{ value }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const UserAuth = () => {
//   return useContext(AuthContext)
// }
