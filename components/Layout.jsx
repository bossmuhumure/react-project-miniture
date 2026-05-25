import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer.jsx";
import Home from "./Home.jsx";
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>


    );
}
export default Layout