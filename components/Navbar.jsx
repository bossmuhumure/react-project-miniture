import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import  "../styles/navbar.css"
import { BiSolidChevronDown } from "react-icons/bi";
function Navbar() {
    return (
        <div className="miniture">
            
            <div>
                  <h1 className="hd1">miniture</h1>
            </div>
            
                <nav className="navcontainer">
           <Link  to="/"><span>Home</span><BiSolidChevronDown className="span-1" /></Link>
                <Link  to="Catalogue">Catalogue<span><BiSolidChevronDown /></span></Link >
                <Link  to="Pages">Pages<span><BiSolidChevronDown /></span></Link>
                <Link  to="blogs">blogs</Link>
                <Link  to="contact">contact</Link>
                </nav>
            
            <div className="icon-1">
               <div><IoSearchSharp className="Icons-1" /></div>
               <div><IoPersonOutline className="Icons-1" /></div>
                 <div><LiaShoppingBagSolid className="Icons-1" /></div>
            </div>


        </div>

    )

}
export default Navbar