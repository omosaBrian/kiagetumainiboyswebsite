import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { campusSection } from '@/data/schoolData';

export default function Campus() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-3">
            Our School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kiage Tumaini Boys High School educates our bright, young learners at our expansive site within Kisii County, Kenya.
          </p>
        </div>
        
        <Card className="bg-gray-50 rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={campusSection.image}
                alt={campusSection.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">{campusSection.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {campusSection.description}
              </p>
              <Link 
                href={campusSection.link} 
                className="inline-flex items-center mt-2 text-[#800000] font-medium hover:text-[#600000]"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
