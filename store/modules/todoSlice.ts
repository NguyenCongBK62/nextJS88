import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface Todo {
  title: string
  doSomeThing: string
}

export interface TodoSlice {
  listTodo: Todo[]
}

const initialState: TodoSlice = {
  listTodo: [
    {
      title: '日本語学校',
      doSomeThing: '漢字 - 1時間、文法 - 2時間',
    },
    {
      title: '日本語学校',
      doSomeThing: '漢字 - 1時間、文法 - 2時間',
    },
    {
      title: '日本語学校',
      doSomeThing: '漢字 - 1時間、文法 - 2時間',
    },
  ],
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.listTodo.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const a1 = state.listTodo.slice(0, action.payload)
      const a2 = state.listTodo.slice(action.payload + 1, state.listTodo.length)
      state.listTodo = a1.concat(a2)
    },
  },
})

export const getListTodo = (state: RootState): Todo[] => {
  return state.todo.listTodo
}

export const getTodoById = (state: RootState, index: number): Todo => {
  return state.todo.listTodo[index]
}

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
