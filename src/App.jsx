
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import BlgHero from "./components/BlgHero";
import Contact from "./components/Contact";
import FAQS from "./components/FAQs";
import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";
import Catalogue from "./components/Catalogue";
import Pages from "./components/Pages";
import Page from "./components/Pages";
import Signup from "./components/Signup";
import Login from "./components/Login";
import DashboardLayout from "./dasboard/dashboardsetting/dashboardLayout";
import DashboardIndex from "./dasboard/dashboardPage/DashboardIndex";
import Products from "./dasboard/dashboardPage/Products";
import Users from "./dasboard/dashboardPage/Users";
import Settings from "./dasboard/dashboardPage/Settings";
import DashContact from "./dasboard/dashboardPage/Contact";

function App() {
    return (

        <BrowserRouter>
            <Routes>


                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/blogs" element={<BlgHero />} />
                    <Route path="/contact" element={<Contact/>}/>
                     <Route path="pages-v/FAQS" element={<FAQS/>}/>
                     <Route path="pages-v/Contactus" element={<Contactus/>}/>
                      <Route path="pages-v/AboutUs" element={<AboutUs/>}/>
                       <Route path="/Catalogue" element={<Catalogue/>}/>
                        <Route path="/Pages" element={<Pages/>}/>
                         <Route path="/Page" element={<Page/>}/>
                </Route>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardIndex />} />
                    <Route path="products" element={<Products />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="contact" element={<DashContact />} />
                </Route>
            </Routes>

        </BrowserRouter>

    );
}
export default App







