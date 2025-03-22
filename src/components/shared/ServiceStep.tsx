import React from 'react';

interface ServiceStepProps {
  number: number;
  title: string;
  description: string;
}

const ServiceStep: React.FC<ServiceStepProps> = ({ number, title, description }) => {
  return (
    <div className="glass-effect flex items-start ring-2 ring-gray-200 ring-opacity-50">
      <div className="bg-primary text-text-light w-10 h-10 rounded-full flex items-center justify-center font-bold ml-sm flex-shrink-0 ">
        {number}
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default ServiceStep;
