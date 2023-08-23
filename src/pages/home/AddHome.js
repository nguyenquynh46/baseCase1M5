import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addHomes} from "../../service/homesService";
import {useNavigate} from "react-router-dom";

export default function AddHome(){
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleAdd= ( values)=>{
        dispatch(addHomes(values))
        navigate('/')
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col-12"}>
                    <h1 style={{textAlign: 'center'}}>Add Homes</h1>
                    <Formik initialValues={{name: '', address: '',acreage:'',price:'',des:'',status:'',image:'',user:{id:''}}} onSubmit={(values) => {
                        handleAdd(values)
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <Field type="text" className={'form-control'} name={'name'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Address</label>
                                <Field type="text" className={'form-control'} name={'address'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Acreage</label>
                                <Field type="text" className={'form-control'} name={'acreage'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                <Field type="text" className={'form-control'} name={'price'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Des</label>
                                <Field type="text" className={'form-control'} name={'des'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Status</label>
                                <Field type="text" className={'form-control'} name={'status'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image</label>
                                <Field type="text" className={'form-control'} name={'image'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">User</label>
                                <Field type="text" className={'form-control'} name={'user.id'}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}