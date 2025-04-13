import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { heroSlides } from '@/data/schoolData';
import { scrollToElement } from '@/lib/utils';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Function to go to a specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 h-[80vh] max-h-[700px]">
      {/* Carousel Slides */}
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt={slide.title}
            className="object-cover object-center w-full h-full"
          />
          
          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl animate-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 drop-shadow-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {index === 0 && (
                    <>
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#800000] hover:bg-[#660000] text-white shadow-lg"
                      >
                        <Link href="/contact">{slide.buttonText}</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="secondary" 
                        className="bg-white text-[#556B2F] hover:bg-gray-100 shadow-lg"
                      >
                        <Link href="/admissions">Apply Now</Link>
                      </Button>
                    </>
                  )}
                  {index > 0 && (
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "shadow-lg",
                        slide.buttonVariant === 'primary' 
                          ? "bg-[#556B2F] hover:bg-[#455B1F] text-white" 
                          : "bg-[#800000] hover:bg-[#660000] text-white"
                      )}
                    >
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Controls/Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button 
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-opacity",
              index === currentSlide 
                ? "bg-white opacity-100" 
                : "bg-white opacity-50 hover:opacity-75"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <button 
          onClick={() => scrollToElement('about')} 
          className="flex flex-col items-center"
          aria-label="Scroll down to about section"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
