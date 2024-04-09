import { createSlice } from "@reduxjs/toolkit";

interface LoginResponse {
    flag : boolean;
    token: string;
    message: string;
    role : "Admin" | "User" | "";
    }

const initialState: LoginResponse = {
    flag : false,
    token: '',
    message: '',
    role: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        saveLoginData: (state, action) => {
            state.flag = action.payload.flag;
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.role = action.payload.role;
        },
        removeLoginData: (state) => {
            state.flag = false;
            state.token = '';
            state.message = '';
            state.role = '';
        }
    }
})

export const { saveLoginData, removeLoginData } = loginSlice.actions;
export default loginSlice.reducer;