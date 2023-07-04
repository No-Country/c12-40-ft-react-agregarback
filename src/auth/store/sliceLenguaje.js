import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lang: '',
  loading: false,
  error: false,
  errorMessage: 'error'
}

export const lenguajeSlice = createSlice({
  name: 'lenguaje',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer