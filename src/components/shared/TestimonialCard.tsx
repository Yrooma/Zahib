import React from 'react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, text, image }) => {
  return (
    <div className="testimonial glass-effect min-w-[280px] flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] transition-transform hover:-translate-y-1 relative">
      <div className="absolute top-sm right-sm text-2xl text-primary opacity-20">
        <i className="fas fa-quote-right"></i>
      </div>
      
      <div className="mb-md">
        <p>{text}</p>
      </div>
      
      <div className="flex items-center">
        <div className={`w-[50px] h-[50px] rounded-full ml-sm overflow-hidden flex items-center justify-center bg-accent ${!image ? 'placeholder' : ''}`}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <i className="fas fa-user text-2xl text-primary"></i>
          )}
        </div>
        <div>
          <h4 className="text-lg font-bold mb-0">{name}</h4>
          <p className="mb-0">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
