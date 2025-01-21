import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [hovered, setHovered] = useState(null); // State to track hovered card

  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero text-center py-5 d-flex align-items-center justify-content-center container-fluid"
        style={{
          backgroundImage: `url('./src/assets/about-bg.jpg')`, // Update with a relevant image for TrendAura
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          position: 'relative',
          color: 'white',
          borderRadius: '30px',
          overflow: 'hidden',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div
          className="content"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          <h1 className="display-4 fw-bold">About TrendAura</h1>
          <p className="lead">
            Redefining style, technology, and sophistication for the modern world. Welcome to the TrendAura family.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Journey</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-4">
              <p>
                TrendAura was born from a desire to merge fashion, technology, and home aesthetics into one seamless experience. Our mission is to deliver a curated collection of products that inspire confidence and creativity while embracing the latest innovations and trends.
              </p>
              <p>
                From chic apparel to cutting-edge gadgets, we pride ourselves on delivering quality and value to our customers. Every product in our collection is chosen with care, reflecting our commitment to excellence and style.
              </p>
              <p>
                Thank you for making TrendAura your go-to destination for all things trendy. Together, let’s shape the future of lifestyle and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="vision-mission-section py-5 px-2 bg-light rounded-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold">Our Vision</h3>
              <p>
                To be the leading global destination for trendsetters, innovators, and style enthusiasts, redefining the boundaries of fashion and technology.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">Our Mission</h3>
              <p>
                To empower individuals by providing access to high-quality, stylish, and innovative products that enhance their everyday lives and inspire creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section py-5 my-4 bg-secondary-subtle rounded-3">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Core Values</h2>
          <div className="row justify-content-center">
            {/* Dynamic Cards */}
            {[
              {
                title: 'Customer Satisfaction',
                text: 'We prioritize our customers by providing exceptional service and ensuring your satisfaction every step of the way.',
              },
              {
                title: 'Quality Products',
                text: 'We carefully select the best-quality products, ensuring that every item is fashionable, durable, and trendy.',
              },
              {
                title: 'Innovation',
                text: 'We stay ahead of the curve by bringing the latest trends and innovations in fashion, gadgets, and home decor to our customers.',
              },
              {
                title: 'Sustainability',
                text: 'Our commitment to sustainability drives us to source eco-friendly products and practices that support a greener planet.',
              },
              {
                title: 'Community',
                text: 'We believe in fostering a community of like-minded individuals who share a passion for trends, style, and innovation.',
              },
            ].map((value, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="card shadow text-center"
                  style={{
                    borderRadius: '15px',
                    transform: hovered === index ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: hovered === index ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Join the TrendAura Family</h3>
          <p className="lead mb-4">
            Stay up to date with the latest trends. Shop now and experience the best in fashion, electronics, and more!
          </p>
          <NavLink to="/shop" className="btn btn-primary btn-lg">
            Shop Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
