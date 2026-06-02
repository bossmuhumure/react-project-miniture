
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import BlgHero from "../components/blgHero";
import Contact from "../components/Contact";



function App() {
    return (

        <BrowserRouter>
            <Routes>


                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/blogs" element={<BlgHero />} />
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}
export default App







