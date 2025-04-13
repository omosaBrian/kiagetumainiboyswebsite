import Hero from '@/components/Hero';
import About from '@/components/About';
import NewsEvents from '@/components/NewsEvents';
import Campus from '@/components/Campus';
import Features from '@/components/Features';
import Technology from '@/components/Technology';
import Academics from '@/components/Academics';
import Results from '@/components/Results';
import LeadingSchool from '@/components/LeadingSchool';
import CallToAction from '@/components/CallToAction';
import WelcomeVideo from '@/components/WelcomeVideo';
import { useEffect } from 'react';

export default function Home() {
  // Update page title
  useEffect(() => {
    document.title = "Kiage Tumaini Boy's High School - Home";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <WelcomeVideo />
      <NewsEvents />
      <Campus />
      <Features />
      <Technology />
      <Academics />
      <Results />
      <LeadingSchool />
      <CallToAction />
    </>
  );
}
