'use client';

import React from 'react';
import Link from 'next/link';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '', iconClassName = '' }) => {
  const socialLinks = [
    { platform: 'instagram', url: '#', icon: 'fab fa-instagram', label: 'Instagram' },
    { platform: 'facebook', url: '#', icon: 'fab fa-facebook-f', label: 'Facebook' },
    { platform: 'twitter', url: '#', icon: 'fab fa-twitter', label: 'Twitter' },
    { platform: 'tiktok', url: '#', icon: 'fab fa-tiktok', label: 'TikTok' },
  ];

  return (
    <div className={`flex gap-sm ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-fast ${iconClassName}`}
        >
          <i className={social.icon}></i>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
