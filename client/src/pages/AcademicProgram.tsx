import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Book, Clock, User, Award, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/schoolData';
import CallToAction from '@/components/CallToAction';

export default function AcademicProgram() {
  // Extract program from route
  const [, params] = useRoute('/academics/:program');
  const programSlug = params?.program || '';
  
  // Find the program
  const program = programs.find(item => {
    // Extract slug from link
    const linkParts = item.link.split('/');
    const itemSlug = linkParts[linkParts.length - 1];
    return itemSlug === programSlug;
  });

  // Update page title
  useEffect(() => {
    document.title = program 
      ? `${program.title} - Kiage Tumaini Boy's High School` 
      : "Academic Programs - Kiage Tumaini Boy's High School";
  }, [program]);

  // Program-specific content mapping
  const programDetails: Record<string, {
    overview: string;
    curriculum: string[];
    facilities: string[];
    achievements: string[];
    staff: { name: string; position: string; qualification: string }[];
    schedule: { day: string; activities: string }[];
  }> = {
    'junior': {
      overview: "Our Junior High School program (Form 1 and Form 2) focuses on building a solid academic foundation while developing essential life skills and character values. During these formative years, students are introduced to a broad curriculum that prepares them for senior high school while fostering critical thinking, collaboration, and creativity.",
      curriculum: [
        "Mathematics (Algebra, Geometry, Statistics)",
        "Languages (English, Kiswahili, French optional)",
        "Sciences (Biology, Chemistry, Physics)",
        "Humanities (History, Geography, Religious Education)",
        "Creative Arts and Physical Education",
        "Computer Studies and Digital Literacy",
        "Life Skills and Career Guidance"
      ],
      facilities: [
        "Modern classrooms with digital learning tools",
        "Junior science laboratory",
        "Computer lab with latest software",
        "Library with age-appropriate resources",
        "Sports facilities including basketball court and football field"
      ],
      achievements: [
        "Top 10 ranking in Kisii County Junior Mathematics Competition for the past 5 years",
        "Winners of the Regional Junior Science Fair 2024",
        "Outstanding participation in National Junior Essay Writing Competition",
        "Recognition for community service initiatives led by junior students"
      ],
      staff: [
        { name: "Mr. Charles Omondi", position: "Junior School Coordinator", qualification: "M.Ed. in Education Leadership" },
        { name: "Ms. Faith Nyaboke", position: "Junior Mathematics Head", qualification: "B.Ed. in Mathematics" },
        { name: "Mr. James Mwangi", position: "Junior Sciences Coordinator", qualification: "B.Sc. in Biology, PGDE" },
        { name: "Mrs. Sarah Otieno", position: "Languages Department", qualification: "B.Ed. in English and Literature" }
      ],
      schedule: [
        { day: "Monday - Friday", activities: "7:00 AM - 4:30 PM: Academic classes with breaks" },
        { day: "Monday, Wednesday", activities: "4:30 PM - 5:30 PM: Club activities and societies" },
        { day: "Tuesday, Thursday", activities: "4:30 PM - 5:30 PM: Sports and physical activities" },
        { day: "Friday", activities: "2:30 PM - 4:00 PM: Life skills and mentorship program" },
        { day: "Saturday", activities: "8:00 AM - 12:00 PM: Study time and remedial classes" }
      ]
    },
    'senior': {
      overview: "Our Senior High School program (Form 3 and Form 4) builds on the foundation established in junior years, focusing on specialization and preparation for KCSE examinations. Students refine their academic focus while developing leadership skills, critical thinking abilities, and a deeper understanding of their chosen subject areas. Our goal is to prepare students not only for academic success but also for higher education and future careers.",
      curriculum: [
        "Compulsory subjects: Mathematics, English, Kiswahili, Sciences (Biology, Chemistry, Physics)",
        "Humanities: History, Geography, Religious Education, Business Studies",
        "Technical subjects: Computer Studies, Agriculture",
        "Optional subjects based on student specialization",
        "Career guidance and university preparation",
        "Research projects and extended essays",
        "Life skills and leadership training"
      ],
      facilities: [
        "Advanced science laboratories for Biology, Chemistry and Physics",
        "Computer lab with programming and design software",
        "Career resource center",
        "Specialized library collections for advanced studies",
        "Study halls for focused independent work"
      ],
      achievements: [
        "Consistently ranking among top 20 schools nationally in KCSE results",
        "Over 75% of graduates qualify for university admission",
        "Multiple national awards in science and mathematics competitions",
        "Recognition for debate and public speaking achievements",
        "Strong representation in regional sports competitions"
      ],
      achievements: [
        "Consistently ranking among top 20 schools nationally in KCSE results",
        "Over 75% of graduates qualify for university admission",
        "Multiple national awards in science and mathematics competitions",
        "Recognition for debate and public speaking achievements",
        "Strong representation in regional sports competitions"
      ],
      schedule: [
        { day: "Monday - Friday", activities: "7:00 AM - 5:00 PM: Academic classes with breaks" },
        { day: "Monday, Wednesday", activities: "5:00 PM - 6:30 PM: Club activities and leadership training" },
        { day: "Tuesday, Thursday", activities: "5:00 PM - 6:30 PM: Sports and recreational activities" },
        { day: "Friday", activities: "3:00 PM - 5:00 PM: Career guidance and mentorship" },
        { day: "Saturday", activities: "8:00 AM - 1:00 PM: Study time and advanced preparation for KCSE" },
        { day: "Sunday", activities: "3:00 PM - 5:00 PM: Revision and preparation for the week ahead" }
      ]
    },
    'boarding': {
      overview: "Our boarding program provides a supportive community environment that fosters independence, discipline, and academic focus. Students live in comfortable, well-supervised dormitories with access to all school facilities outside regular class hours. The boarding experience helps students develop essential life skills, build lasting friendships, and benefit from additional academic support through evening study sessions and weekend activities.",
      curriculum: [
        "Regular academic curriculum plus extended evening study sessions",
        "Weekend enrichment activities and specialized workshops",
        "Life skills training (time management, personal organization, social skills)",
        "Character development programs",
        "Supervised recreation and physical activity"
      ],
      facilities: [
        "Modern dormitories with dedicated house parents",
        "Common rooms for socializing and recreation",
        "Dining hall serving nutritious meals",
        "Study halls for evening preparation",
        "24-hour security and healthcare services",
        "Laundry facilities",
        "Weekend recreational areas"
      ],
      achievements: [
        "Boarding students consistently achieve higher average KCSE scores",
        "Strong performance in inter-school competitions due to additional practice time",
        "Development of self-discipline reflected in lower disciplinary issues",
        "Greater participation in leadership roles and community service",
        "Strong alumni network and boarding tradition spanning generations"
      ],
      achievements: [
        "Boarding students consistently achieve higher average KCSE scores",
        "Strong performance in inter-school competitions due to additional practice time",
        "Development of self-discipline reflected in lower disciplinary issues",
        "Greater participation in leadership roles and community service",
        "Strong alumni network and boarding tradition spanning generations"
      ],
      schedule: [
        { day: "Weekdays", activities: "5:00 AM: Wake up, personal preparation\n6:00 AM: Breakfast\n7:00 AM - 4:30 PM: Regular school day\n5:00 PM - 6:00 PM: Sports and recreation\n6:00 PM: Dinner\n7:00 PM - 9:30 PM: Evening study session\n10:00 PM: Lights out" },
        { day: "Saturday", activities: "6:00 AM: Wake up\n7:00 AM: Breakfast\n8:00 AM - 10:00 AM: General cleaning\n10:00 AM - 12:00 PM: Supervised study\n12:30 PM: Lunch\n2:00 PM - 5:00 PM: Club activities and recreation\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Entertainment (movies, talent shows)\n10:30 PM: Lights out" },
        { day: "Sunday", activities: "7:00 AM: Wake up\n8:00 AM: Breakfast\n9:00 AM - 12:00 PM: Religious services (optional)\n12:30 PM: Lunch\n2:00 PM - 4:00 PM: Free time\n4:00 PM - 6:00 PM: Preparation for the week\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Evening study session\n10:00 PM: Lights out" }
      ]
    }
  };

      schedule: [
        { day: "Weekdays", activities: "5:00 AM: Wake up, personal preparation\n6:00 AM: Breakfast\n7:00 AM - 4:30 PM: Regular school day\n5:00 PM - 6:00 PM: Sports and recreation\n6:00 PM: Dinner\n7:00 PM - 9:30 PM: Evening study session\n10:00 PM: Lights out" },
        { day: "Saturday", activities: "6:00 AM: Wake up\n7:00 AM: Breakfast\n8:00 AM - 10:00 AM: General cleaning\n10:00 AM - 12:00 PM: Supervised study\n12:30 PM: Lunch\n2:00 PM - 5:00 PM: Club activities and recreation\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Entertainment (movies, talent shows)\n10:30 PM: Lights out" },
        { day: "Sunday", activities: "7:00 AM: Wake up\n8:00 AM: Breakfast\n9:00 AM - 12:00 PM: Religious services (optional)\n12:30 PM: Lunch\n2:00 PM - 4:00 PM: Free time\n4:00 PM - 6:00 PM: Preparation for the week\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Evening study session\n10:00 PM: Lights out" }
      ]
    }
  };

  // If program not found, show a not found message
  if (!program) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-[#556B2F] mb-4">Program Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the academic program you're looking for.</p>
            <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F]">
              <Link href="/academics">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Academics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Extract slug for content mapping
  const linkParts = program.link.split('/');
  const itemSlug = linkParts[linkParts.length - 1];
  const details = programDetails[itemSlug] || {
    overview: "Program details coming soon.",
    curriculum: [],
    facilities: [],
    achievements: [],
    staff: [],
    schedule: []
  };

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{program.title}</h1>
            <p className="max-w-2xl text-lg">
              {program.ageRange}
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="flex items-center mb-4">
            <Link href="/academics">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Academics
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6">Program Overview</h2>
                  <Card className="overflow-hidden mb-8">
                    <div className="h-80 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700">{details.overview}</p>
                  </div>
                </div>
                
                {/* Curriculum */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                    <Book className="mr-2 h-6 w-6 text-[#800000]" />
                    Curriculum
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {details.curriculum.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 bg-[#800000] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Facilities */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                    <School className="mr-2 h-6 w-6 text-[#800000]" />
                    Facilities
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {details.facilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 bg-[#800000] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Achievements */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                    <Award className="mr-2 h-6 w-6 text-[#800000]" />
                    Achievements
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {details.achievements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 bg-[#800000] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Staff */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                    <User className="mr-2 h-6 w-6 text-[#800000]" />
                    Key Staff
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.staff.map((person, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-gray-800">{person.name}</h3>
                          <p className="text-[#800000]">{person.position}</p>
                          <p className="text-gray-600 text-sm">{person.qualification}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                {/* Sidebar with schedule */}
                <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-[#800000]" />
                  Schedule
                </h2>
                <Card className="mb-8">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {details.schedule.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <h3 className="font-bold text-gray-800 mb-1">{item.day}</h3>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{item.activities}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Application Call to Action */}
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-[#556B2F] mb-3">Interested in this Program?</h3>
                    <p className="text-gray-600 mb-4">
                      We invite you to apply or contact our admissions office for more information about the {program.title} program.
                    </p>
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-[#800000] hover:bg-[#660000]">
                        <Link href="/admissions">
                          Apply for Admission
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-[#556B2F] text-[#556B2F]">
                        <Link href="/contact">
                          Contact Admissions
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}