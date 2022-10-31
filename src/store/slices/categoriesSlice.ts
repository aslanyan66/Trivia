import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { ICategory, IServerCategoryResponse } from 'models/categories'
import axios from 'axios'
import { CATEGORIES_API } from 'api/api'

export interface ICategoriesState {
  selected: null | ICategory
  list: [] | ICategory[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ICategoriesState = {
  selected: null,
  list: [],
  status: 'idle',
}

export const getCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async (): Promise<ICategory[]> => {
    const response: IServerCategoryResponse = await axios.get(CATEGORIES_API)
    return response.trivia_categories
  },
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    chooseCategory: (state, action: PayloadAction<ICategory>) => {
      state.selected = action.payload
    },
    clearCategoryState: (state) => {
      state.selected = null
      state.list = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.list = action.payload
      })
      .addCase(getCategoriesAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { chooseCategory, clearCategoryState } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
