export default function Search(){
    return (
        <>
            <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s" style={{height:"100px", margin:"10px"}}>
                <div className="container">
                    <div className="bg-white shadow" >
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-2">
                                        <div data-target-input="nearest">
                                            <input id='minPrice' type="text"
                                                   className="form-control datetimepicker-input" placeholder=" Giá Thấp"
                                                   data-target="#date2" data-toggle="datetimepicker"/>
                                        </div>


                                    </div>
                                    <div className="col-md-2">
                                        <div data-target-input="nearest">
                                            <input id='maxPrice' type="text"
                                                   className="form-control datetimepicker-input" placeholder=" Giá Cao"
                                                   data-target="#date2" data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div data-target-input="nearest">
                                            <input id='mindt' type="text" className="form-control datetimepicker-input"
                                                   placeholder="Diện tích nhỏ" data-target="#date2"
                                                   data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div data-target-input="nearest">
                                            <input id='maxdt' type="text" className="form-control datetimepicker-input"
                                                   placeholder="Diện tích lớn" data-target="#date2"
                                                   data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div data-target-input="nearest">
                                            <input id='nameHome' type="text"
                                                   className="form-control datetimepicker-input"
                                                   placeholder="Tên Căn Hộ" data-target="#date2"
                                                   data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2 ">
                                        <select className="form-select form-control datetimepicker-input" id="diachi">
                                            <option selected value="">Địa chỉ</option>
                                            <option value="Hà Đông">Hà Đông</option>
                                            <option value="Hoàng Mai">Hoàng Mai</option>
                                            <option value="Đống Đa"> Đống Đa</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-2" id="timkiem1">
                                <button className="btn btn-primary w-100" onClick="loadListSearch()">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}