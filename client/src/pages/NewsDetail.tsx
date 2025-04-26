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
  const newsContentMap: Record<string, { fullContent: string, extraImages?: string[] }> = {
    '12th-anniversary-celebration': {
      fullContent: "The school recently celebrated its 12th anniversary with a grand event that recognized the achievements of students, staff, and alumni. The celebration included cultural performances, academic exhibitions, and speeches from distinguished guests. The event highlighted our school's journey of growth and excellence over the past 12 years. It was a moment of pride for our entire school community, celebrating our achievements and looking forward to future successes.",
      extraImages: [
        "/images/students1.jpg",
        "/images/students2.jpg"
      ]
    },
    'science-fair-success': {
      fullContent: "Our students recently participated in the National Science Fair, showcasing their innovative projects and winning several awards. The event was a testament to our commitment to scientific excellence and innovation. Students demonstrated projects ranging from renewable energy solutions to agricultural technology improvements. The success at the science fair highlights our school's dedication to fostering scientific curiosity and practical problem-solving skills among our students.",
      extraImages: [
        "/images/lab1.jpg",
        "/images/students3.jpg"
      ]
    },
    'university-partnership': {
      fullContent: "Kiage Tumaini has established a new partnership with the University of Nairobi to provide academic and research opportunities for our students. This collaboration will offer our students access to university-level resources, mentorship programs, and research opportunities. The partnership aims to bridge the gap between secondary and higher education, preparing our students for successful university careers. This initiative is part of our ongoing commitment to providing the best possible educational opportunities for our students.",
      extraImages: [
        "/images/students4.jpg",
        "/images/students5.jpg"
      ]
    }
  };

  // Extract slug for content mapping
  const linkParts = newsItem.link.split('/');
  const itemSlug = linkParts[linkParts.length - 1];
  const newsContent = newsContentMap[itemSlug] || { 
    fullContent: "Full article content will be available soon.",
    extraImages: []
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
              {(newsContent.fullContent || "Full article content will be available soon.").split('\n\n').map((paragraph, index) => (
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