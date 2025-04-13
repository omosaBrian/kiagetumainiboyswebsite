import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { resultSections } from '@/data/schoolData';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Results() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    once: true
  });
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-3">
            2023 Academic Results
          </h2>
        </div>
        
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {resultSections.map((section) => (
            <Card key={section.id} className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-[#800000] mb-6 text-center">{section.title}</h3>
                
                <div className="space-y-6">
                  {section.categories.map((category) => (
                    <div key={category.id} className="relative pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-lg font-semibold inline-block text-[#556B2F]">{category.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold inline-block text-[#556B2F]">{category.percentage}%</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div 
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                            category.color === 'primary' ? 'bg-[#556B2F]' : 'bg-[#800000]'
                          } transition-all duration-1000`}
                          style={{ 
                            width: isVisible ? `${category.percentage}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
