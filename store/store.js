import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import authReducer from './auth'

export const store = configureStore({
    reducer: {
        user: authReducer
    }
})