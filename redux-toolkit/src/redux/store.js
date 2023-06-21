import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../slices/TodoSlice'
import TodoSlice from '../slices/TodoSlice'

export const store = configureStore({
  reducer: {
    TodoForm:TodoReducer,
  },
})

