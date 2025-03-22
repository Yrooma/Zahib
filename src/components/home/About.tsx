import React from 'react';

const About: React.FC = () => {
  const features = [
    { icon: 'fas fa-clock', text: 'سرعة فائقة - 10 دقائق فقط' },
    { icon: 'fas fa-medal', text: 'جودة عالية في التفصيل' },
    { icon: 'fas fa-tshirt', text: 'أفضل أنواع الأقمشة الفاخرة' },
    { icon: 'fas fa-cut', text: 'خبرة في التفصيل والتصميم' },
    { icon: 'fas fa-crown', text: 'خياطة رجالية فاخرة' },
    { icon: 'fas fa-map-marker-alt', text: 'موقع مميز في مدينة الطائف' },
  ];

  return (
    <section id="about" className="bg-[url('/image3.png')] bg-cover bg-center">
      <div className="container">
        <h2 className="section-heading">من نحن</h2>
        <div className="glass-effect grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-md bg-white/30 backdrop-blur-sm ring-1 ring-gray-200 ring-opacity-50">
          <div>
            <h3 className="text-2xl mb-sm">قصة زاهي</h3>
            <p>
              نحن في زاهي للخياطة الرجالية الفاخرة نقدم مجموعة متنوعة من خدمات تفصيل وتصميم الأثواب الرجالية بأعلى معايير الجودة. من أبرز خدماتنا المميزة هي خدمة تفصيل وتصميم الثوب في 10 دقائق فقط، وهي خدمة فريدة من نوعها في المملكة العربية السعودية. تأسست زاهي بهدف توفير الوقت والجهد على عملائنا مع الحفاظ على أعلى معايير الجودة والفخامة.
            </p>

            <h3 className="text-2xl mb-sm">لماذا تختار زاهي؟</h3>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="mb-sm flex items-center">
                  <i className={`${feature.icon} ml-sm text-primary text-xl w-5 text-center`}></i>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <div className="h-[300px] flex flex-col items-center justify-center bg-accent rounded-md">
              <i className="fas fa-store text-5xl text-primary mb-sm"></i>
              <p>صورة المتجر</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
