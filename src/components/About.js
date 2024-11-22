import React from 'react';


const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Welcome to Our Pastry Shop</h1>
        <p>Your destination for delicious cakes and pastries made with love and care.</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At [Pastry Shop Name], we believe that every cake should tell a story. 
            Founded in [Year], our journey started with a passion for creating 
            irresistible desserts and an unwavering commitment to quality. From 
            traditional cakes to innovative creations, we offer a wide variety 
            of pastries made with the finest ingredients.
          </p>
        </div>

        <div className="about-images">
          <div className="image-container">
            <img 
              src="mainlogo.jpeg" 
              alt="Pastry display" 
              className="about-image"
            />
            <img 
              src="mainlogo.jpeg" 
              alt="Pastry cakes" 
              className="about-image"
            />
          </div>
          
          <div className="poster-container">
            <img 
              src="mainlogo.jpeg" 
              alt="3D Cake Poster" 
              className="cake-poster"
            />
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 [Pastry Shop Name] - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
