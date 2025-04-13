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
              src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t1.6435-9/45288703_1950747978347125_3936876227352068096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoWCXCi7EGUO5qGeJ3OzYP9F6HSlbGIuf0XodKVsYi59JuSokirfcUilcWQVXRFkwOZPPTNHgWF6G6Ph2nRMVH&_nc_ohc=i4TTkTprKU8Q7kNvwHFhZHZ&_nc_oc=AdkNiF-Q2ZqVa_4BfE56BCOjzZNf_ni5lqfga483PUDOwjB1vMEIzDZCPqfh9_flReY&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=L6kN2a2RVyj7mcqprzQg5g&oh=00_AfEJTQF9yyMyoMw8z9IhM-5E9W0pGcsHSfcYsH4x6t90Cg&oe=68230BA1" 
              alt="Kiage Tumaini Boys High School students in classroom" 
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
