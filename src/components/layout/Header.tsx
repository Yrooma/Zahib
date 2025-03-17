'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize to reset menu state on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.querySelector('.main-nav ul');
      const menuToggle = document.querySelector('.menu-toggle');

      if (
        menu &&
        menuToggle &&
        isMenuOpen &&
        !menu.contains(target) &&
        !menuToggle.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-sm transition-all duration-fast ${
        isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/50'
      } backdrop-blur-md`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="زاهي للخياطة الرجالية"
            width={50}
            height={50}
            className="ml-sm"
          />
          <div className="hidden md:block font-bold text-xl text-primary">
            زاهي للخياطة الرجالية
          </div>
        </div>

        <nav className="main-nav relative">
          {/* Mobile menu overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/20 z-[90] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          
          <ul
            className={`${
              isMenuOpen
                ? 'flex flex-col absolute top-full left-0 md:right-0 md:left-auto w-72 bg-white shadow-lg z-[100] rounded-md mt-2 p-md transform transition-all duration-300 ease-in-out'
                : 'hidden md:flex md:gap-md'
            }`}
          >
            <li className="py-3 border-b border-gray-100 last:border-0">
              <Link 
                href="#services" 
                className="hover:text-primary block px-2 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-cogs ml-2 text-primary/70"></i>
                خدماتنا
              </Link>
            </li>
            <li className="py-3 border-b border-gray-100 last:border-0">
              <Link 
                href="#about" 
                className="hover:text-primary block px-2 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle ml-2 text-primary/70"></i>
                من نحن
              </Link>
            </li>
            <li className="py-3 border-b border-gray-100 last:border-0">
              <Link 
                href="#testimonials" 
                className="hover:text-primary block px-2 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-star ml-2 text-primary/70"></i>
                آراء العملاء
              </Link>
            </li>
            <li className="py-3 border-b border-gray-100 last:border-0">
              <Link 
                href="#contact" 
                className="hover:text-primary block px-2 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope ml-2 text-primary/70"></i>
                تواصل معنا
              </Link>
            </li>
          </ul>

          <button
            className="menu-toggle md:hidden text-2xl cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
