import { createSlice } from "@reduxjs/toolkit";
 export const todoSlice = createSlice({
    name:'todos',
    initialState:{
        value: []
    },
    reducers:{
        addTodo:(state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/tasks/addTasks",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"cursodedesarrollodeaplicacionesweb"
                },
                body: JSON.stringify(action.payload)
            }).catch(err=>{
                console.log(err);
            })
        }, 
        initAddTodo: (state, action) => {
            state.value.push(action.payload)
        },
        removeTodo:(state, action) => {
            state.value = state.value.filter((tasks) => tasks.id !== action.payload);
            console.log(action.payload);
            fetch("http://localhost:3001/tasks/removeTasks/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"cursodedesarrollodeaplicacionesweb"
                },
            }).catch(err=>{
                console.log(err);
            })
        }
    }
 })

 export const { addTodo, initAddTodo, removeTodo} = todoSlice.actions
 export const selectTodos = (state) => state.todos.value

 export default todoSlice.reducer;