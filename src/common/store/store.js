import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../../auth/store/sliceAuth'
import { lenguajeSlice } from '../../auth/store/sliceLenguaje'

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    lan: lenguajeSlice.reducer
  },
})