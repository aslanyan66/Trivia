import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'store/store'
import { IQuestion, IServerQuestionsResponse } from 'models/questions'
import { QUESTIONS_API } from 'api/api'
import { IUniqueId } from 'models/common'

export interface IQuestionsState {
  current: null | IQuestion
  list: [] | IQuestion[]
  status: 'idle' | 'loading' | 'failed'
  score: number
}

const initialState: IQuestionsState = {
  current: null,
  list: [],
  status: 'idle',
  score: 0,
}

export const getQuestionsAsync = createAsyncThunk(
  'questions/fetchQuestions',
  async (categoryId: IUniqueId): Promise<IQuestion[]> => {
    const response: IServerQuestionsResponse = await axios.get(`${QUESTIONS_API}${categoryId}`)
    return response.results
  },
)

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    getQuestion: (state, action: PayloadAction<number>) => {
      state.current = state.list[action.payload]
    },
    addScore: (state) => {
      state.score += 1
    },
    clearState: (state) => {
      state.score = 0
      state.list = []
      state.current = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getQuestionsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.list = action.payload
      })
      .addCase(getQuestionsAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { getQuestion, addScore, clearState: clearQuestionsState } = questionsSlice.actions

export const selectQuestions = (state: RootState) => state.questions

export default questionsSlice.reducer
