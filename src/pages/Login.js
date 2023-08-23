import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import { loginUser } from '../service/userService';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (values) => {
        dispatch(loginUser(values)).then((userRes) => {
            if (userRes.payload.data === 'User is not exist') {
                alert('Tài khoản này chưa tồn tại. Vui lòng đăng ký tài khoản mới');
                navigate('/');
            } else {
                navigate('/home');
            }
        });
    };

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Vui lòng nhập tên đăng nhập')
            .min(4, 'Tên đăng nhập phải có ít nhất 6 ký tự'),
        password: Yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(4, 'Mật khẩu phải có ít nhất 6 ký tự'),
    });

    return (
        <div className="row">
            <div className="offset-3 col-6 mt-5">
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => {
                        handleLogin(values);
                    }}
                    validationSchema={LoginSchema}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" >Username</label>
                            <Field type="text" className="form-control" name="username" />
                            <ErrorMessage name="username" component="div" className="error-message"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Field type="password" className="form-control" name="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        <Link to="/register" className="ml-3 btn btn-secondary">
                            Register
                        </Link>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;