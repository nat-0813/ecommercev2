import React from "react";
import "../css/home.css"; // Import the CSS file
import Slider from "../src/components/slider";

function Home() {
  return (
    <>
      <section className="heroImage">
        <div className="hero-text">
          <h2>Welcome</h2>
          <h2>Feeling adventurous?</h2>
          <br>
            <button>Shop Now</button>
          </br>
        </div>
      </section>

      <Slider />
    </>
  );
}
export default Home;
