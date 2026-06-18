import react41 from "../../src/assets/react41.webp";
import { RiArrowDropDownLine } from "react-icons/ri";
import react20 from "../../src/assets/react20.webp";
import react19 from "../../src/assets/react19.webp";
function Catalogue() {
    const catalogue = [
        {
            id: 1, image: react41
        }
    ];
    const cataloguelink = [
        {
            id:1,title:"Ana Grey Dining Chair",pricing:"$299.99", image:react20 },
           {
            id:2,title:"Axis 2-Piece Sectional Sofa",pricing:"$339.99", image:react19},
           {
            id:3,title:"Axis 2-Piece Sectional Sofa",pricing:"$239.99", image:react19}   
    ];
    return (
        <div>
            <div className="catalogue">
                {catalogue.map((item) => (
                    <div key={item.id} className="catalogue-1">
                        <img src={item.image} alt="furniture" />
                    </div>
                )
                )}
            </div>
            <div className="catalogue-2">
                <button className="catalogue-3">Filters</button>
                <div className="catalogue-4"> sort by:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="catalogue-5">Alphabetically,A-Z
                    &nbsp;&nbsp;&nbsp;&nbsp;  <RiArrowDropDownLine className="catalogue-6" />
                </button>
            </div>
        </div>
        <section className="rayon-0">
            <div></div>
            <div className="rayon-rayon">
                {cataloguelink.map((item) => (
                    <div key={item.id} className="rayon-1">
                      <img src={item.image} className="furniture" alt="furniture" />
                      <h2>{item.title}</h2>
                      <h3>{item.pricing}</h3>
                    </div>
                )
            )}
            </div>
        </section>
        </div>
    )
}
export default Catalogue