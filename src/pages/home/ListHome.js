import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHomes, getHomes } from "../../service/homesService";
import { Link, useNavigate } from "react-router-dom";

import ReactPaginate from "react-paginate";


export default function ListHome() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const user = useSelector(state => {
    //     return state.users.users.username
    // })
    // const [currentPage, setCurrentPage] = useState(0);
    // const itemsPerPage = 3;
    //
    // const handlePageChange = ({ selected }) => {
    //     setCurrentPage(selected);
    // };
    //
    //
    // const handleDelete = (id) => {
    //     dispatch(deleteHomes(id));
    //     navigate("/home");
    // };
    //
    // const home = useSelector((state) => {
    //     return state.homes.homes;
    // });
    // const offset = currentPage * itemsPerPage;
    // const currentItems = home.slice(offset, offset + itemsPerPage);
    //
    // useEffect(() => {
    //     dispatch(getHomes());
    // }, []);
    //
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

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

    const offset = currentPage * itemsPerPage;
    const currentItems = home.slice(offset, offset + itemsPerPage);
    const themvaogiohang = () => {
        // Xử lý logic thêm vào giỏ hàng
    };

    return (
        <>
            <div className="container">
                <div className="row g-4">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="col-4 wow fadeInUp items"
                            data-wow-delay="2s"
                        >

                    {/*{home.map((item, index) => (*/}
                    {/*    <div*/}
                    {/*        key={index}*/}
                    {/*        className="col-4 wow fadeInUp items"*/}
                    {/*        data-wow-delay="2s"*/}
                    {/*    >*/}
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div style={{position: "relative", bottom: "20px",left: "10px", zIndex: 1,backgroundColor: "#ffc107", width: "100px", height: "30px",borderRadius: "10px", paddingLeft: "6px", paddingTop: "2px"}}><span
                                        style={{color: "black"}}>${item.price}/Tháng</span></div>
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
                                            <i className="fa fa-bed text-primary me-2"></i>3 Bed |
                                        </small>
                                        <small className="border-end me-3 pe-3">
                                            <i className="fa fa-bath text-primary me-2 " id="diachi1">
                                            </i>
                                            <span>  {item.address} |</span>
                                        </small>
                                        <small>
                                            <i className="fa fa-wifi text-primary me-2"></i>
                                            <span>  DT {item.acreage} m2</span>
                                        </small>
                                    </div>
                                    <p className="text-body mb-3">{item.des}</p>
                                    <button className=" offset-2 btn btn-sm btn btn-warning btn-primary rounded py-2 px-4">
                                        <Link to={`edit-home/${item.id}`}>
                                            Chỉnh Sửa
                                        </Link>
                                    </button>
                                    <button
                                        className=" offset-1 btn btn-sm btn-dark rounded py-2 px-4 add"
                                        onClick={() => handleDelete(item.id)}
                                    > Xoá
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="pagination-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <ReactPaginate
                    previousLabel={" <> "}
                    nextLabel={" <> "}
                    breakLabel={"..."}
                    pageCount={Math.ceil(home.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>


            <style>
                {`
        .pagination {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .pagination li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-right: 5px;
          border: 1px solid #ddd;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .pagination li.active {
          background-color: #4285f4;
          color: #fff;
          border-color: #4285f4;
        }
        
        .pagination li:hover:not(.active) {
          background-color: #f1f1f1;
        }
        
        .pagination a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: #555;
          text-decoration: none;
        }
        
        .pagination a:hover {
          color: #4285f4;
        }
        `}
            </style>

        </>
    );
}
