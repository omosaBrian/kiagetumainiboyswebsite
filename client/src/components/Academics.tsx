import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { programs } from '@/data/schoolData';
import { cn } from '@/lib/utils';

export default function Academics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-3">
            Academic Stages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:shadow-xl transition-shadow"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge 
                  variant="outline" 
                  className={cn(
                    "inline-block text-sm font-medium px-3 py-1 rounded-full mb-3",
                    program.variant === 'primary' 
                      ? "bg-[#556B2F]/10 text-[#556B2F] border-[#556B2F]/30" 
                      : "bg-[#800000]/10 text-[#800000] border-[#800000]/30"
                  )}
                >
                  {program.ageRange}
                </Badge>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <Link 
                  href={program.link} 
                  className="inline-flex items-center text-[#800000] font-medium hover:text-[#600000]"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
