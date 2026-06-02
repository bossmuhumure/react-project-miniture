import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidChevronDown } from "react-icons/bi";
function Footer() {
  return (
    <section className="formal">
      <div className="formal-1">
        <div>
          <h1 className="part-1">Our story</h1>
          <p className="part1-2">Miniture is one of the biggest international <br /> fashion companies, one of the world’s <br />
            largest distribution groups.</p>
          <div className="part1-3">
            <div className="part1-4"><BiLogoFacebook /></div>
            <div className="part1-4"> <RiTwitterXFill /></div>
            <div className="part1-4"><FaInstagram /></div>
            <div className="part1-4"> <IoLogoYoutube /></div>
          </div>
        </div>
        <div>
          <h1>Quick links</h1>
          <div className="part1-2">
            <p className="part1-22" >Accent Chairs <br /></p>
            <p className="part1-22">Dinning Chair <br /></p>
            <p className="part1-22">Dining Room <br /></p>
            <p className="part1-22"> Kid's Furniture </p>
          </div>
        </div>
        <div>
          <h1>
            Information
          </h1>
          <p className="part1-2">
            <p className="part1-22">Privacy policy <br /></p>
            <p className="part1-22"> Refund policy <br /></p>
            <p className="part1-22">Shipping & Return <br /></p>
            <p className="part1-22">  Term & conditions</p>
          </p>
        </div>
        <div>
          <h1>Let’s get in touch</h1>
          <input className="text" placeholder="Enter Your Email" /><FaArrowRight className="part1-5" />
        </div>
      </div>
      <div className="touch"></div>
      <div className="end">
        <div className="happy">© 2026 Miniture. Powered by Shopify</div>

        <div className="clash">      <button className="clash-1">English <BiSolidChevronDown /></button>
          <button className="clash-2">Rwanda (USD $)<BiSolidChevronDown /></button></div>
      </div>
    </section>




  )

}
export default Footer