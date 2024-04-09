import {configureStore} from '@reduxjs/toolkit'
import taskSlice from "./slice/task"

export  const store=configureStore({
    reducer:{
        Tasks:taskSlice
    }    
})