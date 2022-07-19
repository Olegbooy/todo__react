import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    completedTodos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        completedTodo: (state, action) => {
            const completedTodo = state.todos.find((todo) => todo.id === action.payload);
            completedTodo.completed = true;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        showAllTodo: (state, action) => {
            state.todos.filter((todo) => action.payload)
        },
        showCompletedTodo: (state, action) => {
            state.completedTodos = state.todos.filter((todo) => todo.completed === action.payload);
        }
    }
})

export const { addTodo, completedTodo, removeTodo, showAllTodo, showCompletedTodo } = todoSlice.actions;
export default todoSlice.reducer;