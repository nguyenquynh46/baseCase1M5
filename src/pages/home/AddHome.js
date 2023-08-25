import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addHomes } from "../../service/homesService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase";

export default function AddHome() {
    const [imageUpload, setImageUpload] = useState(null);
    const [percent, setPercent] = useState(0);
    const [urlFile, setUrlFile] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const uploadFile = () => {
        if (imageUpload == null) return;
        const storageRef = ref(storage, `/files/${imageUpload.name}`);

        const uploadTask = uploadBytesResumable(storageRef, imageUpload);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrlFile(url);
                    setIsLoading(false);
                });
            }
        );
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = (values) => {
        values.image = urlFile;
        console.log(values);
        dispatch(addHomes(values));
        navigate("/home");
    };

    useEffect(() => {
        if (imageUpload) {
            setIsLoading(true);
            uploadFile();
        }
    }, [imageUpload]);

    return (
        <>
            <div className={"row"} style={{ justifyContent: "center" }}>
                <div className={"col-8"} style={{ width: "1000px" }}>
                    <h1 style={{ textAlign: "center" }}>Add Homes</h1>
                    <Formik
                        initialValues={{
                            name: "",
                            address: "",
                            acreage: "",
                            price: "",
                            des: "",
                            status: "",
                            image: "",
                            user: { id: "" },
                        }}
                        onSubmit={(values) => {
                            handleAdd(values);
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <Field type="text" className={"form-control"} name={"name"} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Address</label>
                                <Field
                                    type="text"
                                    className={"form-control"}
                                    name={"address"}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Acreage</label>
                                <Field
                                    type="text"
                                    className={"form-control"}
                                    name={"acreage"}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                <Field type="text" className={"form-control"} name={"price"} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Des</label>
                                <Field type="text" className={"form-control"} name={"des"} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Status</label>
                                <Field
                                    type="text"
                                    className={"form-control"}
                                    name={"status"}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image</label>
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        setImageUpload(event.target.files[0]);

                                    }}
                                />
                                {/*<Field name={"image"} type={"hidden"} value={urlFile}></Field>*/}
                                {isLoading && (
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percent}%` }}
                                            aria-valuenow={percent}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            {percent}%
                                        </div>
                                    </div>
                                )}
                                {urlFile && !isLoading && <img src={urlFile} alt="" />}

                                {/*{urlFile && <img src={urlFile} alt="" />}*/}
                                {/*{percent > 0 && <div>{percent}% uploaded</div>}*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">User</label>
                                <Field
                                    type="text"
                                    className={"form-control"}
                                    name={"user.id"}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}