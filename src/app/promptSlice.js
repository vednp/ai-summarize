import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    prompt:"",
    summary:""
}

export const promptSlice = createSlice({
    name:"prompt",
    initialState,
    reducers:{
        setPrompt:(state, action)=>{
            state.prompt = action.payload
        },
        setSummary:(state, action)=>{
            state.summary = action.payload
        }
    }
})

export const {setPrompt, setSummary} = promptSlice.actions
export default promptSlice.reducer
