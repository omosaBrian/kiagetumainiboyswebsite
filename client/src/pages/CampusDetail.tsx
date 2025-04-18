import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, MapPin, Building, Users, Clock, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { campusSection } from '@/data/schoolData';
import CallToAction from '@/components/CallToAction';

export default function CampusDetail() {
  // Extract campus from route
  const [, params] = useRoute('/campuses/:campus');
  const campusSlug = params?.campus || '';
  
  // Update page title
  useEffect(() => {
    document.title = "Campus Facilities - Kiage Tumaini Boy's High School";
  }, []);

  // Campus-specific content mapping
  const campusDetails: Record<string, {
    title: string;
    description: string;
    images: string[];
    location: string;
    established: string;
    facilities: { name: string; description: string }[];
    schedule: { time: string; activity: string }[];
    staff: { name: string; position: string }[];
  }> = {
    'main': {
      title: "Main Campus",
      description: "Our flagship campus features modern classrooms, science laboratories, computer labs, extensive sports facilities, and comfortable boarding accommodations for our senior students. Established in 2005, the Main Campus serves as the primary center for Kiage Tumaini Boy's High School, accommodating Forms 3 and 4 students. Situated on a spacious 15-acre property, the campus provides a conducive environment for academic excellence, character development, and extracurricular activities in a safe, structured setting.",
      images: [
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464299870_8534882636600260_3927743441845293517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGSPd_x8BAVHI-GJrMlIJj8LstUW92TlCsuy1Rb3ZOUKxxE2jSe8N_hsxHyPT8aPTj0EUcWUUAhsiUVIghNAXt-&_nc_ohc=Ua_b22wz-uQQ7kNvwHXn1gB&_nc_oc=Adm1XzHqrTYbxRqc2XTOqfWhQC7KvudeJQ2P25D8gmFdg5sqJf8I5Z_5hNJ7Al--4OY&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=SFhtaQ01ApR51wTDshC7ig&oh=00_AfGI0GsT_xDxPRPTCPHUr_H4lxN6NoO3ouhKnpLzVKEKkA&oe=680198CF",
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464430535_8538625349559322_1049268724463093517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoezw7-O73hSHb2s7_3KHzYAzof8-zGuxgDOh_z7Ma7OwVJEXTMW6qMb6bQO0PMw0Bf4HYcUzLSmr0-mPjiPUS&_nc_ohc=v1fTtCvVhjQQ7kNvwEeHgIe&_nc_oc=Adm_uQiDFGZ-ha-SFMWxa_SzP1E3fF_6HKtpzXcxlYAdiZ1pGBT_bEuaoTzTBdir_W8&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=jNcuUFmlNCEFLmlLytDp1g&oh=00_AfGXTZxuXP8iuiBsMvafPESUz0Mk7bUhpSqGnypCxireEg&oe=68019867",
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464423884_8538992059522651_7933597546618355298_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHBrL8fVzyRquhBU5BTxBjePzFNT883hQU_MU1PzzeFBR9Z6VtOZBP4FRJvR6Ly9nLFkC7I1kqcKPgcRt9Qyxbh&_nc_ohc=OzYklR2EKb0Q7kNvwE-h2RN&_nc_oc=AdnT_8TUrHgS99zppyNPi-QoMI9CeZ7lV_DfCx3uWzooH9L6B8RgprNyJQ02KZdjiQQ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=2awt1rQvFon5JG2kEAqViA&oh=00_AfHgm8oOB5b2WTmgRMiXCKJ6iLzAVZiFS2sbjhgGPeUyyQ&oe=68019D32"
      ],
      location: "Kitutu Chache South, Kisii County, Kenya",
      established: "2005",
      facilities: [
        {
          name: "Academic Facilities",
          description: "modern classrooms. 3 fully-equipped science laboratories (Biology, Chemistry, Physics). 2 computer labs with high-speed internet access. Library with over 10,000 books and digital resources."
        },
        {
          name: "Boarding Facilities",
          description: "4 dormitory blocks accommodating up to 600 students. Each dormitory has dedicated house parents and prefects. Common rooms for recreation and socializing. Modern dining hall serving nutritious meals."
        },
        {
          name: "Sports and Recreation",
          description: ". Football field.Access to Basketball and volleyball courts. Indoor games facility for table tennis and chess."
        },
        {
          name: "Administration",
          description: "Main administration block housing the principal's office, staff room, and conference facilities. Guidance and counseling office. Modern health clinic with qualified nurse."
        },
        {
          name: "Additional Facilities",
          description: "School farm for agricultural studies. Assembly hall with capacity for 800 students. Secure perimeter with 24-hour security personnel."
        }
      ],
      schedule: [
        { time: "5:00 AM", activity: "Wake up bell" },
        { time: "5:00 AM - 6:00 AM", activity: "Personal preparation" },
        { time: "6:00 AM - 6:45 AM", activity: "Breakfast" },
        { time: "7:00 AM - 7:30 AM", activity: "Morning assembly (Mon, Wed, Fri)" },
        { time: "7:45 AM - 4:00 PM", activity: "Academic classes with breaks" },
        { time: "4:00 PM - 5:30 PM", activity: "Sports and club activities" },
        { time: "5:30 PM - 6:30 PM", activity: "Personal time / Cleaning" },
        { time: "6:30 PM - 7:15 PM", activity: "Dinner" },
        { time: "7:30 PM - 9:30 PM", activity: "Evening prep / Study time" },
        { time: "9:30 PM - 10:00 PM", activity: "Roll call and evening prayers" },
        { time: "10:00 PM", activity: "Lights out" }
      ],
      staff: [
        { name: "Dr. James Nyangau", position: "Principal" },
        { name: "Mrs. Elizabeth Ondiek", position: "Deputy Principal, Academics" },
        { name: "Mr. Samuel Mogaka", position: "Deputy Principal, Administration" },
        { name: "Mr. Bernard Ochieng", position: "Senior Boarding Master" },
        { name: "Mrs. Joyce Kamau", position: "Assistant Boarding Mistress" },
        { name: "Mr. Joseph Onyango", position: "Head of Mathematics Department" },
        { name: "Ms. Beatrice Nyaboke", position: "Head of Languages Department" },
        { name: "Mr. David Machoka", position: "Head of Sports Department" }
      ]
    }
  };

  const details = campusDetails[campusSlug];

  // If campus not found or details not available, show a not found message
  if (!details) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-[#556B2F] mb-4">Campus Information Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the campus information you're looking for.</p>
            <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F]">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{details.title}</h1>
            <p className="max-w-2xl text-lg">
              Explore our modern facilities and campus environment
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="flex items-center mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Campus Gallery */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {details.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className={index === 0 ? "h-80 md:h-full md:row-span-2" : "h-60"}>
                      <img 
                        src={image} 
                        alt={`${details.title} - image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Campus Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6">Campus Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">{details.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-[#800000] mr-3" />
                      <h3 className="font-bold text-gray-800">Location</h3>
                    </div>
                    <p className="text-gray-600">{details.location}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-[#800000] mr-3" />
                      <h3 className="font-bold text-gray-800">Established</h3>
                    </div>
                    <p className="text-gray-600">{details.established}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-[#800000] mr-3" />
                      <h3 className="font-bold text-gray-800">Campus Staff</h3>
                    </div>
                    <p className="text-gray-600">{details.staff.length} key staff members</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Campus Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                <Building className="mr-3 h-8 w-8 text-[#800000]" />
                Campus Facilities
              </h2>
              
              <div className="space-y-6">
                {details.facilities.map((facility, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#800000] mb-2">{facility.name}</h3>
                      <p className="text-gray-700">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Campus Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                <Clock className="mr-3 h-8 w-8 text-[#800000]" />
                Daily Schedule
              </h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-4 bg-gray-50 text-[#556B2F] font-bold">Time</th>
                          <th className="text-left py-2 px-4 bg-gray-50 text-[#556B2F] font-bold">Activity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details.schedule.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="py-2 px-4 border-t border-gray-100 font-semibold">{item.time}</td>
                            <td className="py-2 px-4 border-t border-gray-100">{item.activity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Campus Staff */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6 flex items-center">
                <Users className="mr-3 h-8 w-8 text-[#800000]" />
                Campus Leadership
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {details.staff.map((person, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-800">{person.name}</h3>
                      <p className="text-[#800000]">{person.position}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Visit Campus CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-4">Visit Our Campus</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We invite you to schedule a tour of our campus to see our facilities and meet our staff in person.
              </p>
              <Button asChild className="bg-[#800000] hover:bg-[#660000]">
                <Link href="/contact">
                  Schedule a Tour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </>
  );
}