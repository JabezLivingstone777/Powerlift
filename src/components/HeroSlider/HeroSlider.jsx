import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaveAnimation from '../WaveAnimation/WaveAnimation';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Telangana Powerlifting Federation",
      subtitle: "Empowering strength athletes across Telangana",
      description: "Join our community of dedicated powerlifters and achieve your strength goals with professional guidance and support",
      primaryButton: { text: "Upcoming Events", link: "/events" },
      secondaryButton: { text: "Join Our Community", link: "/about" },
      stats: [
        { number: "500+", label: "Registered Athletes" },
        { number: "25+", label: "Annual Events" },
        { number: "15+", label: "Years of Excellence" }
      ]
    },
    {
      id: 2,
      title: "Train Like a Champion",
      subtitle: "Professional coaching and world-class facilities",
      description: "Access expert training programs, certified coaches, and state-of-the-art equipment to maximize your potential",
      primaryButton: { text: "Find Training Centers", link: "/training" },
      secondaryButton: { text: "Meet Our Coaches", link: "/coaches" },
      stats: [
        { number: "50+", label: "Certified Coaches" },
        { number: "20+", label: "Training Centers" },
        { number: "1000+", label: "Success Stories" }
      ]
    },
    {
      id: 3,
      title: "Compete at Every Level",
      subtitle: "From local meets to national championships",
      description: "Participate in competitions that match your skill level and aspire to represent Telangana on the national stage",
      primaryButton: { text: "View Competitions", link: "/events" },
      secondaryButton: { text: "Competition Rules", link: "/rules" },
      stats: [
        { number: "100+", label: "State Records" },
        { number: "30+", label: "National Medalists" },
        { number: "5+", label: "International Athletes" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      <div className="slider-container">
        <div 
          className="slides-wrapper" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className="slide-content">
                <div className="slide-text">
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                  <div className="slide-buttons">
                    <Link to={slide.primaryButton.link} className="btn-primary hero-btn">
                      {slide.primaryButton.text}
                    </Link>
                    <Link to={slide.secondaryButton.link} className="btn-secondary hero-btn">
                      {slide.secondaryButton.text}
                    </Link>
                  </div>
                </div>
                <div className="slide-stats">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="slider-nav next" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wave Animation at Bottom */}
      <WaveAnimation />
    </section>
  );
};

export default HeroSlider;