import { Route, Routes } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/home" element={<Home/>}/> 
        </Routes>
    )
}