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
    'math-competition': {
      fullContent: `Our students have once again demonstrated exceptional mathematical talent at the Kisii County Mathematics Competition held at Kisii University. The team, comprising Form 3 and Form 4 students, competed against 28 schools from across the county.

Led by our mathematics department head, Mr. Joseph Onyango, our students showcased remarkable problem-solving abilities and mathematical reasoning. The competition tested students in various areas including algebra, geometry, calculus, and mathematical logic through both written exams and a fast-paced quiz round.

Our school emerged as the overall winner, with Kelvin Nyamweya of Form 4 East earning recognition as the top individual performer. This achievement highlights the effectiveness of our mathematics curriculum and the dedicated work of both our teaching staff and students.

"The victory is a testament to hours of preparation and the strong mathematical foundation we strive to build at Kiage Tumaini," said Mr. Onyango. "These competitions help our students apply theoretical knowledge to complex problems while developing crucial competitive skills."

The school administration has congratulated the team and announced plans to represent the county at the regional competition next term. This success aligns with our school's commitment to excellence in STEM education and preparing students for future careers in science, technology, engineering, and mathematics.`,
      extraImages: [
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464344009_8534882446600279_5882791894603496916_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFJ-TBvVTZYjHVZPC6qThG09apqlIUBMsD1qmqUhQEywFGLJLnVXTaLYW3Pi8vmvCKYF6haeay_0G-XjL6cS-A3&_nc_ohc=4p9uP7zdygcQ7kNvwGuQrCq&_nc_oc=AdkPe9dr6wk5_E1IKi8SVjCOJyHdlpgAShFbupVi_zyg-yjXoqGVCzgoOYs9P0b-gAk&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=RCNIlFkHBxTDWh2Eu7VPcw&oh=00_AfFEFofEjGtQIgTEtMR_QphBG_ekrKPWDZqq9hIxzwrlFw&oe=68018B6C",
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464241383_8534882949933562_9213784853505358335_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHiQB6XZm578jDjoKEG2iR8micO20BMqdKaJw7bQEyp0hi_vUMrsRnw2MSU4sx-_2lE5CsLOLshlUdpYfDClPOu&_nc_ohc=7WH1_OWJ-wkQ7kNvwGmRl6A&_nc_oc=AdnXzEQO6358KDosjpDzPxpB_Wm34e_KgYdSYM-eMiq5PwJfqDLdHK-QKqE1s0rUyms&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=tF93GHPvo9th3kj_wNc5Mw&oh=00_AfFb3rZ1dkJUTvYlIPiOJrCxVNLrc8lQWCwx6p7QbS8oxQ&oe=68018B56"
      ]
    },
    'science-lab': {
      fullContent: `We are proud to announce our participation in the upcoming 2025 National Secondary School Sports Competition that will begin in Term 2. 

Our school will be competing in multiple sporting categories including football, volleyball, basketball, rugby, athletics, and swimming. This year, we have intensified our training programs to prepare our students for this prestigious national competition.

Under the guidance of our sports department led by Mr. David Machoka, our teams have been training rigorously during term breaks and after school hours. The school has also invested in new sports equipment and improved our training facilities to support our athletes.

"Our focus has been not just on physical training but also on mental preparation, teamwork, and sportsmanship," explains Coach Machoka. "We believe that sports education is integral to developing well-rounded students who excel both academically and in extracurricular activities."

Last year, our school performed exceptionally well in athletics and basketball, reaching the national finals. This year, we aim to achieve even better results across all sporting categories.

The school administration encourages all parents and alumni to support our teams during these upcoming competitions. A detailed schedule of matches and events will be shared closer to the start of Term 2.

Let's rally behind our athletes as they prepare to represent Kiage Tumaini on the national stage!`,
      extraImages: [
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464270956_8534882233266967_862136308672317374_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEoy7RTysyiGKbJcfQHSvNJoX8rjHuUlWChfyuMe5SVYDkp81A6FQJBf8eNR5H1b-F_ANe5VglGaJ9EhP8G6a9b&_nc_ohc=xqeqXkCAZIEQ7kNvwFRY8cq&_nc_oc=Adl4O3BM7CvddDFc_mzshGXOafG4dOVfUJoMzdH0UHwxXWFUBM34LZdbeWC6eIeCr7E&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4Lh26k6wiWRTvkpY8QWUyw&oh=00_AfHzH2yzcNuAQnHJNmoL071K0BZdMVpsALQ4lBjZqYlVeg&oe=68018F2B",
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464270956_8534882233266967_862136308672317374_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEoy7RTysyiGKbJcfQHSvNJoX8rjHuUlWChfyuMe5SVYDkp81A6FQJBf8eNR5H1b-F_ANe5VglGaJ9EhP8G6a9b&_nc_ohc=xqeqXkCAZIEQ7kNvwFRY8cq&_nc_oc=Adl4O3BM7CvddDFc_mzshGXOafG4dOVfUJoMzdH0UHwxXWFUBM34LZdbeWC6eIeCr7E&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4Lh26k6wiWRTvkpY8QWUyw&oh=00_AfHzH2yzcNuAQnHJNmoL071K0BZdMVpsALQ4lBjZqYlVeg&oe=68018F2B"
      ]
    },
    'debate-competition': {
      fullContent: `The Kiage Tumaini High School Debate Team has made us proud with their outstanding performance at the Regional Debate Championship held last weekend at Nyamira Boys High School.

Our team of six students from Forms 3 and 4 demonstrated exceptional critical thinking, research skills, and public speaking abilities as they debated complex topics ranging from international politics to environmental conservation and technological ethics.

The competition, which brought together 18 schools from the wider Kisii and Nyamira regions, was organized by the Kenya Secondary Schools Debate Association. After three intensive preliminary rounds, our team advanced to the semifinals where they presented compelling arguments on the topic "Social media does more harm than good to today's teenagers."

Their well-researched points, logical argumentation, and eloquent delivery impressed the panel of judges, earning them a place in the finals against the defending champions from St. Joseph's Academy. In a closely contested final round, our team emerged victorious, debating the motion "Economic development should take precedence over environmental conservation in developing nations."

Team captain, Kevin Omondi, was named Best Speaker of the tournament for her outstanding articulation and rebuttal skills. The team was coached by Ms. Beatrice Nyaboke from our Languages Department, who has been instrumental in developing the school's debate program over the past three years.

"Debate is not just about winning arguments—it's about learning to think critically, research thoroughly, and express ideas clearly and persuasively," said Ms. Nyaboke. "These are skills that will serve our students well throughout their academic and professional lives."

The team will now represent our region at the National Debate Championship scheduled for July in Nairobi. We congratulate our debate team on this remarkable achievement and wish them the best as they prepare for the national competition.`,
      extraImages: [
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464207497_8534882236600300_2460176837166733438_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEWLX5YdZL0RFeTXRFITGqU_Hvfm7SFAYD8e9-btIUBgGgUbHwe4qna_8M6RRHy_c3tQDAxpfmAqlXFJkzqICe9&_nc_ohc=PqWbZVv_7e8Q7kNvwFtIXBa&_nc_oc=AdkHuXvY9s1IafrdKCRBf57PtzE0DTgqbGu7DKiU18JWxPmtdI_L-0NFvOwRKi18XuA&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=-d4AWY5nzxXI4cFgSL5R2g&oh=00_AfGIpTJ3MSM4r5oZoc74WJ3GwYoxHQfgGLHh97U0Reu6BQ&oe=6801707E",
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464278507_8534882213266969_6052500488332855631_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeF7iflAGklIbkVCblLFUFfPl0_XemC8XdKXT9d6YLxd0kLiH1IjbNZ0z97f9dMiZbS1jMeRkP8lNjnnE2ck-zVu&_nc_ohc=RM4cr_jDNE4Q7kNvwGA2Elr&_nc_oc=Adn18g9XM5c1njL1dX3DCN6E_cAXhvnXeEFGB5ftHfLeXv1FZfP0tTU_a0_alDotwuM&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=5IokcNVVbsyi_N-oQZvEWw&oh=00_AfEvmJk1w2n-ObQTWPaYkZ9CWGNGvZvmJ1cApb2EMmdoog&oe=68019CC4"
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