
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                

                <Route path="/" element={<Layout />} >
                <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}
export default App







