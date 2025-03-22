'use client';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBar from '../layout/AnnouncementBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;