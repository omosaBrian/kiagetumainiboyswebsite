import { Book, Award, Users, Home, Laptop } from 'lucide-react';
import { Link } from 'wouter';
import { features } from '@/data/schoolData';

// Map feature icon strings to components
const iconMap = {
  'book': Book,
  'award': Award,
  'users': Users,
  'home': Home,
  'laptop': Laptop
};

export default function Features() {
  return (
    <section className="py-16 bg-[#556B2F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#FFFFFF" d="M45.9,-58.3C57.9,-49.2,64.7,-33.1,67.9,-16.3C71.1,0.5,70.7,17.9,63.3,31.4C56,44.8,41.9,54.3,26.8,60.3C11.7,66.4,-4.4,69.1,-19.7,65.6C-35.1,62.1,-49.5,52.4,-60.1,38.4C-70.6,24.5,-77.2,6.3,-73.5,-9.4C-69.9,-25,-56,-38.1,-41.7,-46.5C-27.3,-54.9,-12.4,-58.7,3.1,-62.6C18.6,-66.4,33.9,-67.3,45.9,-58.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Why Choose Our School
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Kiage Tumaini Boys High School provides a character-focused, values-driven education through a comprehensive educational program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Items */}
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={feature.id}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:-translate-y-1"
              >
                <div className="h-14 w-14 bg-[#800000] text-white rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-90">
                  {feature.description}
                </p>
              </div>
            );
          })}
          
          {/* Learn More Box */}
          <div className="bg-[#800000] rounded-xl p-6 flex items-center justify-center">
            <Link href="/about#features" className="flex flex-col items-center group">
              <span className="text-xl font-bold mb-2 group-hover:underline">Learn More About Our Features</span>
              <svg 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
