import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteHomes, getHomes } from "../../service/homesService";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import login from "../Login";
import Search from "../../Components/Search";

export default function ListHome() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => {
        console.log(state.users)
        return state.users.users.username
    })

    const handleDelete = (id) => {
        dispatch(deleteHomes(id));
        navigate("/home");
    };

    const home = useSelector((state) => {
        return state.homes.homes;
    });

    useEffect(() => {
        dispatch(getHomes());
    }, []);


    const themvaogiohang = () => {
        // Xử lý logic thêm vào giỏ hàng
    };

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

                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">DANH SÁCH CĂN HỘ</h6>
                        <h1 className="mb-5"> <span className="text-primary text-uppercase" >Dịch vụ của chúng tôi</span></h1>
                </div>
                <div className="row g-4">

                    {home.map((item, index) => (
                        <div
                            key={index}
                            className="col-4 wow fadeInUp items"
                            data-wow-delay="2s"
                       >
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$<span>${item.price}</span>/Tháng</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">{item.name}</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary">
                                                <span id="hiddenSpan">{item.id}</span>
                                            </small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3">
                                            <i className="fa fa-bed text-primary me-2"></i>3 Bed
                                        </small>
                                        <small className="border-end me-3 pe-3">
                                            <i className="fa fa-bath text-primary me-2 " id="diachi1">
                                            </i>
                                            <span>{item.address}</span>
                                        </small>
                                        <small>
                                            <i className="fa fa-wifi text-primary me-2"></i>
                                            <span>DT {item.acreage} m2</span>
                                        </small>
                                    </div>
                                    <p className="text-body mb-3">{item.des}</p>
                                    <button
                                        className="btn btn-sm btn-primary rounded py-2 px-4"
                                        href=""
                                    >
                                        Xem chi tiết
                                    </button>
                                    <button
                                        className="btn btn-sm btn-dark rounded py-2 px-4 add"
                                        onClick={themvaogiohang}
                                    >
                                        Thuê Nhà
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}