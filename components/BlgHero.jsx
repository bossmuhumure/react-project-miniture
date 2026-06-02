import "../styles/blogs.css";
import "../styles/Home.css";

import react42 from "../src/assets/react42.webp";
import react43 from "../src/assets/react43.webp";
import react44 from "../src/assets/react44.webp";

function BlgHero() {
  const car = [
    {
      id: 1,
      image: react42,
    },
    {
      id: 2,
      image: react43,
    },
    {
      id: 3,
      image: react44,
    },
  ];

  return (
    <div className="blog-container">
      <div>
        <h1>Furniture</h1>
      </div>

      <div className="blog-button">
        <button className="blog-all">All</button>
        <button className="blog-all1">clean</button>
        <button className="blog-all2">creative</button>
        <button className="blog-all3">design</button>
        <button className="blog-all4">furniture</button>
        <button className="blog-all5">post</button>
      </div>

      <div className="blog-image">
        {car.map((item) => (
          <div key={item.id} className="blog-image1">
            <div className="blog-image2">
              <img
                src={item.image}
                className="blog-image3"
                alt={`Furniture ${item.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlgHero;