import { Check } from 'lucide-react';
import { leadingSchoolContent, benefits } from '@/data/schoolData';

export default function LeadingSchool() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src={leadingSchoolContent.image}
              alt="Real World Experiences In Education" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-4">
              {leadingSchoolContent.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {leadingSchoolContent.description}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our students benefit from the following:
            </p>
            
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-start">
                  <Check className="text-[#800000] h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
