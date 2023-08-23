import Navbar from "../Components/Navbar";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import ListHome from "./home/ListHome";

export  default function Home(){

    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </>
    )
}