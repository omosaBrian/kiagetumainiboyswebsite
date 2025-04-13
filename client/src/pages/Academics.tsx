import { useEffect } from 'react';
import Academics from '@/components/Academics';
import Results from '@/components/Results';
import Technology from '@/components/Technology';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function AcademicsPage() {
  // Update page title
  useEffect(() => {
    document.title = "Academics - Kiage Tumaini Boy's High School";
  }, []);

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Programs</h1>
            <p className="max-w-2xl text-lg">
              Explore our comprehensive academic programs designed to develop well-rounded students prepared for future success.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="flex items-center mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Academics />
      <Results />
      <Technology />
      <CallToAction />
    </>
  );
}
