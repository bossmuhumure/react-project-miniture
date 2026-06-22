import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer.jsx";
function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role === "admin") {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;