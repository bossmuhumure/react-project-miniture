import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import "../../styles/dashboardLayout.css"

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "admin") {
            if (role === "user") {
                navigate("/");
            } else {
                navigate("/Login");
            }
        }
    }, [navigate]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-layout">
            <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            
            {sidebarOpen && (
                <div 
                    className="sidebar-overlay" 
                    onClick={toggleSidebar}
                ></div>
            )}

            <div className="dashboard-content-wrapper">
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="dashboard-main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;