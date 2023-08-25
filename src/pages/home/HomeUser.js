import ListHome from "./ListHome";
import Navbar from "../../Components/Navbar";
import Carousel from "../../Components/Carousel";
import Search from "../../Components/Search";
import {Outlet} from "react-router-dom";

export  default  function HomeUser(){
    return (
        <>

            <div className={"row"}>
                <div className={"col-2"}></div>
                <div className={"col-8"}>
                    <Carousel></Carousel>

                </div>
                <div className={"col-2"}></div>
            </div>
            <div className={"row"}>
                <div className={"col-1"}></div>
                <div className={"col-10"}>
                    <Search></Search>
                </div>
                <div className={"col-1"}></div>
            </div>

            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-center  text-primary text-uppercase " >DANH SÁCH CĂN HỘ</h6>
                <h1 className="mb-5"><span className="text-primary  text-uppercase">Dịch vụ của chúng tôi</span></h1>
            </div>
            <Outlet></Outlet>

        </>
    )

}