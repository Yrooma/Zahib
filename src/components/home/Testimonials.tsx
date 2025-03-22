'use client';

import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import testimonials from '@/data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect the observer after animation is triggered
          observer.disconnect();
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-accent py-12">
      <style jsx>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
        .vibrate-animation {
          animation: vibrate 0.8s ease-in-out;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">آراء العملاء</h2>

        <div className="relative">
          {/* Navigation Buttons - Visible on all screen sizes */}
          <button
            onClick={handlePrev}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="التالي"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="السابق"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${currentIndex * 100}%)`,
                direction: 'rtl' // Move the direction to the parent container
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 py-4"
                >
                  <div className={`max-w-2xl mx-auto ${isVisible && index === currentIndex ? 'vibrate-animation' : ''}`}>
                    <TestimonialCard
                      name={testimonial.name}
                      location={testimonial.location}
                      text={testimonial.text}
                      image={testimonial.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Desktop Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`تقييم ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;