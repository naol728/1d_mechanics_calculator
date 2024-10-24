import {createSlice,configureStore} from "@reduxjs/toolkit"
const formulaslice=createSlice({
    name:"formula",
    initialState:{value:{name:""}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state,value=initialState.value
        }
    }
})
export const {login,logout} =formulaslice.actions;
export const store=configureStore({
    reducer:{
        formula:formulaslice.reducer,
    }
})