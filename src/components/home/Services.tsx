import React from 'react';
import ServiceStep from '../shared/ServiceStep';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-accent">
      <div className="container">
        <h2 className="section-heading">خدماتنا</h2>
        
        <div className="mb-lg">
          <h3 className="text-center text-2xl mb-md">خدمة التفصيل السريع في 10 دقائق فقط</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <ServiceStep 
              number={1}
              title="أخذ المقاسات" 
              description="نأخذ مقاساتك بدقة عالية وبطريقة احترافية" 
            />
            <ServiceStep 
              number={2} 
              title="التفصيل السريع" 
              description="نستخدم تقنيات متطورة لتفصيل الثوب بسرعة وجودة عالية" 
            />
            <ServiceStep 
              number={3} 
              title="الاستلام" 
              description="استلم ثوبك الجديد خلال 10 دقائق فقط" 
            />
          </div>
        </div>
        
        {/* Line separator - responsive for all screen sizes */}
        <div className="flex justify-center w-full my-8">
          <div className="relative w-full md:w-3/4 h-6">
            <Image 
              src="/line.png" 
              alt="Decorative line separator" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        <div className="mb-lg">
          <h3 className="text-center text-2xl mb-2">تشكيلة الأثواب</h3>
          <p className="text-center mb-md">نقدم تشكيلة واسعة من الأثواب الرجالية الفاخرة بمختلف التصاميم والموديلات</p>
          <div className="glass-effect py-xl px-md text-center ring-2 ring-gray-200 ring-opacity-50">
            <i className="fas fa-tshirt text-5xl text-primary mb-sm block"></i>
            <p className="mb-0">تشكيلة متنوعة من الموديلات العصرية والتقليدية والفاخرة</p>
          </div>
        </div>
        
        {/* Pricing section is commented out in the original HTML */}
        {/* 
        <div>
          <h3 className="text-center text-2xl mb-md">الأسعار</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="glass-effect text-center">
              <h4 className="text-xl mb-sm">الثوب الأساسي</h4>
              <div className="text-3xl font-bold mb-md">xxx ريال</div>
              <ul className="text-right mb-md">
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">قماش عالي الجودة</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">تفصيل في 10 دقائق</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">ضمان الجودة</li>
              </ul>
            </div>
            <div className="glass-effect text-center scale-105 border-2 border-primary">
              <h4 className="text-xl mb-sm">الثوب المميز</h4>
              <div className="text-3xl font-bold mb-md">xxx ريال</div>
              <ul className="text-right mb-md">
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">قماش فاخر</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">تفصيل في 10 دقائق</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">تطريز حسب الطلب</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">ضمان الجودة</li>
              </ul>
            </div>
            <div className="glass-effect text-center">
              <h4 className="text-xl mb-sm">الثوب الفاخر</h4>
              <div className="text-3xl font-bold mb-md">xxx ريال</div>
              <ul className="text-right mb-md">
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">قماش فاخر مستورد</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">تفصيل في 10 دقائق</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">تطريز متميز</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">إضافات خاصة</li>
                <li className="mb-xs relative pr-5 before:content-['✓'] before:absolute before:right-0 before:text-primary">ضمان الجودة</li>
              </ul>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Services;