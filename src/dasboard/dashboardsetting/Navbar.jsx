import "../../styles/dashNavbar.css"
import {
    FiMenu,
    FiSearch,
    FiMoon,
    FiBell,
    FiChevronDown,
} from "react-icons/fi";
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left Side */}
            <div className="navbar-left">
                <button className="menu-btn">
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
                <button className="icon-btn">
                    <FiMoon />
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