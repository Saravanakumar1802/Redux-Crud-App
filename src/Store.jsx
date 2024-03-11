import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/users/UserSlice'
export const store = configureStore({
    reducer: {
        users: userSlice
    },
    
})