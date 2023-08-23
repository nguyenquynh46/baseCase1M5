import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "../../service/userService";
const initialState={
    users: JSON.parse(localStorage.getItem("user"))
}
export const usesSlice=createSlice({
    name: "users",
    initialState,
    reducers :[],
    extraReducers : builder => {
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            console.log(action.payload.data)
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        })
        builder.addCase(registerUser.fulfilled,(state,action)=>{


        })
    }
})
export default usesSlice.reducer