import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import {compose} from "redux";
import {BsFillBasket3Fill} from "react-icons/bs";

export default function Navbar() {
    const navigate = useNavigate()
    const user = useSelector(state => {
        return state.users.users.username
    })
    const home = useSelector((state) => {
        return state.homes.homes;
    });

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/home'} className="navbar-brand">HomeStay</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-toggle="dropdown"
                                       aria-expanded="false">
                                        Sắp xếp
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link to={"ascSort"} className="dropdown-item">Tăng dần </Link>
                                        <Link to={"descSort"} className="dropdown-item">Giảm dần </Link>


                                    </div>
                                </li>

                            </ul>
                            {/*<button onClick="showcart()"*/}
                            {/*        className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block showCard"*/}
                            {/*        style={{width: "100px", height:"50px"}} >Đơn Hàng <i className="bi bi-cart-dash-fill fa-2x"></i> <span*/}
                            {/*    className="soluong" id="cart-count"></span></button>*/}
                            <BsFillBasket3Fill/>
                            <button type="button" className="btn btn-warning">{user}</button>
                            <button type="button" className="btn btn-outline-dark" onClick={() => {
                                localStorage.clear();
                                navigate('/')
                            }
                            }>Logout
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}