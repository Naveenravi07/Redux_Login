import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Auth'

export default configureStore({
    reducer: {
        auth: AuthSlice
    }
})
