import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice= createSlice({
    name: "auth",
    initialState: {
        "loggedin": false,
        "user":{}
    },

    reducers: {
        signup: (state, action) => {
            state.loggedin = action.payload.loggedin
            state.user.name=action.payload.username
        }
    }
})

export const {signup}=AuthSlice.actions

export default AuthSlice.reducer