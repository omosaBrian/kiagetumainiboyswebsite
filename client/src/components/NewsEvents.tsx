import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { newsItems, upcomingEvents } from '@/data/schoolData';
import { formatDate } from '@/lib/utils';

type TabType = 'news' | 'events';

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<TabType>('news');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-3">
            Latest News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our school's activities, achievements, and upcoming events.
          </p>
        </div>
        
        {/* Tabs */}
        <Tabs 
          defaultValue="news" 
          value={activeTab} 
          onValueChange={(v) => setActiveTab(v as TabType)}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="border-b border-gray-200 bg-transparent">
              <TabsTrigger 
                value="news" 
                className="px-4 py-2 data-[state=active]:text-[#800000] data-[state=active]:border-b-2 data-[state=active]:border-[#800000] font-medium"
              >
                Latest News
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="px-4 py-2 data-[state=active]:text-[#800000] data-[state=active]:border-b-2 data-[state=active]:border-[#800000] font-medium"
              >
                Upcoming Events
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* News Tab Content */}
          <TabsContent value="news" className="animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <Card key={news.id} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-[#556B2F] font-semibold mb-2">{formatDate(news.date)}</div>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link href={news.link} className="inline-flex items-center text-[#800000] font-medium hover:text-[#600000]">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Events Tab Content */}
          <TabsContent value="events" className="animate-in fade-in-0 zoom-in-95 duration-300">
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-[#556B2F] mb-6">Upcoming Events</h3>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-5 border-b border-gray-200">
                      <div className={`${
                        event.color === 'primary' ? 'bg-[#556B2F]' : 'bg-[#800000]'
                      } text-white rounded-lg p-3 text-center min-w-[80px]`}>
                        <span className="block text-2xl font-bold">{event.day}</span>
                        <span className="block text-sm">{event.month}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" /> {event.time}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" /> {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F] text-white shadow">
                    <Link href="/news-events?tab=events" className="flex items-center">
                      View All Events
                      <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-[#800000] hover:bg-[#660000] text-white shadow-md">
            <Link href="/news-events" className="flex items-center">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
