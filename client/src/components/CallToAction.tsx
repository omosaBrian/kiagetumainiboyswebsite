import { Link } from 'wouter';
import { Calendar, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { callToActionContent } from '@/data/schoolData';

export default function CallToAction() {
  return (
    <section className="py-16 bg-[#800000] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          {callToActionContent.title}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
          {callToActionContent.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {callToActionContent.buttons.map((button, index) => (
            <Button
              key={index}
              asChild
              size="lg"
              variant={button.variant === 'white' ? 'secondary' : 'default'}
              className={
                button.variant === 'white' 
                  ? "bg-white text-[#800000] hover:bg-gray-100 shadow-lg" 
                  : "bg-[#556B2F] hover:bg-[#455B1F] text-white shadow-lg"
              }
            >
              <Link href={button.link} className="flex items-center">
                {index === 0 ? <Calendar className="mr-2 h-5 w-5" /> : <UserPlus className="mr-2 h-5 w-5" />}
                {button.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
