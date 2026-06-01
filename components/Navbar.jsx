import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp, IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiSolidChevronDown } from "react-icons/bi";
import "../styles/navbar.css";
import react30 from "../src/assets/react30.webp";
import react31 from "../src/assets/react31.webp";
import react32 from "../src/assets/react32.webp";
import react33 from "../src/assets/react33.webp";
function Navbar() {
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
            <span>Home</span>
            <BiSolidChevronDown className="span-1" />
          </Link>

          {/* Absolute positioning inline forces the dropdown to float over your existing layout */}
          {isHovered && (
            <div
              className="dropdown-menu"

            >
              <div className="luu">

                {HomeLink.map((item) => (
                  <Link
                    to={`/home-v${item.id}`}
                    key={item.id}
                    className="dropdown-link"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="cataloge-page"
          onMouseEnter={() => ShowIsCatalogue(true)}
          onMouseLeave={() => ShowIsCatalogue(false)}
        >
          <Link to="Catalogue">
            Catalogue<span><BiSolidChevronDown /></span>
          </Link>
          {isCatalogue && (
                   <section className="catalogue-link">
                  <div className="catalogue-menu">
                    <h1 >Collections</h1>
              <h1>Dining Chair</h1>
              <h1>  Dining Room</h1>
              <h1>Kid's Furniture</h1>
                    </div>  
              <div className="wwww">
                {Catalogue.map((item) => (
                  <Link
                    to={`Catalogue-v${item.id}`}
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
            
            
          )

          }

        </div>

        <Link to="Pages">Pages<span><BiSolidChevronDown /></span></Link>
        <Link to="blogs">blogs</Link>
        <Link to="contact">contact</Link>
      </nav>

      <div className="icon-1">
        <div><IoSearchSharp className="Icons-1" /></div>
        <div><IoPersonOutline className="Icons-1" /></div>
        <div><LiaShoppingBagSolid className="Icons-1" /></div>
      </div>
    </div>
  );
}

export default Navbar;