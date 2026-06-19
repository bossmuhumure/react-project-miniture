import React, { useState } from "react";
import "../../styles/dashNavbar.css"
import {
    FiMenu,
    FiSearch,
    FiMoon,
    FiSun,
    FiBell,
    FiChevronDown,
} from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
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
            </div>
        </nav>
    );
};

export default Navbar;