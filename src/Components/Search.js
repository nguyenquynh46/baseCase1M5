import {useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";


export default function Search() {
    const navigate=useNavigate()

    return (
        <>
            <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s"
                 style={{height: "100px", margin: "10px"}}>
                <div className="container">
                    <div className="bg-white shadow">
                        <Formik
                            initialValues={{minPrice: "", maxPrice: "", mindt: "", maxdt: "", nameHome: "", diachi: ""}}
                            onSubmit={values => {
                                navigate('/home/search',{state:values})
                            }}>
                            <Form>
                                <div className="row g-2">

                                    <div className="col-md-10">
                                        <div className="row g-2">
                                            <div className="col-md-2">
                                                <div data-target-input="nearest">
                                                    <Field name="minPrice" type="text"
                                                           className="form-control datetimepicker-input"
                                                           placeholder=" Giá Thấp" data-target="#date2"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div data-target-input="nearest">
                                                    <Field name="maxPrice" type="text"
                                                           className="form-control datetimepicker-input"
                                                           placeholder=" Giá Cao" data-target="#date2"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div data-target-input="nearest">
                                                    <Field name="mindt" type="text"
                                                           className="form-control datetimepicker-input"
                                                           placeholder="Diện tích nhỏ" data-target="#date2"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div data-target-input="nearest">
                                                    <Field name="maxdt" type="text"
                                                           className="form-control datetimepicker-input"
                                                           placeholder="Diện tích lớn" data-target="#date2"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div data-target-input="nearest">
                                                    <Field name="nameHome" type="text"
                                                           className="form-control datetimepicker-input"
                                                           placeholder="Tên Căn Hộ" data-target="#date2"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <Field name="diachi" as={"select"}
                                                       className="form-select form-control datetimepicker-input"
                                                       id="diachi">
                                                    <option selected value="">Địa chỉ</option>
                                                    <option value="Hà Đông">Hà Đông</option>
                                                    <option value="Hoàng Mai">Hoàng Mai</option>
                                                    <option value="Đống Đa"> Đống Đa</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2" id="timkiem1">
                                        <button type="submit" className="btn btn-warning btn-primary w-100">Tìm kiếm
                                        </button>
                                    </div>

                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}