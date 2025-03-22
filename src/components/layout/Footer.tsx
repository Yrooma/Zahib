'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../shared/SocialIcons';
import { Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const year = new Date().getFullYear();
  
  return (
    <footer className="relative bg-primary text-text-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-text-light to-accent"></div>
      <div className="absolute -top-6 right-6 rotate-45 opacity-10">
        <Scissors size={120} />
      </div>
      <div className="absolute -bottom-6 left-6 -rotate-12 opacity-10">
        <Scissors size={80} />
      </div>
      
      {/* Main content */}
      <div className="container relative pt-lg pb-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
          {/* Footer Logo with animation */}
          <div className="text-center">
            <div className="relative inline-block group mb-sm">
              <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Image
                src="/logo-white.png"
                alt="زاهي للخياطة الرجالية"
                width={80}
                height={80}
                className="relative z-10 mx-auto transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <h3 className="text-xl mb-xs">زاهي للخياطة الرجالية الفاخرة</h3>
            <p className="text-sm text-text-light/80 max-w-xs mx-auto">نسعى لتقديم أرقى خدمات الخياطة الرجالية بأنامل حرفية وذوق رفيع</p>
          </div>

          {/* Footer Links with hover effects */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-xs">
              {[
                { href: '#hero', label: 'الرئيسية' },
                { href: '#services', label: 'خدماتنا' },
                { href: '#about', label: 'من نحن' },
                { href: '#testimonials', label: 'آراء العملاء' },
                { href: '#contact', label: 'تواصل معنا' }
              ].map((link, index) => (
                <li key={index} className="overflow-hidden">
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-text-light hover:text-accent transition-colors duration-300"
                  >
                    <span className="inline-block w-4 h-0.5 bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative py-1 after:absolute after:bottom-0 after:left-0 after:right-full after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:right-0">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Social */}
          <div className="text-center flex flex-col justify-center">
            <h4 className="text-lg mb-xs relative inline-block mx-auto">
              تابعنا على
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-accent"></span>
            </h4>
            <SocialIcons 
              className="justify-center gap-4" 
              iconClassName="bg-text-light text-primary hover:-translate-y-2 hover:shadow-lg hover:bg-accent transition-all duration-300" 
            />
            
            <div className="mt-4 text-sm opacity-80">
              <p>الطائف، المملكة العربية السعودية</p>
              <p dir="ltr">
                <a 
                  href="tel:+966533341139" 
                  className="text-text-light hover:text-accent"
                >
                  +966 5333 411 39
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="w-full h-0.5 bg-white/10 mb-4">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Copyright with animated border */}
        <div className="text-center pt-md border-t border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          <p className="mb-0 text-sm">
            &copy; {year} زاهي للخياطة الرجالية الفاخرة. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs mt-2 text-text-light/60">
            صُمم بحرفية وأناقة تليق بكم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;