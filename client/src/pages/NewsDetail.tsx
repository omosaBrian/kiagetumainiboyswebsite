
import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { newsItems } from '@/data/schoolData';
import { formatDate } from '@/lib/utils';

export default function NewsDetail() {
  // Extract slug from route
  const [, params] = useRoute('/news-events/:slug');
  const slug = params?.slug || '';
  
  // Find the news item
  const newsItem = newsItems.find(item => {
    // Extract slug from link
    const linkParts = item.link.split('/');
    const itemSlug = linkParts[linkParts.length - 1];
    return itemSlug === slug;
  });

  // Update page title
  useEffect(() => {
    document.title = newsItem 
      ? `${newsItem.title} - Kiage Tumaini Boy's High School` 
      : "News - Kiage Tumaini Boy's High School";
  }, [newsItem]);

  // If news item not found, show a not found message
  if (!newsItem) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-[#556B2F] mb-4">News Article Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the news article you're looking for.</p>
            <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F]">
              <Link href="/news-events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Content for each specific news item
  const newsContentMap: Record<string, { fullContent?: string, extraImages?: string[] }> = {
    'Gallery': {
      extraImages: [
        "attached_assets/public/images/sports1.jpg",
        "attached_assets/public/images/trip1.jpg"
      ]
    },
    'science-fair-success': {
      extraImages: [
        "attached_assets/public/images/trip2.jpg",
        "attached_assets/public/images/trip3.jpg"
      ]
    },
    'university-partnership': {
      extraImages: [
        "attached_assets/public/images/trip6.jpg",
        "attached_assets/public/images/trip5.jpg"
      ]
      ]
    },
    'sports-day-2023': {
      extraImages: [
        "attached_assets/public/images/sports2.jpg",
        "/images/sports2.jpg"
      ]
    },
    '12th-anniversary-celebration': {
      extraImages: [
        "/images/trip4.jpg",
        "/images/trip5.jpg"
      ]
    }
  };

  // Extract slug for content mapping
  const linkParts = newsItem.link.split('/');
  const itemSlug = linkParts[linkParts.length - 1];
  const newsContent = newsContentMap[itemSlug] || { 
    fullContent: "Full article content will be available soon." 
  };

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{newsItem.title}</h1>
            <p className="text-lg opacity-90">{formatDate(newsItem.date)}</p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="flex items-center mb-4">
            <Link href="/news-events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden mb-8">
              <div className="h-96 overflow-hidden">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            <div className="prose prose-lg max-w-none">
              {newsContent.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {newsContent.extraImages && (
              <div className="mt-10">
                <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsContent.extraImages.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="h-64">
                        <img 
                          src={image} 
                          alt={`${newsItem.title} - image ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-[#800000] hover:bg-[#660000]">
                <Link href="/news-events">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
