import React from 'react';
import { announcementText, ctaText, ctaLink } from '@/data/announcement';

const AnnouncementBar = () => {
  return (
    <div dir="rtl" className="bg-green-600 text-white text-center py-2 fixed top-0 left-0 right-0 z-50 shadow-sm">
      {announcementText}
      <a href={ctaLink} className="ml-4 underline hover:text-accent transition-colors">{ctaText}</a>
    </div>
  );
};

export default AnnouncementBar;