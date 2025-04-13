import { technologyContent } from '@/data/schoolData';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

export default function Technology() {
  const [ref, isVisible] = useIntersectionObserver({ 
    threshold: 0.1, 
    once: true 
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "flex flex-col md:flex-row gap-10 items-center transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          )}
        >
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-4">
              {technologyContent.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {technologyContent.description}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {technologyContent.additionalInfo}
            </p>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src={technologyContent.image}
              alt="Kiage Tumaini Boys sciences lab" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
