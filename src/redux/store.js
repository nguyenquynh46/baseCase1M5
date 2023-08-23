import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./users/usesSlice";
import homeReducer from "./homes/homesSlice";

export const store = configureStore(
    {
        reducer:{
            users: useReducer,
            homes: homeReducer
        }
    }
)