import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../../auth/store/sliceAuth'

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer
  },
})