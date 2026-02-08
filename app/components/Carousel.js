"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/maddyHero.png",
      alt: "Maddy Tax & Books - Professional bookkeeping",
    },
    {
      image: "/maddyHero.png",
      alt: "Maddy Tax & Books - Tax services",
    },
    {
      image: "/maddyHero.png",
      alt: "Maddy Tax & Books - Financial clarity",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentSlide ? styles.carouselItemActive : ""
            }`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className={styles.carouselButton}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={styles.carouselButton}
        onClick={handleNext}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Carousel Indicators */}
      <div className={styles.carouselIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselIndicator} ${
              index === currentSlide ? styles.carouselIndicatorActive : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
