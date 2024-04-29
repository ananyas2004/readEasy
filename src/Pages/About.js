import React from "react";
import "./About.css";
import { Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <>

      <div className="about-us">
      <div className="content">
          <h1>About Us</h1>
          <p>
            ℝ𝔼𝔸𝔻𝔼𝔸𝕊𝕐 is your one-stop shop for diving into the worlds created by your favorite authors. Whether you're a seasoned bibliophile or just starting your literary journey, our expansive library offers a vast selection of ebooks to cater to every taste. From heart-pounding thrillers to captivating classics, Readeasy makes it easy to find the perfect book to curl up with.
          </p>
          <p>
            Our team is composed of dedicated individuals who share a passion for
            books and technology. We work tirelessly to ensure that our users
            have the best reading experience possible.The Readeasy team is a tireless
            bunch. We're dedicated to crafting a reading experience that surpasses expectations. 
            Whether it's meticulously optimizing font rendering for maximum readability, coding 
            intuitive navigation features, or staying up late brainstorming innovative ways to personalize 
            your reading journey – we're constantly innovating and refining. We believe the details matter, 
            and our dedication ensures that every page turn on Readeasy is a smooth and delightful one.
          </p>
        </div>
        <div className="Sundarta">
        <img src="https://static-cse.canva.com/blob/570710/uniqueinspiringaboutpage.c1e6a436.avif" alt="image"></img>
       
        </div>
        <Outlet/>
      </div>
  </>
  );
};

export default AboutUs;