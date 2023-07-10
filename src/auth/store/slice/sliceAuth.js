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
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions
