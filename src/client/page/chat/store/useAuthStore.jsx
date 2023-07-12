import { createContext } from 'react'
import { create } from 'zustand'
import { auth } from '../../../../service/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

const useAuthStore = create((set) => ({
  currentUser: {},

  setCurrentUser: (user) =>
    set((state) => ({
      currentUser: user
    }))
}))

export const AuthContextProvider = ({ children }) => {
  const { currentUser, setCurrentUser } = useAuthStore()

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user)
    console.log(user)
  })

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
