import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {editHomes} from "../../service/homesService";

export default function EditHome() {
    const navigate=useNavigate()
    const  dispatch=useDispatch()
    const { id } = useParams();
    let x= parseInt(id)
    const homes = useSelector(state => state.homes.homes);
    let home=''
    for (let i = 0; i < homes.length; i++) {
       if(homes[i].id==x){
           home= homes[i]
       }
    }
    const handleEdit=(id,values)=>{
        let data={id:id,...values}
        dispatch(editHomes({id:id,data:{data}}));
        navigate('/home')
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col-12"}>
                    <h1 style={{textAlign: 'center'}}>Add Homes</h1>
                    <Formik initialValues={{name: home.name, address: home.address,acreage:home.acreage,price:home.price,des:home.des,status:home.status,image:home.image,user:{id:home.user.id}}} onSubmit={(values) => {
                        handleEdit(home.id,values)
                    }}
                    enableReinitialize={true}>
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
    );
}

