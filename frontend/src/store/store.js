import { configureStore } from '@reduxjs/toolkit'
import mealSlice from './features/mealSlice'



export const store= configureStore({
  reducer: {
    meal:mealSlice,
  }
})
