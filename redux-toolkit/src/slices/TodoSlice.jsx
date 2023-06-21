import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email:''
  }

  export const TodoSlice = createSlice({
    name: 'todolist',
    initialState,

    reducers: {
        addtodolist: (state, action) => {
            const { name, email } = action.payload;
            state.name = name;
            state.email = email;

        },

      

        
    },
  })
  export const { addtodolist } = TodoSlice.actions

  export default TodoSlice.reducer