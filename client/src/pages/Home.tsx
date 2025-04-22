import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Technology from '@/components/Technology';
import LeadingSchool from '@/components/LeadingSchool';
import WelcomeGallery from '@/components/WelcomeGallery';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Kiage Tumaini Boy's High School - Home";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <WelcomeGallery />
      <NewsEvents />
      <Features />
      <Technology />
      <LeadingSchool />
    </>
  );
}