'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../shared/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text-light pt-lg pb-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
          {/* Footer Logo */}
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="زاهي للخياطة الرجالية"
              width={60}
              height={60}
              className="mx-auto mb-sm"
            />
            <p className="mb-0">زاهي للخياطة الرجالية الفاخرة</p>
          </div>

          {/* Footer Links */}
          <div>
            <ul className="flex flex-col gap-xs">
              <li>
                <Link href="#hero" className="text-text-light hover:text-accent">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-text-light hover:text-accent">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-text-light hover:text-accent">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-text-light hover:text-accent">
                  آراء العملاء
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-text-light hover:text-accent">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Social */}
          <div className="text-center">
            <h4 className="text-lg mb-xs">تابعنا على</h4>
            <SocialIcons className="justify-center" iconClassName="bg-text-light text-primary hover:-translate-y-1 hover:shadow-lg" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-md border-t border-white/10">
          <p className="mb-0">&copy; {new Date().getFullYear()} زاهي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
