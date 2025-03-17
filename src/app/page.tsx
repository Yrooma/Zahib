import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import BackToTop from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <BackToTop />
    </Layout>
  );
}
