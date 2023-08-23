import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/home/HomeUser";
import Home from "./pages/Home";
import AddHome from "./pages/home/AddHome";
import EditHome from "./pages/home/EditHome";
import ListHome from "./pages/home/ListHome";

import {useState} from "react";
function App() {

    return (
   <>
    <div className="container-fluid">
        <Routes>

            <Route exact path={'/'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'home'} element={<Home/>}>
                <Route path={''} element={<ListHome></ListHome>}/>
            </Route>


        </Routes>
    </div>
   </>
  );
}

export default App;
