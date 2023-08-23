import {createSlice} from "@reduxjs/toolkit";
import {addHomes, deleteHomes, editHomes, getHomes} from "../../service/homesService";
const initialState={
    homes:[]
}
export const homesSlice =createSlice({
    name:"homes",
    initialState,
    reducers:[],
    extraReducers:builder => {
        builder.addCase(getHomes.fulfilled,(state,action)=>{
            state.homes=action.payload
        });
        builder.addCase(addHomes.fulfilled,(state,action)=>{
            state.homes.push(action.payload)
        });
        builder.addCase(deleteHomes.fulfilled,(state,action)=>{{
            let index =  -1;
            for (let i = 0; i < state.homes.length; i++) {
                if(state.homes[i] == action.payload) {
                    index = i;
                }
            }
            state.homes.splice(index,1)
        }});
        builder.addCase(editHomes.fulfilled,(state,action)=>{
            let index =  -1;
            for (let i = 0; i < state.homes.length; i++) {
                if(state.homes[i] == action.payload.id) {
                    index = i;
                }
            }
            state.homes.splice(index,1,action.payload)
        })
    }
})
export default homesSlice.reducer