import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/dashNavbar.css"
import {
    FiMenu,
    FiSearch,
    FiMoon,
    FiSun,
    FiBell,
    FiChevronDown,
    FiLogOut,
} from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    // Read current theme state set by head initializer script
    const [theme, setTheme] = useState(() => {
        return document.documentElement.getAttribute("data-theme") || "light";
    });

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        navigate("/Login");
    };

    return (
        <nav className="navbar">
            {/* Left Side */}
            <div className="navbar-left">
                <button className="menu-btn" onClick={toggleSidebar}>
                    <FiMenu />
                </button>

                <div className="search-box">
                    <FiSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search or type command..."
                    />

                    <div className="shortcut">
                        ⌘ K
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="navbar-right">
                <button 
                    className="icon-btn" 
                    onClick={toggleTheme}
                    title="Toggle Theme"
                    aria-label="Toggle Theme"
                >
                    {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>

                <div className="notification">
                    <FiBell />
                    <span className="dot"></span>
                </div>

                <div className="profile">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                    />

                    <span>Musharof</span>

                    <FiChevronDown />
                </div>

                <button 
                    onClick={handleLogout} 
                    className="logout-icon-btn" 
                    title="Logout"
                >
                    <FiLogOut />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;