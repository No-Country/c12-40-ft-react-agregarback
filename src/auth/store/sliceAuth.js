import { createSlice } from '@reduxjs/toolkit'
// not-authenticated, checking, authenticated
const initialState = {
  user: {
    name: '',
    photo: '',
    uid: '',
    email: ''
  },
  loading: false,
  authentication: 'not-authenticated',
  error: false,
  errorMessage: 'error'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    checkingCredentials: (state) => {
      state.authentication = 'checking'
    },
    login: (state) => {
      state.authentication = 'auhtenticated'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer