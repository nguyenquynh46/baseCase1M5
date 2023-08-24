import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/home/HomeUser";
import Home from "./pages/Home";
import AddHome from "./pages/home/AddHome";
import EditHome from "./pages/home/EditHome";
import ListHome from "./pages/home/ListHome";

import {useState} from "react";
import AscSortHome from "./pages/home/AscSortHome";
import DescSortHome from "./pages/home/DescHome";
import SearchHome from "./pages/home/SearchHome";
function App() {

    return (
   <>
    <div className="container-fluid">
        <Routes>
            <Route exact path={'/'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'home'} element={<Home/>}>
                <Route path={''} element={<ListHome></ListHome>}>

                </Route>

                <Route path={'add-home'} element={<AddHome/>}></Route>
                <Route path={'search'} element={<SearchHome/>}></Route>

                <Route path={'ascSort'} element={<AscSortHome/>}></Route>
                <Route path={'descSort'} element={<DescSortHome/>}></Route>
                <Route path={'edit-home/:id'} element={<EditHome/>}></Route>
            </Route>
        </Routes>
    </div>
   </>
  );
}

export default App;
// import {useState, useEffect} from "react";
// import {
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     listAll,
// } from "firebase/storage";
// import {storage} from "./firebase";
// import {v4} from "uuid";
//
// function App() {
//     const [imageUpload, setImageUpload] = useState(null);
//
//
//     const uploadFile = () => {
//         if (imageUpload == null) return;
//         const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//         uploadBytes(imageRef, imageUpload).then((snapshot) => {
//             getDownloadURL(snapshot.ref).then(async (url) => {
//                 console.log(url)
//             });
//         });
//     };
//
//
//
//     return (
//         <div className="App">
//             <input
//                 type="file"
//                 onChange={(event) => {setImageUpload(event.target.files[0]);}}
//             />
//             <button onClick={uploadFile}> Upload Image</button>
//         </div>
//     );
// }
//
// export default App;