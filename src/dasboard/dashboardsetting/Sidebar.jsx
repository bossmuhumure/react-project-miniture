import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/Sidebar.css";
import { 
    FiGrid, 
    FiShoppingBag, 
    FiUsers, 
    FiSettings,
    FiMail,
    FiMenu,
    FiLogOut
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        navigate("/Login");
    };

    const navItems = [
        { to: "/dashboard", icon: <FiGrid className="menu-icon" />, label: "Dashboard", end: true },
        { to: "/dashboard/products", icon: <FiShoppingBag className="menu-icon" />, label: "Products" },
        { to: "/dashboard/users", icon: <FiUsers className="menu-icon" />, label: "Users" },
        { to: "/dashboard/settings", icon: <FiSettings className="menu-icon" />, label: "Settings" },
        { to: "/dashboard/contact", icon: <FiMail className="menu-icon" />, label: "Contact" },
    ];

    return (
        <aside className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <div className="logo-wrapper">
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#f97316"/>
                        <rect x="7" y="14" width="4" height="11" rx="2" fill="white"/>
                        <rect x="14" y="7" width="4" height="18" rx="2" fill="white"/>
                        <rect x="21" y="11" width="4" height="14" rx="2" fill="white"/>
                    </svg>
                    <span className="logo-text">TailAdmin</span>
                </div>
                
                {/* Mobile Toggle Button */}
                <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                    <FiMenu />
                </button>
            </div>

            {/* Navigation Body */}
            <div className="sidebar-menu-wrapper">
                <span className="menu-group-title">MENU</span>
                
                <ul className="menu-list">
                    {navItems.map(({ to, icon, label, end }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={end}
                                className={({ isActive }) =>
                                    `menu-item-link${isActive ? " sidebar-active" : ""}`
                                }
                            >
                                {icon}
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}

                    {/* Logout */}
                    <li style={{ marginTop: "auto", paddingTop: "16px" }}>
                        <button
                            onClick={handleLogout}
                            className="menu-item-link logout-btn"
                        >
                            <FiLogOut className="menu-icon" />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;