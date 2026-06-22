import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp, IoPersonOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiSolidChevronDown } from "react-icons/bi";
import "../styles/navbar.css";
import react30 from "../../src/assets/react30.webp";
import react31 from "../../src/assets/react31.webp";
import react32 from "../../src/assets/react32.webp";
import react33 from "../../src/assets/react33.webp";
import { TbXboxX } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(!!role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  const [isHovered, setIsHovered] = useState(false);

  const HomeLink = [
    { id: 1, title: "Home v1 — Modern Elegance" },
    { id: 2, title: "Home v2 — Rustic Comfort" },
    { id: 3, title: "Home v3 — Minimalist Chic" },
    { id: 4, title: "Home v4 — Industrial Vibes" },
    { id: 5, title: "Home v5 — Vintage Revival" },
    { id: 6, title: "Home v6 — Kid’s Playland " },
  ];
  const [isCatalogue, ShowIsCatalogue] = useState(false);
  const Catalogue = [
    {
      id: 1,
      title: "Ana Grey Dining Chair",
      pricing: "$299.99",
      Image: react30
    },
    {
      id: 2,
      title: "Axis 2-Piece Sectional Sofa",
      pricing: "$339.99",
      Image: react31
    },
    {
      id: 3,
      title: "Axis 2-Seat Sofa",
      pricing: "$239.99",
      Image: react32
    },
    {
      id: 4,
      title: "Curved Back Dining Chair",
      pricing: "$129.99",
      Image: react33
    }
  ];
  const pagelinks = [
    { id: 1, title: "AboutUs", path: "/pages-v/AboutUs" },
    { id: 2, title: "FAQS", path: "/pages-v/FAQS" },
    { id: 3, title: "Contactus", path: "/pages-v/Contactus" }
  ];
  const [initialPages, SetInitialPages] = useState(false);
  const pages = [
    {
      id: 1, title: "About Us"
    },
    {
      id: 2, title: "FAQs"
    },
    {
      id: 3, title: "Contact Us"
    }
  ]; const [initialBag, SetInitialBag] = useState(false);
  const bag = [
    {
      id: 1,
      title: ""
    }
  ]

  return (
    <div className="miniture">
      <div>
        <h1 className="hd1">miniture</h1>
      </div>

      <nav className="navcontainer">
        {/* Inline style here keeps this wrapper inline without breaking your existing CSS flexbox/grid layout */}
        <div
          className="homelink-page"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

        >
          <Link to="/">
            <span>Home</span><BiSolidChevronDown className="span-1" />
          </Link>


          {/* Absolute positioning inline forces the dropdown to float over your existing layout */}
          {isHovered && (
            <div
              className="dropdown-menu"

            >
              {HomeLink.map((item) => (
                <Link
                  to="/Home"
                  key={item.id}
                  className="dropdown-link"
                >
                  {item.title}
                </Link>
              ))}

            </div>
          )}
        </div>
        <div className="cataloge-page"
          onMouseEnter={() => ShowIsCatalogue(true)}
          onMouseLeave={() => ShowIsCatalogue(false)}
        >
          <Link to="/Catalogue">
            Catalogue<span><BiSolidChevronDown /></span>
          </Link>
          {isCatalogue && (

            <section className="catalogue-link">
              <div className="catalogue-menu">
                <h1 className="hello-class">Accent Chairs</h1>
                <h1 className="hello-class-1">Dining Chair</h1>
                <h1 className="hello-class-1">  Dining Room</h1>
                <h1 className="hello-class-1">Kid's Furniture</h1>
              </div>
              <div className="wwww">
                {Catalogue.map((item) => (
                  <Link
                    to="/Catalogue"
                    key={item.id}
                    className="catalogue-item"
                  >
                    <img src={item.Image} alt={item.title}
                    />
                    <h4> {item.title} <br /></h4>
                    <p>  {item.pricing}</p>
                  </Link>
                )
                )}
              </div>
            </section>
          )}
        </div>
        <div className="pages-condition"
          onMouseEnter={() => SetInitialPages(true)}
          onMouseLeave={() => SetInitialPages(false)}
        >
          <Link
            to="Pages">
            Pages<span><BiSolidChevronDown /></span>
          </Link>
          {initialPages && (
            <div className="pages-container">
              {pagelinks.map((item) => (
                < Link
                  to={`${item.path}`}
                  key={item.id}
                  className="pages-pages"
                >
                  <p>  {item.title}</p>

                </Link>
              )
              )}
            </div>

          )}
        </div>
        <Link className="blogs-blogs" to="/blogs">
          blogs
        </Link>

        <Link className="blogs-blogs" to="/contact">contact</Link>
      </nav>

      <div className="icon-1">
        <div className="Icons-12" ><IoSearchSharp /></div>
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="Icons-12" 
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "inline-flex", alignItems: "center" }}
            title="Logout"
          >
            <FiLogOut />
          </button>
        ) : (
          <div className="Icons-12">
            <Link to="/Login" title="Login">
              <IoPersonOutline/>
            </Link>
          </div>
        )}
        <div className="icon-icon"
          onMouseEnter={() => SetInitialBag(true)}
          onMouseLeave={() => SetInitialBag(false)}

        >
          <div className="Icons-1">
            <LiaShoppingBagSolid
              />
          </div>
          {initialBag && (
            <div className="icon-what">
              {bag.map((item) => (
                <div
                  to={`pages-v${item.id}`}
                  key={item.id}
                  className="icons-map"
                > <div className="flex-droo">
                    <h3 className="flex-droop2">Shopping Cart<TbXboxX className="tb-1" /></h3>
                  </div>
                  <div className="why">
                    <h1 className="vvvv">{item.title}</h1>
                    <h1 className="boss">Your cart is currently <br /> empty</h1>
                    <p className="v1v1">Not sure where to start? <br />
                      Try these collections:</p>
                    <button className="button-button"> continue Shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><FaArrowRight /></span> </button>
                  </div>

                </div>
              )
              )}

            </div>

          )
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;