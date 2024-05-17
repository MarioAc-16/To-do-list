import { createSlice } from "@reduxjs/toolkit";
 export const todoSlice = createSlice({
    name:'todos',
    initialState:{
        value: [{
            'name': 'realizar tarea 1',
            'description': 'instalar librerias',
            'dueDate': '13-04-2024'
        }]
    },
    reducers:{
        addTodo:(state, action) => {
            state.value.push(action.payload)
        },
        removeTodo:(state, action) => {
            state.value = state.value.filter(tasks => tasks.name !== action.payload);
        }
    }
 })

 export const { addTodo } = todoSlice.actions;
 export const { removeTodo } = todoSlice.actions;
 export default todoSlice.reducer;