import { create } from 'zustand'
import { createContext } from 'react'
import { useAuthStore } from './useAuthStore'

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useAuthStore()

  const chatStore = create((set) => ({
    chatId: 'null',
    user: {},
    currentUser,
    changeUser: (payload) =>
      set((state) => ({
        ...state,
        user: payload,
        chatId:
        state.currentUser.uid > payload.uid
          ? state.currentUser.uid + payload.uid
          : payload.uid + state.currentUser.uid
      }))
  }))

  const { user, chatId } = chatStore()

  return (
    <ChatContext.Provider value={{ data: { user, chatId }, dispatch: chatStore }}>
      {children}
    </ChatContext.Provider>
  )
}
