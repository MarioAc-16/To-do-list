import { createSlice } from "@reduxjs/toolkit";
 export const goalSlice = createSlice({
    name:'goals',
    initialState:{
        value: []
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/goals/addGoals",{
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
        initAddGoal: (state, action) => {
            state.value.push(action.payload)
        },
        removeGoal:(state, action) => {
            state.value = state.value.filter(goals => goals.id !== action.payload);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload,{
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
 export const { addGoal, initAddGoal, removeGoal } = goalSlice.actions
 export const selectGoals = (state) => state.goals.value
 export default goalSlice.reducer;