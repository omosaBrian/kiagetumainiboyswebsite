import { useEffect } from 'react';
import NewsEvents from '@/components/NewsEvents';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NewsEventsPage() {
  // Update page title
  useEffect(() => {
    document.title = "News & Events - Kiage Tumaini Boy's High School";
  }, []);

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">News & Events</h1>
            <p className="max-w-2xl text-lg">
              Stay updated with the latest news, achievements, and upcoming events at Kiage Tumaini Boy's High School.
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
      
      <div className="py-8">
        <NewsEvents />
      </div>
    </>
  );
}
