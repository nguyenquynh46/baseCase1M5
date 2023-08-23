import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {computeHeadingLevel} from "@testing-library/react";

export const getHomes= createAsyncThunk(
    "homes/user",
    async ()=>
    {
        const res=await axios.get("http://localhost:3000/homes");
        return res.data

    }
)
export const addHomes=createAsyncThunk(
    "add/homes",
    async (data)=>{
        const res=await axios.post('http://localhost:3000/homes',data)
        return res.data;
    }
)
export const deleteHomes=createAsyncThunk(
    "delete/homes",
    async (id)=>{
        const res =await axios.delete("http://localhost:3000/homes/"+id)
        return id
    }

)
export const editHomes =createAsyncThunk(
    "edit/homes",
    async ({ id, data })=>{
        console.log(data.data)
        const res= await  axios.put("http://localhost:3000/homes/"+id, data.data)
        return data.data
    }
)