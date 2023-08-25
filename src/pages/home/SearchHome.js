import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteHomes} from "../../service/homesService";
import {toast} from "react-toastify"
export default function SearchHome(){
    const dispatch= useDispatch();
    const navigate=useNavigate()
    const state=useLocation()
    const values=state.state
    const homes = useSelector((state) => {
        return state.homes.homes;
    });

    const handleDelete = (id) => {
        dispatch(deleteHomes(id));
        navigate("/home/search");
    };



        // Áp dụng các điều kiện tìm kiếm vào mảng homes
        const filteredHomes = homes.filter((home) => {
            // Kiểm tra điều kiện giá
            if (
                (values.minPrice && home.price < values.minPrice) ||
                (values.maxPrice && home.price > values.maxPrice)
            ) {
                return false; // Không thoả mãn điều kiện, loại bỏ khỏi kết quả
            }

            // Kiểm tra điều kiện diện tích
            if (
                (values.mindt && home.acreage < values.mindt) ||
                (values.maxdt && home.acreage > values.maxdt)
            ) {
                return false; // Không thoả mãn điều kiện, loại bỏ khỏi kết quả
            }

            // Kiểm tra điều kiện tên
            if (values.nameHome && !home.name.includes(values.nameHome)) {
                return false; // Không thoả mãn điều kiện, loại bỏ khỏi kết quả
            }

            // Kiểm tra điều kiện địa chỉ
            if (values.diachi && home.address !== values.diachi) {
                return false; // Không thoả mãn điều kiện, loại bỏ khỏi kết quả
            }

            // Tất cả các điều kiện đều thoả mãn, bao gồm vào kết quả
            return true;
        });



    return (
        <>
            <div className="container">
                <div className="row g-4">


                    {filteredHomes.map((items, index) => (
                        <div
                            key={index}
                            className="col-4 wow fadeInUp items"
                            data-wow-delay="2s"
                        >
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid"  src={"../" + items.image} alt={items.name} style={{width: "350px",height:"210px"}}/>
                                    <div style={{position: "relative", bottom: "20px",left: "10px", zIndex: 1,backgroundColor: "#ffc107", width: "100px", height: "30px",borderRadius: "10px", paddingLeft: "6px", paddingTop: "2px"}}><span
                                        style={{color: "black"}}>${items.price}/Tháng</span></div>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">{items.name}</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary">
                                                <span id="hiddenSpan">{items.id}</span>
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
                                            <span>  {items.address} |</span>
                                        </small>
                                        <small>
                                            <i className="fa fa-wifi text-primary me-2"></i>
                                            <span>  DT {items.acreage} m2</span>
                                        </small>
                                    </div>
                                    <p className="text-body mb-3">{items.des}</p>
                                    <button className=" offset-2 btn btn-sm btn btn-warning btn-primary rounded py-2 px-4">
                                        <Link to={`edit-home/${items.id}`}>
                                            Chỉnh Sửa
                                        </Link>
                                    </button>
                                    <button
                                        className=" offset-1 btn btn-sm btn-dark rounded py-2 px-4 add"
                                        onClick={() => handleDelete(items.id)}
                                    > Xoá
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}