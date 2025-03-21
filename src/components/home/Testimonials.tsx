'use client';

import React, { useRef, useEffect } from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import testimonials from '@/data/testimonials';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize smooth scroll behavior for testimonials
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let startX: number;
    let startScrollLeft: number;

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true;
      startX = e.touches[0].pageX;
      startScrollLeft = container.scrollLeft;
      container.style.scrollBehavior = 'auto'; // Disable smooth scrolling during touch
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return;
      
      const x = e.touches[0].pageX;
      const distance = startX - x;
      container.scrollLeft = startScrollLeft + distance / 2;
      
      // Prevent page scrolling when swiping testimonials
      if (Math.abs(distance) > 10) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      isScrolling = false;
      container.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
    };

    // Mouse wheel horizontal scrolling support
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY / 2;
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="testimonials" className="bg-accent">
      <div className="container">
        <h2 className="section-heading">آراء العملاء</h2>
        <div className="relative pb-md overflow-hidden">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-md py-sm px-xs scroll-smooth touch-pan-x scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
