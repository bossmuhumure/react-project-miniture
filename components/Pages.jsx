import "../styles/pages.css";
import "../styles/footer.css";
import { LuBedSingle } from "react-icons/lu";

import react1 from "../src/assets/react1.webp";
import react2 from "../src/assets/react2.webp";
import react4 from "../src/assets/react4.webp";
import react5 from "../src/assets/react5.webp";
import react6 from "../src/assets/react6.webp";
import { BiSolidChevronDown } from "react-icons/bi";
import react7 from "../src/assets/react7.webp";
import react8 from "../src/assets/react8.webp";
import react9 from "../src/assets/react9.webp";
import react10 from "../src/assets/react10.webp";
import react11 from "../src/assets/react11.webp";
import react12 from "../src/assets/react12.webp";
import react13 from "../src/assets/react13.webp";
import react14 from "../src/assets/react14.webp";
import react15 from "../src/assets/react-15.webp";
import react16 from "../src/assets/react16.webp";
import react17 from "../src/assets/react17.webp";
import react18 from "../src/assets/react18.webp";
import react19 from "../src/assets/react19.webp";
import react20 from "../src/assets/react20.webp";
import react21 from "../src/assets/react21.png";
import react22 from "../src/assets/react22.webp";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaInboxSolid } from "react-icons/lia";
import { PiSpinnerBallLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import react23 from "../src/assets/react23.webp";
import react24 from "../src/assets/react24.webp";
import react25 from "../src/assets/react25.webp";
import react26 from "../src/assets/react26.webp";
import react27 from "../src/assets/react27.webp";
import react28 from "../src/assets/react28.webp";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import react34 from "../src/assets/react34.webp";
import React, { useState, useEffect } from "react";
function Page() {
    const one = [
        {
            id: 1,
            image: react1
        },
        {
            id: 2,
            image: react34
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === one.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const flex = [
        {
            id: 1,
            title: "LIVING ROOM",
            image: react2
        },
        {
            id: 2,
            title: "BED ROOM",
            image: react4
        },
        {
            id: 3,
            title: "KITCHEN",
            image: react5
        },
        {
            id: 4,
            title: "KID ROOM",
            image: react6
        }
    ];
    const home = [

        {
            id: 1,
            title: "Ana Grey Dining Chair",
            pricing: "$299.99",
            image: react7
        },
        {
            id: 2,
            title: "Natural Wood Dining Chair",
            pricing: "$299.99",
            image: react8

        },
        {

            id: 3,
            title: "Paolo Black Wood Dining Chair",
            pricing: "$139.99",
            image: react9
        },
        {

            id: 4,
            title: "Curved Back Dining Chair",
            pricing: "$129.99",
            image: react10
        }


    ];
    const product = [
        {
            id: 1,
            title: "Natural Wood Dining Chair",
            pricing: "$139.99",
            image: react11


        },
        {
            id: 2,
            title: "Paolo Natural Wood Dining Chair",
            pricing: "$299.99",
            image: react12


        },
        {
            id: 3,
            title: "Muirfield Sculptural Metal Accent Chair",
            pricing: "$299.99",
            image: react13

        },
        {
            id: 4,
            title: "Wells Renew Vegan Leather Chair",
            pricing: "$299.99",
            image: react14

        }

    ];
    const ivon = [
        {
            id: 1,
            paragraphy: " Up to 30% off The Living Room Event",
            title: "TOP DEAL TODAY",
            image: react15
        }

    ];
    const iranzi = [
        {
            id: 1,
            title: "Your new forever favorites are here",
            p: "CRAFT OWN FURNITURE",
            image: react16
        }
    ];
    const ngoga = [
        {
            id: 1,
            title: "Lounge Deep Chaise Lounge",
            price: "$299.99",
            image: react17
        },
        {
            id: 2,
            title: "Polly Sand Brown Accent Chair",
            price: "$439.99",
            image: react18
        },
        {
            id: 3,
            title: "Axis 2-Seat Sofa",
            price: "$239.99",
            image: react19
        },
        {
            id: 4,
            title: "Medoc Swivel Chair",
            price: "$299.99",
            image: react20
        }
    ];
    const boss = [
        {
            id: 1,
            title: "The personalization Shop",
            p: "EVEN MORE SPECIAL",
            image: react21

        },
        {
            id: 2,
            title: "New thyme hue from le creuset",
            p: "CRATE EXCLUSIVE",
            image: react22
        }
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
        <div className="orange">

            {/* HEADER */}
            <h1>
                <LuBedSingle className="but-1" />
                &nbsp;Elevate Your Lifestyle
                <br />
                with Our Furniture
                <br />
                Creations&nbsp;&nbsp;&nbsp;
                <span className="shop-one">Shop now</span>
            </h1>
            <div>

            </div>
            {/* HERO IMAGE */}
            <div className="reactImage">
                <img src={one[currentSlide].image} className="react1" alt="Furniture" />
            </div>

            {/* GRID IMAGES */}
            <div className="image2">

                {flex.map((item) => (
                    <div key={item.id} className="image-item">

                        <img
                            src={item.image}
                            className="image-0"
                            alt={item.title}
                        />

                        <div className="title1">
                            {item.title}
                        </div>

                    </div>
                ))}

            </div>
            <div className="www">
                <h1><p>you are in kitchen <span ><BiSolidChevronDown /></span></p>
                </h1>
            </div>
            <div>
                <div className="image-product">
                    {home.map((item) => (
                        <div key={item.id} className="image-product1">
                            <div><img src={item.image} className="product-1"
                                alt="" />
                            </div>
                            <div className="product-2">{item.title}</div>
                            <div>{item.pricing}</div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div>
                <div className="div4">
                    {product.map((item) => (
                        <div key={item.id} className="div-1">
                            <div><img src={item.image} className="div-2"
                                alt="" />
                            </div>
                            <div className="div-3">{item.title}</div>
                            <div>{item.pricing}</div>
                        </div>
                    )

                    )

                    }

                </div>
            </div>
            {/* <div className="cmd">
               
                    {ivon.map((item) => (
                        <div key={item.id} className="cmd1">
                            <div><img src={item.image} className="cmd2" alt="" /></div>
                            <div className="cmd3">{item.title}</div>
                            <div className="cmd4">{item.paragraphy}</div>



                        </div>
                    )
                    )}
                

            </div> */}
            <div className="button"><button className="button-1">shop all products</button></div>
            <section className="div-container">
                <div className="cmd">
                    {ivon.map((item) => (
                        <div key={item.id} className="cmd1">

                            <div className="image-wrapper">
                                <img src={item.image} className="cmd2" alt={item.title} />



                                {/* Floating White Badge Container */}
                                <div className="cmd3">
                                    <h2 className="title-text">{item.title}</h2>
                                </div>
                            </div>
                            <div className="cmd4">{item.paragraphy}</div>

                        </div>

                    ))}

                </div>
                <div className="h1-h1">
                    <p>LIMITED TIME only</p>
                    <h1>The living room event up to <br />30% off </h1>
                    <p className="paragraphy">Use this text to share information about your brand with your customers. <br />
                        Describe a product, share announcements, or welcome customers to your <br />
                        store </p>
                    <div className="hello">
                        <h1 className="hello-1">220d</h1>
                        <h1 className="hello-1">12h</h1>
                        <h1 className="hello-1">49m</h1>
                        <h1 className="hello-1">14s</h1>

                    </div>

                    <div className="buton"><button className="button-2">shop the sale</button></div>
                </div>
            </section>
            <div className="iranzi-0">
                {iranzi.map((item) => (
                    <div key={item.id} className="iranzi-1">
                        <div className="iranzi-2">
                            <img src={item.image} className="iranzi-3" alt={item.title} />
                            {item.p}
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="first"><h1>Top Sellers
            </h1>  </div>
            <div className="ngoga">
                {ngoga.map((item) => (
                    <div key={item.id} className="ngoga-1">
                        <div className="ngoga-2">
                            <img src={item.image} className="ngoga-3" alt="" />
                            <div className="ngoga-4">{item.title}</div>
                            <div className="ngoga-5">{item.price}</div>
                        </div>


                    </div>

                ))}
            </div>
            <div className="boss-0">
                {boss.map((item) => (
                    <div key={item.id} className="boss-1">
                        <div className="boss-2">
                            <img src={item.image} className="boss-3" alt="" />
                            <div className="boss-4">{item.p}</div>
                            <div className="boss-5">{item.title}</div>
                        </div>


                    </div>

                ))}
            </div>
            <div className="box-0">

                <h4>
                    <span className="box-1"> <LiaShippingFastSolid /></span>Free Shipping <br /> <p className="p1-1">Free Shipping for orders</p>
                </h4>
                <h4>
                    <span className="box-1"><LiaInboxSolid /></span> Money Guarantee <br /><p className="p1-1">Within 30 days</p>
                </h4>
                <h4>
                    <span className="box-1"> <PiSpinnerBallLight /></span> Online Support <br /><p className="p1-1">24 hours a day, 7 days a week</p>
                </h4>
                <h4>
                    <span className="box-1"> <MdOutlinePayment /></span>Flexible Payment <br /> <p className="p1-1">Pay with Multiple Credit Cards</p>
                </h4>
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

    );
}


export default Page;