import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountUp from '@/components/CountUp';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { aboutContent, statistics } from '@/data/schoolData';

export default function About() {
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="/images/director1.jpg" 
              alt="Director of Kiage Tumaini Boys High School" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#556B2F] mb-4">
              Welcome to Kiage Tumaini Boys High School
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#556B2F] mb-3">Motto</h3>
              <p className="text-gray-700 mb-4">{aboutContent.motto}</p>
              
              <h3 className="text-xl font-bold text-[#556B2F] mb-3">Vision</h3>
              <p className="text-gray-700 mb-4">{aboutContent.vision}</p>
              
              <h3 className="text-xl font-bold text-[#556B2F] mb-3">Core Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                {aboutContent.coreValues.map((value, index) => (
                  <li key={index} className="text-gray-700">{value}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#556B2F] mb-3">Our History</h3>
              <p className="text-gray-700 mb-3">{aboutContent.history.establishment}</p>
              <div className="space-y-3">
                {aboutContent.history.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <span className="font-bold text-[#800000] mr-3">{milestone.year}</span>
                    <span className="text-gray-700">{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {aboutContent.additionalInfo}
            </p>
            <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F] text-white shadow-md">
              <Link href="/about" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {statistics.map((stat) => (
            <div 
              key={stat.id}
              className={cn(
                "relative bg-white rounded-xl p-6 shadow-lg border-t-4 text-center transform transition-transform hover:-translate-y-1",
                stat.color === 'primary' ? "border-[#556B2F]" : "border-[#800000]"
              )}
            >
              <h3 className={cn(
                "text-5xl font-bold mb-2",
                stat.color === 'primary' ? "text-[#556B2F]" : "text-[#800000]"
              )}>
                {statsVisible ? (
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                  />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to conditionally join class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
