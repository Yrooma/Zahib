import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen bg-[url('/image.png')] bg-cover bg-center text-text-light text-center mt-[70px]">
      <div className="container">
        <div className="glass-effect max-w-[600px] mx-auto flex flex-col gap-md bg-black/30">
          <div className="pb-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-xs">زاهي للخياطة الرجالية الفاخرة</h1>
            <p className="text-xl md:text-2xl mb-0">خدمات خياطة رجالية فاخرة ومتنوعة</p>
          </div>
          
          <div className="glass-effect relative overflow-hidden bg-highlight/10 border-highlight/30 p-md mx-auto max-w-[90%]">
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] border-2 border-highlight/60 rounded-full z-10 animate-rotate"></div>
            <div className="relative z-20">
              <p className="text-xl md:text-2xl font-bold mb-0">
                نقدم خدمة تفصيل وتصميم الثوب في <span className="text-highlight font-black border-b-2 border-highlight">10 دقائق فقط</span>
              </p>
            </div>
          </div>
          
          <div>
            <Link 
              href="#contact" 
              className="cta-button"
            >
              تواصل معنا الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
