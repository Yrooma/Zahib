'use client';

import React, { useState, FormEvent } from 'react';
import SocialIcons from '../shared/SocialIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    reason: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (value.trim() !== '') {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {
      name: formData.name.trim() === '',
      phone: formData.phone.trim() === '',
      reason: formData.reason.trim() === '',
      message: formData.message.trim() === '',
    };
    
    setFormErrors(errors);
    
    // If no errors, proceed with WhatsApp
    if (!Object.values(errors).some(Boolean)) {
      // Construct WhatsApp message
      const whatsappMessage = `الاسم: ${formData.name}%0A` +
                             `الجوال: ${formData.phone}%0A` +
                             `السبب: ${formData.reason}%0A` +
                             `الرسالة: ${formData.message}`;
      
      // Create WhatsApp deep link
      const whatsappLink = `https://wa.me/966533341139?text=${whatsappMessage}`;
      
      // Open WhatsApp link in new tab
      window.open(whatsappLink, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        reason: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-heading">تواصل معنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md">
          {/* Contact Info */}
          <div className="glass-effect">
            <h3 className="text-2xl mb-sm">معلومات التواصل</h3>
            <ul>
              <li className="mb-sm flex items-center">
                <i className="fas fa-map-marker-alt ml-sm text-primary text-xl w-5 text-center"></i>
                <span>شارع أبو بكر، خلف عصيمي برجر، الطائف</span>
              </li>
              <li className="mb-sm flex items-center">
                <i className="fas fa-phone ml-sm text-primary text-xl w-5 text-center"></i>
                <span dir="ltr">+966533341139</span>
              </li>
              <li className="mb-sm flex items-center">
                <i className="fas fa-envelope ml-sm text-primary text-xl w-5 text-center"></i>
                <span>info@zahi.sa</span>
              </li>
              <li className="mb-sm flex items-center">
                <i className="fas fa-clock ml-sm text-primary text-xl w-5 text-center"></i>
                <span>ساعات العمل: 9 صباحاً - 10 مساءً</span>
              </li>
            </ul>
            
            <div className="mt-md ">
              <h4 className="text-lg mb-xs">تابعنا على</h4>
              <SocialIcons />
            </div>
          </div>
          {/* Contact Form */}
          <div className="glass-effect">
            <h3 className="text-2xl mb-sm">تواصل معنا عبر واتساب</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-md">
                <label htmlFor="name" className="block mb-xs font-medium">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-sm border ${formErrors.name ? 'border-red-500' : 'border-gray-500'} rounded-sm bg-white/80 font-tajawal`}
                />
              </div>
              
              <div className="mb-md">
                <label htmlFor="phone" className="block mb-xs font-medium">رقم الجوال</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-sm border ${formErrors.phone ? 'border-red-500' : 'border-gray-500'} rounded-sm bg-white/80 font-tajawal`}
                />
              </div>
              
              <div className="mb-md">
                <label htmlFor="reason" className="block mb-xs font-medium">سبب التواصل</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full p-sm border ${formErrors.reason ? 'border-red-500' : 'border-gray-500'} rounded-sm bg-white/80 font-tajawal`}
                >
                  <option value="" disabled>اختر سبب التواصل</option>
                  <option value="استفسار">استفسار</option>
                  <option value="طلب جديد">طلب جديد</option>
                  <option value="تفصيل سريع">تفصيل سريع</option>
                  <option value="طلب حالي">طلب حالي</option>
                </select>
              </div>
              
              <div className="mb-md">
                <label htmlFor="message" className="block mb-xs font-medium">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-sm border ${formErrors.message ? 'border-red-500' : 'border-gray-500'} rounded-sm bg-white/80 font-tajawal`}
                ></textarea>
              </div>
              
              <button type="submit" className="cta-button">
                إرسال عبر واتساب
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="glass-effect text-center">
          <h3 className="text-2xl mb-sm">موقعنا</h3>
          <div className="overflow-hidden pb-[56.25%] relative h-0 mt-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3572.537632077118!2d40.4118624!3d21.2808573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e989860434cfcb%3A0xd105e7af2550ecef!2z2LLYp9mH2Yog2YTZhNiu2YrYp9i32Kkg2YjYp9mE2KPZgtmF2LTYqSDYp9mE2LHYrNin2YTZitip!5e1!3m2!1sen!2ssa!4v1742237619578!5m2!1sen!2ssa" 
              width="400" 
              height="250" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 'var(--border-radius-md)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع زاهي للخياطة الرجالية"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
