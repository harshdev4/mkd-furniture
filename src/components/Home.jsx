import "./Home.modular.css";
import ProductList from "./productList";
// import React, { useEffect } from "react";

const Home = () => {
  const smoothScroll = () => {
    const anchor = document.querySelector("#Explore");

    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        // behavior: 'smooth'
      });
    });
    return () => {
      anchor.removeEventListener("click", () => {});
    };
  };

  return (
    <div className="homeContainer">
      <div className="hero">
        <div className="img-container">
          <img src="img/big-hero.jpg" alt="" className="heroImage" />
        </div>
        <div className="hero-text">
          <h3>Experience The Style</h3>
          <h5>Decor Your Living</h5>
          <a href="#product-section" id="Explore" onClick={smoothScroll}>
            Explore
          </a>
        </div>
      </div>

      <div className="homeAbout container">
        <h3>School Furniture Manufacturers in Delhi</h3>
        <p>
          MKD Furniture is a leading manufacturer of high-quality School
          Furniture in Kirti Nagar, Delhi, dedicated to helping individuals for
          goodlooking and quaity Lifestyle. Our range of products includes
          School Furniture, Classroom Furniture, Classroom Desk, Play School
          Furniture, Library Furniture, Computer Lab Furniture, College
          Furniture, Lab Stool, Staff Room Furniture, Office Furniture, Green
          board, White board, Pin board, Waiting Chair, Lab Furniture, Hostel
          Furniture, Filling Cabinet, Writing Arm Chair, School Desk, Conference
          Room Table, Reception Counter, Primary School Furniture, Restaurant
          Furniture, Kindergarten Furniture
        </p>

        <p>
          Late. Shri. Maya kishore Dubey(MKD) is the founder of that
          organization. We are Manufacturers, Suppliers and Traders of School
          and College Furniture, Computer Lab Furnitures, Reception Furniture,
          Conference Room Furniture, Library Furniture, Auditorium Chairs etc.
          He has around 40 years. experience in administration & public dealing
          in central government department. We under take all kind of furniture
          under one window that addresses to all your needs when its comes to
          innovative quality Institutional furniture & resources that encompass
          in office setting & interior. Most of the furniture manufacture
          Institution does not take enough concern for furniture used in their
          oganization which student and school staff spend maximum time
          utilizing. MKD has been manufacturing superior quality furniture as
          per recommendation of BIS (Bureau of Indian Standard)IS-4837 with
          latest technologies advance scientific methods in various design.{" "}
        </p>
      </div>

      <div id="product-section" className="homeProduct container">
        <h3>Our Products</h3>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
