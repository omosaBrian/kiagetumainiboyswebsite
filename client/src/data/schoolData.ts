export interface Announcement {
  text: string;
  link: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant: 'primary' | 'secondary';
  image: string;
}

export interface Statistic {
  id: number;
  value: number;
  suffix: string;
  label: string;
  color: 'primary' | 'secondary';
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  day: number;
  month: string;
  time: string;
  location: string;
  color: 'primary' | 'secondary';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  link: string;
  variant: 'primary' | 'secondary';
}

export interface CampusSection {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ResultCategory {
  id: number;
  label: string;
  percentage: number;
  color: 'primary' | 'secondary';
}

export interface ResultSection {
  id: number;
  title: string;
  categories: ResultCategory[];
}

export interface Benefit {
  id: number;
  text: string;
}

export const announcement: Announcement = {
  text: "School Reopening: School reopens for Term 2 on May 5th, 2025. All students are expected to report by 8:00 AM.",
  link: "/news-events"
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Kiage Tumaini Boy's High School",
    description: "Private Boys High School in Kisii, Kenya",
    buttonText: "Book A Tour",
    buttonLink: "/contact",
    buttonVariant: "secondary",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Excellence in Education",
    description: "Preparing young men to excel academically and in life",
    buttonText: "Learn More",
    buttonLink: "/about",
    buttonVariant: "primary",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 3,
    title: "Building Character",
    description: "Developing young men of integrity, discipline, and leadership",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
    buttonVariant: "primary",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

export const statistics: Statistic[] = [
  {
    id: 1,
    value: 95,
    suffix: "%",
    label: "KCSE Pass Rate",
    color: "secondary"
  },
  {
    id: 2,
    value: 51,
    suffix: "",
    label: "Years of Excellence",
    color: "primary"
  },
  {
    id: 3,
    value: 43,
    suffix: "+",
    label: "Expert Teachers",
    color: "secondary"
  },
  {
    id: 4,
    value: 1169,
    suffix: "+",
    label: "Students",
    color: "primary"
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Math Competition Winners",
    excerpt: "Our students took first place in the county-wide mathematics competition, demonstrating exceptional problem-solving skills.",
    date: "2024-04-12",
    image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    link: "/news-events/math-competition"
  },
  {
    id: 2,
    title: "TERM TWO SECONDARY SCHOOL SPORTS EVENTS",
    excerpt: "We are excited to announce we will be participating in the 2025 National Secondary School Sports Competition Term 2.",
    date: "2025-03-28",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "/news-events/science-lab"
  },
  {
    id: 3,
    title: "Inter-School Debate Competition",
    excerpt: "Our debate team showcased impressive critical thinking and public speaking skills at the regional debate competition.",
    date: "2025-03-15",
    image: "https://images.unsplash.com/photo-1577896852618-3b24063968c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "/news-events/debate-competition"
  }
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Term 2 Begins",
    date: "2025-04-25",
    day: 25,
    month: "Apr",
    time: "8:00 AM",
    location: "Both Campuses",
    color: "secondary"
  },
  {
    id: 2,
    title: "Kiage Tumaini Annual Sports Day",
    date: "2025-05-10",
    day: 10,
    month: "May",
    time: "9:00 AM",
    location: "Main Campus Sports Grounds",
    color: "primary"
  },
  {
    id: 3,
    title: "Form 4 Career Day",
    date: "2025-06-17",
    day: 17,
    month: "Jun",
    time: "10:00 AM",
    location: "Annex Campus Hall",
    color: "secondary"
  }
];

export const features: Feature[] = [
  {
    id: 1,
    title: "8-4-4 Curriculum",
    description: "We offer the Kenyan 8-4-4 curriculum, providing a broad, creative, and unique future-focused education.",
    icon: "book"
  },
  {
    id: 2,
    title: "Top KCSE Results",
    description: "Our school consistently achieves excellent KCSE results, preparing students for higher education.",
    icon: "award"
  },
  {
    id: 3,
    title: "Diverse Student Body",
    description: "A welcoming, multicultural school with students from across the region.",
    icon: "users"
  },
  {
    id: 4,
    title: "Modern Boarding Facilities",
    description: "Premium boarding facilities that provide a comfortable and conducive environment for learning.",
    icon: "home"
  },
  {
    id: 5,
    title: "Advanced Learning Methods",
    description: "Innovative teaching approaches and technology integration for enhanced learning experiences.",
    icon: "laptop"
  }
];

export const programs: Program[] = [
  {
    id: 1,
    title: "Junior High School",
    ageRange: "Ages 12 - 14 Years Old",
    description: "Our junior program focuses on building a solid academic foundation while developing essential life skills and character values.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80",
    link: "/academics/junior",
    variant: "primary"
  },
  {
    id: 2,
    title: "Senior High School",
    ageRange: "Ages 15 - 18 Years Old",
    description: "Our senior program prepares students for KCSE examinations and higher education with specialized subjects and advanced learning.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "/academics/senior",
    variant: "secondary"
  },
  {
    id: 3,
    title: "Boarding Facilities",
    ageRange: "Ages 13 - 18 Years Old",
    description: "Our boarding program provides a supportive community environment that fosters independence, discipline, and academic focus.",
    image: "https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    link: "/academics/boarding",
    variant: "primary"
  }
];

export const campusSection: CampusSection = {
  id: 1,
  title: "Main Campus",
  description: "Our flagship campus features modern classrooms, science laboratories, computer labs, extensive sports facilities, and comfortable boarding accommodations for our senior students.",
  image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
  link: "/campuses/main"
};

export const resultSections: ResultSection[] = [
  {
    id: 1,
    title: "Main Campus",
    categories: [
      {
        id: 1,
        label: "Achieved A",
        percentage: 24,
        color: "secondary"
      },
      {
        id: 2,
        label: "Achieved A - B",
        percentage: 58,
        color: "primary"
      },
      {
        id: 3,
        label: "Achieved A - C",
        percentage: 82,
        color: "secondary"
      }
    ]
  },
  {
    id: 2,
    title: "Annex Campus",
    categories: [
      {
        id: 1,
        label: "Achieved A",
        percentage: 20,
        color: "secondary"
      },
      {
        id: 2,
        label: "Achieved A - B",
        percentage: 52,
        color: "primary"
      },
      {
        id: 3,
        label: "Achieved A - C",
        percentage: 78,
        color: "secondary"
      }
    ]
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    text: "Experienced and dedicated teaching staff"
  },
  {
    id: 2,
    text: "Modern learning facilities and resources"
  },
  {
    id: 3,
    text: "Comprehensive character development programs"
  },
  {
    id: 4,
    text: "Diverse extracurricular activities and sports"
  },
  {
    id: 5,
    text: "Strong community connections and involvement"
  }
];

export const aboutContent = {
  description: "Established in 2005, Tumaini Kiage Boys High School is a premier educational institution located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. Our school provides exceptional modern education with a comprehensive curriculum.",
  additionalInfo: "Every student is inherently unique. Therefore, at our school, our experienced educators apply a personalized teaching approach to meet the needs of each individual. The effectiveness of our student-centered methodology is outstanding. Our students achieve excellent KCSE results and embody a strong value system that unlocks their full potential, preparing them for lifelong success."
};

export const technologyContent = {
  title: "Expanding the Bounds of Learning with Technology",
  description: "Our classrooms are no longer static entities confined by four walls. At Tumaini Kiage Boys High School, through the integration of modern technology, we're creating dynamic, interactive ecosystems where subjects come alive, inviting students to explore, question, and understand in ways previously unimaginable.",
  additionalInfo: "Technology-based learning sessions redefine the boundaries of education, making it an experiential journey rather than a passive acquisition of information. Our students develop critical thinking skills and prepare for the digital future while still maintaining our traditional values and educational excellence.",
  image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
};

export const leadingSchoolContent = {
  title: "A Leading School",
  description: "As a member of the Kenya Secondary Schools Association, Kiage Tumaini Boy's High School is committed to providing a modern, forward-looking education while remaining anchored in the culture and traditions of Kenya and actively participating in the local community.",
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
};

export const callToActionContent = {
  title: "Join Our School Community",
  description: "Experience excellence in education at Kiage Tumaini Boys High School. We invite you to become part of our vibrant learning community.",
  buttons: [
    {
      text: "Book A Tour",
      link: "/contact",
      variant: "white"
    },
    {
      text: "Apply Now",
      link: "/admissions",
      variant: "primary"
    }
  ]
};

export const footerContent = {
  schoolInfo: {
    name: "Kiage Tumaini",
    subtitle: "Boy's High School",
    description: "Providing excellence in education since 2005. Nurturing young men of character, integrity, and leadership."
  },
  quickLinks: [
    { text: "About Us", link: "/about" },
    { text: "Academics", link: "/academics" },
    { text: "Admissions", link: "/admissions" },
    { text: "News & Events", link: "/news-events" },
    { text: "Contact Us", link: "/contact" }
  ],
  contactInfo: {
    address: "Kitutu Chache South, Kisii County, Nyanza, Kenya",
    phone: "+254 712 345 678",
    email: "info@kiagetumaini.ac.ke",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM"
  },
  socialMedia: [
    { platform: "facebook", link: "#" },
    { platform: "twitter", link: "#" },
    { platform: "instagram", link: "#" },
    { platform: "youtube", link: "#" }
  ],
  copyright: "© 2025 Kiage Tumaini Boys High School. All rights reserved."
};
