import Navbar from "../Components/Navbar";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import ListHome from "./home/ListHome";
import Carousel from "../Components/Carousel";
import Search from "../Components/Search";

export  default function Home(){

    return(
        <> {/*<Navbar></Navbar>*/}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/*<Navbar></Navbar>*/}
            {/*<div className={"row"}>*/}
            {/*    <div className={"col-2"}></div>*/}
            {/*    <div className={"col-8"}>*/}
            {/*        <Carousel></Carousel>*/}

            {/*    </div>*/}
            {/*    <div className={"col-2"}></div>*/}
            {/*</div>*/}
            {/*<div className={"row"}>*/}
            {/*    <div className={"col-1"}></div>*/}
            {/*    <div className={"col-10"}>*/}
            {/*        <Search></Search>*/}
            {/*    </div>*/}
            {/*    <div className={"col-1"}></div>*/}
            {/*</div>*/}

            {/*<div className="text-center wow fadeInUp" data-wow-delay="0.1s">*/}
            {/*    <h6 className="section-title text-center  text-primary text-uppercase " >DANH SÁCH CĂN HỘ</h6>*/}
            {/*    <h1 className="mb-5"><span className="text-primary  text-uppercase">Dịch vụ của chúng tôi</span></h1>*/}
            {/*</div>*/}
            {/*<Outlet></Outlet>*/}

        </>
    )
}