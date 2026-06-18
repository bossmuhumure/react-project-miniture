 import react68 from "../../src/assets/react68.webp";
 import "../styles/Faqs.css";
 import { FaPlus } from "react-icons/fa6";

function FAQS(){
    const FAQs=[
        {
            id:1,  image:react68
        }
    ];
    return(
<div>
<div className="faqs-1">
{FAQs.map((item) =>(
    <div key={item.id}className="faqs-2">
     <img src={item.image} className="faqs-3" alt="furniture" />
    </div>
)
)}
</div>
<div>
    <div className="policy-0">
        <input type="text"className="policy-2" placeholder="What is your return policy?"/>
         <input type="text"className="policy-1"placeholder="Do you offer gift wrapping services?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-2" placeholder="How do I track my order?"/>
         <input type="text"className="policy-1"placeholder="How do I care for my garments?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-2" placeholder="What payment methods do you accept?"/>
         <input type="text"className="policy-1"placeholder="Do you offer online ordering and shipping?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-2" placeholder="Do you offer international shipping?"/>
         <input type="text"className="policy-1"placeholder="Can I sign up for exclusive offers and updates?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-2" placeholder="How can I contact your customer support?"/>
         <input type="text"className="policy-1"placeholder="How do I create an account?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-2" placeholder="Are the sizes true to measurements?"/>
         <input type="text"className="policy-1"placeholder="What if an item I want is out of stock?" />
    </div>
        <div className="policy-0">
        <input type="text"className="policy-22" placeholder="Can I modify or cancel my order after it's been placed?"/>
         <input type="text"className="policy-11"placeholder="Can I change my shipping address after placing an order?" />
    </div>
</div>
</div>
    )
}
export default FAQS