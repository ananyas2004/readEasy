import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const backgroundImagesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
   

    if (backgroundImagesRef.current) {
      const images = backgroundImagesRef.current.querySelectorAll("img");

      

      function changeBackground() {
        console.log("changeBackground called"); 

        images.forEach((image) => image.classList.remove("active")); // Remove active class from all images
        images[currentIndex].classList.add("active"); // Add active class to current image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Update using setState
      }

      setInterval(changeBackground, 5000);
    
  } else {
    console.warn("backgroundImagesRef.current is null"); // Handle the case where the element isn't available yet
  }
  }, []);
  const imageData = [
    {
      imageUrl: "https://ideogram.ai/api/images/direct/vmqgdieVQWuxSTuK2fUlTA.jpg",
      text: (
        <div className="counter-text">
          <h2>FREE AND DISCOUNTED BESTSELLERS</h2>
          <p>
            Join 15,000+ fellow readers. Get Free and discounted bestsellers staright to your inbox with
            READEASY ebooks deals newsletter. <a href="">Signup Now</a>
          </p>
        </div>
      ),
    },
    {
      imageUrl: "https://ideogram.ai/api/images/direct/s_6t1HCvRESbcNWS9OLZQg.jpg",
      text: (
        <div className="counter-text">
          <h2>LOTS OF BOOKS. 100% FREE</h2>
          <p>Welcome to your friendly neighbourhood Library. We have more than 50,00 books waiting to be discovered.</p>
        </div>
      ),
    },
    {
      imageUrl: "https://ideogram.ai/api/images/direct/v_QRK8_oSpGiEWcCs0eysA.jpg",
      text: (
        <div className="counter-text">
          <h2>READ BOOKS ONLINE</h2>
          <p>Best Site to explore.<a href="">Signup Now</a></p>
        </div>
      ),
    },
    {
      imageUrl: "https://ideogram.ai/api/images/direct/L-fm3m9HS_6Pc3JrmGL3Jg.jpg",
      text: (
        <div className="counter-text">
          <h2>READEASY BOOKSTORE</h2>
          <p>Wide Selection | 25M+ books in 8+ languages.</p>
        </div>
      ),
    },
    {
      imageUrl: "https://ideogram.ai/api/images/direct/tM_VoHUBQnqRzMJT83HVsQ.jpg",
      text: (
        <div className="counter-text">
          <h2>ENJOY THE SILENCE IN OUR READING ROOM</h2>
          <p>Come and Join the Reading Club.
      <a href="">Signup Now</a></p>
        </div>
      ),
    },
    // ... add more image and text objects as needed
  ];

  return (
    <>
      <div className="background-images" id="backgroundImages" ref={backgroundImagesRef}>
        {imageData[currentIndex]?.text} {/* Render text conditionally */}
        {imageData.map((item, index) => (
          <div key={index} className="counter-image">
            <img src={item.imageUrl} alt={`Image ${index + 1}`} className={index === currentIndex ? "active" : ""} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Counter;

