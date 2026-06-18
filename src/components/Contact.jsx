import "../styles/contact.css";
import react62 from "../../src/assets/react62.png";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
function Contact() {
    const array = [
        {
            id: 1, image: react62,
        }
    ]
    return (
        <div >
            <div className="contact-where" >
                <h1>We’re here for you</h1>
                <p>Our friendly team is always here to chat.</p>
            </div>

            <div className="image-map">
                {array.map((item) => (
                    <div key={item.id} className="image-map1">
                        <img src={item.image} alt={item.id} className="image-map2" />

                    </div>
                )
                )}

            </div>
            <section className="flex-map">
                <div className="form-section">
                    <div className="flex-map2">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="flex-map2">
                        <input type="text" placeholder="Phone number" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="flex-map3">
                        <textarea name="" id="">Message</textarea>
                        <button className="send-what">Send message</button>
                        <p className="send-on">This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
                    </div>
                </div>

                <div>
                    <div className="button-input">
                        <p className="p-1">ADDRESS</p>
                        <p>12/A, New Boston Tower, New York <br />United States, NY</p>
                        <p>EMAIL</p>
                        <p className="email-org">contact@yourstore.com </p> <p className="email-org">sales@yourstore.com</p>
                        <p>PHONE</p>
                        <p>+25079507753 <br />+250795000693</p>
                        <p>Follow us</p>
                        <div className="visual">
                         <div className="visual-1"><BiLogoFacebook className="visual-5" /></div>
                          <div className="visual-1"> <RiTwitterXFill className="visual-5" /></div>
                          <div className="visual-1"><FaInstagram className="visual-5" /></div>
                           <div className="visual-1"> <IoLogoYoutube className="visual-5" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Contact