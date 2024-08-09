import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Home" element={<Home/>}/> 
        </Routes>
    )
}