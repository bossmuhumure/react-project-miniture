import "../styles/Aboutus.css"
import react63 from "../src/assets/react63.webp";
import react64 from "../src/assets/react64.webp";
import react65 from "../src/assets/react65.webp";
import react66 from "../src/assets/react66.webp";
import react67 from "../src/assets/react67.webp";
import { FaInstagram } from "react-icons/fa";
function AboutUs() {
    const about = [
        {
            id: 1, image: react63
        }
    ];
    const people = [
        {
            id: 1, title: "Co Founder", description: "Anthony Martinez", image: react64
        },
        {
            id: 2, title: "Creative Director", description: "Elizabeth Johnson", image: react65
        },
        {
            id: 3, title: "Developer", description: "Andrew Harris", image: react66
        },
        {
            id: 4, title: "Designer", description: "Claire Thompson", image: react67
        },
    ];
    const ragepra = [
        {
            id: 1,
            icon: <FaInstagram />,
            image: react23
        },
        {
            id: 2,
            icon: <FaInstagram />,
            image: react24
        },
        {
            id: 3,
            icon: <FaInstagram />,
            image: react25
        },
        {
            id: 4,
            icon: <FaInstagram />,
            image: react26
        },
        {
            id: 5,
            icon: <FaInstagram />,
            image: react27
        },
        {
            id: 6,
            icon: <FaInstagram />,
            image: react28
        }
    ];

    return (
        <div className="all">
            <div className="about-us">
                <h1 >Transforming Your House into a Home <br />with Beautifully Crafted Furniture <br />
                    for Every Room</h1>
            </div>
            <div className="claude-1">
                {about.map((item) => (
                    <div key={item.id} className="claude-2">
                        <img src={item.image} className="claude-3" alt="furniture" />
                    </div>
                )
                )}
            </div>
            <div className="why-this">
                <h3 className="why-this-1">Established in 2008</h3>
                <p className="why-this-2">
                    At Miniture, our journey began in 2008 with a vision to redefine how people perceive and <br />
                    experience furniture. Over the years, we have grown from a small, family-owned <br />
                    business into a leading provider of exquisite furniture, known for our dedication to <br />
                    quality, craftsmanship, and innovation.
                </p>
            </div>
            <div className="why-this">
                <h3 className="why-this-1">The Early Years</h3>
                <p className="why-this-2">In the early years of our company, we started as a humble workshop, crafting furniture <br />
                    by hand with a commitment to excellence. Our founder, Dzung Nova, had a passion for <br /> woodworking and a deep appreciation for
                    the artistry that goes into creating fine <br />
                    furniture. This dedication laid the foundation for our company's values and principles.</p>
            </div>
            <div className="why-this">
                <h3 className="why-this-1">Growth and Expansion</h3>
                <p className="why-this-2">
                    As our reputation for quality craftsmanship and unique designs grew, so did our <br />
                    business. We expanded our operations to include a showroom where customers could <br />
                    experience our furniture firsthand. This expansion allowed us to connect with our <br />
                    customers on a more personal level and showcase the range of possibilities our furniture <br />
                    offered.
                </p>
            </div>
            <div className="why-this">
                <h3 className="why-this-1">
                    Innovation and Customization
                </h3>
                <p className="why-this-2">
                    In the 2023, we took a significant leap by embracing technology and innovation in our <br />
                    design and manufacturing processes. This allowed us to offer a wider range of <br />
                    customization options to our customers. Whether it was choosing different finishes, <br />
                    fabrics, or custom dimensions, we wanted every piece to reflect the unique style and <br />
                    personality of its owner.
                </p>
            </div>
            <div className="number">
                <div>
                    <h1 className="number-1">450+</h1>
                    <p className="number-2">Premium products</p>
                </div>
                <div>
                    <h1 className="number-1">25+</h1>
                    <p className="number-2" >Years experiences</p>
                </div>
                <div>
                    <h1 className="number-1">3600+</h1>
                    <p className="number-2">Happy customers</p>
                </div>
                <div>
                    <h1 className="number-1">92+</h1>
                    <p className="number-2">Award gained</p>
                </div>
            </div>
            <h1 className="team">Our Team</h1>
            <div >
            </div>
            <div className="visual">
                {people.map((item) => (
                    <div key={item.id} className="visual-1">
                        <img src={item.image} className="visual-2" alt="furniture" />
                        <p className="visual-3">{item.title}</p>
                        <h2 className="visual-3">{item.description}</h2>
                    </div>
                )
                )}
            </div>
            <div className="work-1">
                <h1>PRADA</h1>
                <h1>BURBERRY</h1>
                <h1>ALEXANDER <br /> <h2 className="work-2">Paris</h2>  </h1>
                <h1>BALMAN <br /> <h2 className="work-2">Paris</h2></h1>
                <h1>HERMES <br /> <h2 className="work-2">Paris</h2></h1>
            </div>
            <section className="ragepra">
                <div className="claire-1">
                    <h1 className="claire-2">Instagram Shop</h1>
                    <p className="claire-3">Tag @miniture in your Instagram photos for <br />
                        a chance to be featured here.</p>
                    <button className="claire-4">Visit Our Instagram</button>
                </div>
                <div className="ragepra-0">
                    {ragepra.map((item) => (
                        <div key={item.id} className="ragepra-1">
                            <img src={item.image} className="ragepra-2" alt="" />
                            <div className="ragepraa-1">{item.icon}</div>
                        </div>
                    )
                    )}
                </div>
            </section>
        </div>
    )
}
export default AboutUs