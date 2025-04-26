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
    'form-one': {
      overview: "Our Form One program marks the beginning of secondary education, focusing on building a strong academic foundation while developing essential life skills. Students are introduced to a comprehensive curriculum that prepares them for the challenges of high school while fostering critical thinking, collaboration, and personal growth.",
      curriculum: [
        "Core Mathematics (Algebra, Geometry, Statistics)",
        "Languages (English, Kiswahili)",
        "Sciences (Biology, Chemistry, Physics)",
        "Humanities (History, Geography, Religious Education)",
        "Creative Arts and Physical Education",
        "Computer Studies and Digital Literacy",
        "Life Skills and Career Guidance"
      ],
      schedule: [
        { day: "Monday - Friday", activities: "7:00 AM - 4:30 PM: Academic classes with breaks" },
        { day: "Monday, Wednesday", activities: "4:30 PM - 5:30 PM: Club activities and societies" },
        { day: "Tuesday, Thursday", activities: "4:30 PM - 5:30 PM: Sports and physical activities" },
        { day: "Friday", activities: "2:30 PM - 4:00 PM: Life skills and mentorship program" },
        { day: "Saturday", activities: "8:00 AM - 12:00 PM: Study time and remedial classes" }
      ],
      facilities: [],
      achievements: [],
      staff: []
    },
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
      staff: [
        { name: "Dr. Peter Maina", position: "Senior School Coordinator", qualification: "Ph.D. in Education" },
        { name: "Mr. David Ochieng", position: "Mathematics Department Head", qualification: "M.Sc. in Mathematics" },
        { name: "Ms. Grace Wambui", position: "Sciences Coordinator", qualification: "M.Sc. in Chemistry" },
        { name: "Mr. John Kamau", position: "Languages Department Head", qualification: "M.A. in English Literature" }
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
      schedule: [
        { day: "Weekdays", activities: "5:00 AM: Wake up, personal preparation\n6:00 AM: Breakfast\n7:00 AM - 4:30 PM: Regular school day\n5:00 PM - 6:00 PM: Sports and recreation\n6:00 PM: Dinner\n7:00 PM - 9:30 PM: Evening study session\n10:00 PM: Lights out" },
        { day: "Saturday", activities: "6:00 AM: Wake up\n7:00 AM: Breakfast\n8:00 AM - 10:00 AM: General cleaning\n10:00 AM - 12:00 PM: Supervised study\n12:30 PM: Lunch\n2:00 PM - 5:00 PM: Club activities and recreation\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Entertainment (movies, talent shows)\n10:30 PM: Lights out" },
        { day: "Sunday", activities: "7:00 AM: Wake up\n8:00 AM: Breakfast\n9:00 AM - 12:00 PM: Religious services (optional)\n12:30 PM: Lunch\n2:00 PM - 4:00 PM: Free time\n4:00 PM - 6:00 PM: Preparation for the week\n6:00 PM: Dinner\n7:00 PM - 9:00 PM: Evening study session\n10:00 PM: Lights out" }
      ]
    },
    'form-four': {
      overview: "Our Form Four program is the culmination of secondary education, focusing on KCSE examination preparation and university readiness. Students receive intensive academic support, career guidance, and leadership development to ensure they are well-prepared for their final examinations and future academic pursuits.",
      curriculum: [
        "Core Subjects: Mathematics, English, Kiswahili",
        "Sciences: Biology, Chemistry, Physics",
        "Humanities: History, Geography, Religious Education",
        "Technical Subjects: Computer Studies, Agriculture",
        "Business Studies and Economics",
        "Advanced Mathematics and Sciences for University Preparation",
        "Career Guidance and University Application Support",
        "Research Projects and Extended Essays",
        "Leadership and Life Skills Training"
      ],
      schedule: [
        { day: "Monday - Friday", activities: "6:30 AM - 5:00 PM: Intensive academic classes and revision sessions" },
        { day: "Monday, Wednesday", activities: "5:00 PM - 6:30 PM: Specialized subject tutorials and group discussions" },
        { day: "Tuesday, Thursday", activities: "5:00 PM - 6:30 PM: Practical sessions and laboratory work" },
        { day: "Friday", activities: "3:00 PM - 5:00 PM: Career guidance and university preparation workshops" },
        { day: "Saturday", activities: "8:00 AM - 1:00 PM: Mock examinations and intensive revision" },
        { day: "Sunday", activities: "3:00 PM - 5:00 PM: Group study and peer learning sessions" }
      ],
      facilities: [],
      achievements: [],
      staff: []
    },
    'form-three': {
      overview: "Our Form Three program builds on the foundation established in Form Two, focusing on advanced academic preparation and specialization. Students begin to refine their subject choices while maintaining a strong foundation in core subjects. The program emphasizes critical thinking, research skills, and practical application of knowledge.",
      curriculum: [
        "Core Subjects: Mathematics, English, Kiswahili",
        "Sciences: Biology, Chemistry, Physics",
        "Humanities: History, Geography, Religious Education",
        "Technical Subjects: Computer Studies, Agriculture",
        "Business Studies and Economics",
        "Advanced Mathematics and Sciences",
        "Research Methodology and Project Work",
        "Career Guidance and Subject Specialization",
        "Leadership and Life Skills Development"
      ],
      schedule: [
        { day: "Monday - Friday", activities: "7:00 AM - 4:30 PM: Academic classes and practical sessions" },
        { day: "Monday, Wednesday", activities: "4:30 PM - 5:30 PM: Subject tutorials and group discussions" },
        { day: "Tuesday, Thursday", activities: "4:30 PM - 5:30 PM: Laboratory work and practical demonstrations" },
        { day: "Friday", activities: "2:30 PM - 4:00 PM: Research projects and career guidance" },
        { day: "Saturday", activities: "8:00 AM - 12:00 PM: Specialized workshops and revision sessions" },
        { day: "Sunday", activities: "3:00 PM - 5:00 PM: Group study and peer learning" }
      ],
      facilities: [],
      achievements: [],
      staff: []
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
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img 
                src="/images/classroom2.jpg"
                alt="Form Three Classroom at Kiage Tumaini Boys High School"
                className="w-full h-auto rounded-lg shadow-xl mb-6"
              />
              <img 
                src="/images/lab1.jpg"
                alt="Form Three Science Laboratory"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {details.overview}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#556B2F] mb-4">Curriculum</h3>
                <ul className="space-y-2">
                  {details.curriculum.map((subject, index) => (
                    <li key={index} className="flex items-start">
                      <Book className="text-[#800000] h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#556B2F] mb-4">School Schedule</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Schedule Images */}
                  <div className="md:w-1/2 space-y-4">
                    <img 
                      src="/images/students5.jpg"
                      alt="Form Three Study Sessions"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <img 
                      src="/images/students6.jpg"
                      alt="Form Three Group Discussions"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                  </div>
                  
                  {/* Schedule Content */}
                  <div className="md:w-1/2">
                    <ul className="space-y-3">
                      {details.schedule.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="text-[#800000] h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-800">{item.day}</span>
                            <p className="text-gray-700">{item.activities}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#556B2F] mb-4">Interested in this Program?</h3>
                <p className="text-gray-700 mb-4">
                  We invite you to apply or contact our admissions office for more information about the Form Three program.
                </p>
                <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F]">
                  <Link href="/contact">
                    Contact Admissions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}