import React, { useState } from "react";
import "../../styles/Sidebar.css";
import { 
    FiGrid, 
    FiCpu, 
    FiShoppingCart, 
    FiCalendar, 
    FiUser, 
    FiCheckSquare,
    FiChevronDown,
    FiMenu
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const [dashboardExpanded, setDashboardExpanded] = useState(true);
    const [aiExpanded, setAiExpanded] = useState(false);
    const [ecommerceExpanded, setEcommerceExpanded] = useState(false);

    return (
        <aside className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <div className="logo-wrapper">
                    {/* TailAdmin Logo Icon (SVG) */}
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#3C50E0"/>
                        <rect x="7" y="14" width="4" height="11" rx="2" fill="white"/>
                        <rect x="14" y="7" width="4" height="18" rx="2" fill="white"/>
                        <rect x="21" y="11" width="4" height="14" rx="2" fill="white"/>
                    </svg>
                    <span className="logo-text">TailAdmin</span>
                </div>
                
                {/* Mobile Close Button / Toggle Icon */}
                <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                    <FiMenu />
                </button>
            </div>

            {/* Navigation Body */}
            <div className="sidebar-menu-wrapper">
                <span className="menu-group-title">MENU</span>
                
                <ul className="menu-list">
                    {/* Dashboard */}
                    <li className="menu-item-group">
                        <button 
                            className={`menu-item-header ${dashboardExpanded ? "expanded" : ""}`}
                            onClick={() => setDashboardExpanded(!dashboardExpanded)}
                        >
                            <span className="menu-item-label">
                                <FiGrid className="menu-icon" />
                                <span>Dashboard</span>
                            </span>
                            <FiChevronDown className={`chevron-indicator ${dashboardExpanded ? "rotated" : ""}`} />
                        </button>
                        
                        <ul className={`submenu-list ${dashboardExpanded ? "open" : ""}`}>
                            <li><a href="#" className="submenu-item active">Ecommerce</a></li>
                            <li><a href="#" className="submenu-item">Analytics</a></li>
                            <li><a href="#" className="submenu-item">Marketing</a></li>
                            <li><a href="#" className="submenu-item">CRM</a></li>
                            <li><a href="#" className="submenu-item">Stocks</a></li>
                            <li><a href="#" className="submenu-item">SaaS</a></li>
                            <li><a href="#" className="submenu-item">Logistics</a></li>
                            <li>
                                <a href="#" className="submenu-item badge-item">
                                    <span>AI</span>
                                    <span className="new-badge">NEW</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="submenu-item badge-item">
                                    <span>Sales</span>
                                    <span className="new-badge">NEW</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="submenu-item badge-item">
                                    <span>Finance</span>
                                    <span className="new-badge">NEW</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* AI Assistant */}
                    <li className="menu-item-group">
                        <button 
                            className={`menu-item-header badge-item-header ${aiExpanded ? "expanded" : ""}`}
                            onClick={() => setAiExpanded(!aiExpanded)}
                        >
                            <span className="menu-item-label">
                                <FiCpu className="menu-icon" />
                                <span>AI Assistant</span>
                                <span className="new-badge">NEW</span>
                            </span>
                            <FiChevronDown className={`chevron-indicator ${aiExpanded ? "rotated" : ""}`} />
                        </button>
                        
                        <ul className={`submenu-list ${aiExpanded ? "open" : ""}`}>
                            <li><a href="#" className="submenu-item">Chat</a></li>
                            <li><a href="#" className="submenu-item">Settings</a></li>
                        </ul>
                    </li>

                    {/* E-commerce */}
                    <li className="menu-item-group">
                        <button 
                            className={`menu-item-header ${ecommerceExpanded ? "expanded" : ""}`}
                            onClick={() => setEcommerceExpanded(!ecommerceExpanded)}
                        >
                            <span className="menu-item-label">
                                <FiShoppingCart className="menu-icon" />
                                <span>E-commerce</span>
                            </span>
                            <FiChevronDown className={`chevron-indicator ${ecommerceExpanded ? "rotated" : ""}`} />
                        </button>
                        
                        <ul className={`submenu-list ${ecommerceExpanded ? "open" : ""}`}>
                            <li><a href="#" className="submenu-item">Products</a></li>
                            <li><a href="#" className="submenu-item">Orders</a></li>
                            <li><a href="#" className="submenu-item">Customers</a></li>
                        </ul>
                    </li>

                    {/* Calendar */}
                    <li>
                        <a href="#" className="menu-item-link">
                            <FiCalendar className="menu-icon" />
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* User Profile */}
                    <li>
                        <a href="#" className="menu-item-link">
                            <FiUser className="menu-icon" />
                            <span>Profile</span>
                        </a>
                    </li>

                    {/* Task */}
                    <li>
                        <a href="#" className="menu-item-link">
                            <FiCheckSquare className="menu-icon" />
                            <span>Tasks</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;