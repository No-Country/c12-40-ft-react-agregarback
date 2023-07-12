import { create } from 'zustand'
import { createContext } from 'react'
import { useAuthStore } from './useAuthStore'

export const ChatContext = createContext()

const useChatStore = create((set) => ({
  chatId: 'null',
  user: {},
  currentUser: useAuthStore.getState().currentUser,

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

export const ChatContextProvider = ({ children }) => {
  const chatStore = useChatStore()

  return (
    <ChatContext.Provider value={chatStore}>
      {children}
    </ChatContext.Provider>
  )
}
