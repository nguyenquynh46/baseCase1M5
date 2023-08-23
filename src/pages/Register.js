import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addHomes} from "../service/homesService";
import {registerUser} from "../service/userService";
import * as Yup from "yup";
import React from "react";

export default function Register(){
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleRegister= async ( values)=>{
       await dispatch(registerUser(values))
        await alert('Bạn đã đăng ký thành công !')
        await navigate('/')
    }
    const LoginSchema = Yup.object().shape({
        name: Yup.string()
            .required('Vui lòng nhập họ và tên đầy đủ '),
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Vui lòng nhập email'),
        username: Yup.string()
            .required('Vui lòng nhập tên đăng nhập')
            .min(4, 'Tên đăng nhập phải có ít nhất 6 ký tự'),
        password: Yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(4, 'Mật khẩu phải có ít nhất 6 ký tự'),
    });

    return (
        <>
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Register</h1>
                <Formik initialValues={{name:'', email:'',username: '', password: ''}} onSubmit={(values) => {
                    handleRegister(values).then()
                }}
                        validationSchema={LoginSchema}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <Field type="text" className={'form-control'} name={'name'}/>
                            <ErrorMessage name="name" component="div" className="error-message"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <Field type="email" className={'form-control'} name={'email'}/>
                            <ErrorMessage name="email" component="div" className="error-message"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <Field type="text" className={'form-control'} name={'username'}/>
                            <ErrorMessage name="username" component="div" className="error-message"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <Field type="password" className={'form-control'} name={'password'}/>
                            <ErrorMessage name="password" component="div" className="error-message"   />
                        </div>
                        <button type="submit" className="btn btn-primary" >Register</button>
                        <Link to={'/'}  className="ml-3 btn btn-secondary">Login</Link>
                    </Form>
                </Formik>
            </div>
        </div>


        </>
    )
}