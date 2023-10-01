import {configureStore} from "@reduxjs/toolkit"
import promptSlice from "./promptSlice"
const store = configureStore({
    reducer:promptSlice
    
})

export default store
