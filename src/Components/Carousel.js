import {Link} from "react-router-dom";

export default function Carousel() {
    const image1 = './img/carousel-1.jpg';

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={'./img/carousel-1.jpg'} style={{height: "400px", width: "1200px"}} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Dịch vụ thuê nhà cao cấp </h2>
                        <button type="button" className="btn btn-warning" style={{color:"black"}}><Link to={"add-home"}>Thêm Căn Hộ</Link></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={'./img/carousel-2.jpg'} style={{height: "400px" , width: "1200px"}} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Dịch vụ thuê nhà cao cấp </h2>
                        <button type="button" className="btn btn-warning" style={{color:"black"}}> <Link to={"add-home"}>Thêm Căn Hộ</Link></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={'./img/carousel-1.jpg'}  style={{height: "400px" , width: "1200px"}} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Dịch vụ thuê nhà cao cấp </h2>
                        <button type="button" className="btn btn-warning" style={{color:"black"}}> <Link to={"add-home"}>Thêm Căn Hộ</Link></button>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={'./img/carousel-2.jpg'} style={{height: "400px" , width: "1200px"}} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Dịch vụ thuê nhà cao cấp </h2>
                        <button type="button" className="btn btn-warning" style={{color:"black"}}> <Link to={"add-home"}>Thêm Căn Hộ</Link></button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>

    );
}