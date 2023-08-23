import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "user/login",
    async (data) => {
        const res = await axios.post('http://localhost:3000/login', data);
        return res

    }
)
export const registerUser = createAsyncThunk (
    "user/register",
    async (data)=>{
        const  res = await axios.post('http://localhost:3000/register', data);
        return res.data
    }
)