import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers :{
        login: (state, action) => {
            state.status =true;
            state.userData = action.payload.userData;
        },
        logout: (state) =>{
            state.status = false;
            userData = null;
        }
        
     }
})


export const {login, logout} =authSlice.actions; // all the actions inside the reducer are exported
export default authSlice.reducer;

