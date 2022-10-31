import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import categories from './slices/categoriesSlice'
import questions from './slices/questionsSlice'

export const store = configureStore({
  reducer: {
    categories,
    questions,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
