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

export const features = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Our rigorous curriculum and experienced faculty ensure high academic standards.",
    icon: "book"
  },
  {
    id: 2,
    title: "Character Development",
    description: "We focus on developing strong moral values and leadership skills.",
    icon: "award"
  },
  {
    id: 3,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, and sporting facilities.",
    icon: "home"
  },
  {
    id: 4,
    title: "Digital Learning",
    description: "Integration of technology in education for enhanced learning.",
    icon: "laptop"
  },
  {
    id: 5,
    title: "Student Support",
    description: "Dedicated mentoring and guidance for every student.",
    icon: "users"
  }
];

export const aboutContent = {
  description: "Established in 2011, Kiage TumainiBoys High School is a premier educational institution located in Kitutu Chache South Sub County, Kisii County. Our experienced educators apply a personalized teaching approach to meet the needs of each individual student.",
  vision: "To be a leading center of academic excellence, nurturing well-rounded individuals who are ready to face global challenges.",
  motto: "God, Discipline and Success",
  coreValues: [
    "Academic Excellence",
    "Spiritual Growth", 
    "Leadership Development",
    "Character Formation",
    "Innovation and Creativity"
  ],
  history: {
    establishment: "Founded in 2011, Kiage Tumaini Boys High School began with a vision to provide quality education to young men in Kisii County. Starting with just 50 students and 5 teachers, the school has grown into a leading educational institution in the region.",
    milestones: [
      { year: "2011", event: "School founded with initial enrollment of 50 students" },
      { year: "2012", event: "First KCSE class graduates with impressive results" },
      { year: "2015", event: "Expansion of facilities including new science laboratories" },
      { year: "2018", event: "Introduction of digital learning program" },
      { year: "2020", event: "Achievement of 95% KCSE pass rate" }
    ]
  },
  additionalInfo: "Our commitment to excellence has been recognized through various awards and accreditations. We continue to invest in modern facilities and professional development for our staff to ensure we provide the best possible education for our students."
};

export const technologyContent = {
  title: "Embracing Modern Technology",
  description: "Our state-of-the-art facilities and modern teaching methods ensure students are prepared for the digital age.",
  additionalInfo: "From smart classrooms to advanced science laboratories, we provide the tools needed for 21st-century learning.",
  image: "/images/lab1.jpg"
};

export const leadingSchoolContent = {
  title: "A Leading School in Kenya",
  description: "As a member of the Kenya Secondary Schools Association, we are committed to providing modern education while staying true to our cultural values."
};

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
    image: "/images/school 1.jpg"
  },
  {
    id: 2,
    title: "Excellence in Education",
    description: "Preparing young men to excel academically and in life",
    buttonText: "Learn More",
    buttonLink: "/about",
    buttonVariant: "primary",
    image: "/images/trip4.jpg"
  },
  {
    id: 3,
    title: "God, Discipline and Success",
    description: "Our motto guides us in nurturing tomorrow's leaders",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
    buttonVariant: "primary",
    image: "/images/classroom1.jpg"
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
    value: 13,
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

export const benefits = [
  { id: 1, text: "Modern Learning Facilities" },
  { id: 2, text: "Experienced Teaching Staff" },
  { id: 3, text: "Strong Academic Performance" },
  { id: 4, text: "Holistic Development" }
];

export const campusSection = [
  {
    id: 1,
    title: "Main Campus",
    description: "Our flagship campus features modern classrooms and extensive facilities.",
    image: "/images/school 1.jpg",
    link: "/campus/main"
  }
];

export const resultSections = [
  {
    id: 1,
    title: "KCSE Performance 2023",
    categories: [
      { id: 1, label: "A Grade", percentage: 15, color: "primary" },
      { id: 2, label: "B Grade", percentage: 35, color: "secondary" },
      { id: 3, label: "C Grade", percentage: 40, color: "primary" }
    ]
  },
  {
    id: 2,
    title: "KCSE Performance 2024",
    categories: [
      { id: 1, label: "A Grade", percentage: 18, color: "primary" },
      { id: 2, label: "B Grade", percentage: 38, color: "secondary" },
      { id: 3, label: "C Grade", percentage: 42, color: "primary" }
    ]
  }
];

export const footerContent = {
  schoolInfo: {
    name: "Kiage Tumaini Boys High School",
    subtitle: "Excellence in Education",
    description: "Nurturing tomorrow's leaders through quality education and character development."
  },
  socialMedia: [
    { platform: "facebook", link: "https://facebook.com/kiagetumainiboys" },
    { platform: "twitter", link: "https://twitter.com/kiagetumainiboys" },
    { platform: "instagram", link: "https://instagram.com/kiagetumainiboys" },
    { platform: "youtube", link: "https://youtube.com/kiagetumainiboys" }
  ],
  quickLinks: [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Academics", link: "/academics" },
    { text: "Admissions", link: "/admissions" },
    { text: "News & Events", link: "/news-events" },
    { text: "Contact", link: "/contact" }
  ],
  contactInfo: {
    address: "P.O. Box 1234, Kitutu Chache South, Kisii County, Kenya",
    phone: "+254 700 000 000",
    email: "info@kiagetumainiboys.ac.ke",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  copyright: "© 2025 Kiage Tumaini Boys High School. All rights reserved."
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/images/trip6.jpg",
    title: "Kiage Tumaini Celebrates 13 Years of Excellence",
    excerpt: "The school recently celebrated its 13th anniversary with a grand event that recognized the achievements of students, staff, and alumni. ",
    date: "2024-05-12",
    link: "/news-events/13th-anniversary-celebration"
  },
  {
    id: 2,
    image: "/images/lab1.jpg",
    title: "Kiage Tumaini Students Shine at National Science Fair",
    excerpt: "Our students recently participated in the National Science Fair, showcasing their innovative projects and winning several awards.",
    date: "2023-04-28",
    link: "/news-events/science-fair-success"
  },
  {
    id: 3,
    image: "/images/students3.jpg",
    title: "New Partnership with University of Nairobi",
    excerpt: "Kiage Tumaini has established a new partnership with the University of Nairobi to provide academic and research opportunities for our students.",
    date: "2023-03-15",
    link: "/news-events/university-partnership"
  }
];

export const programs: Program[] = [
  {
    id: 1,
    title: "Form One",
    ageRange: "14-15 years",
    description: "Foundation year focusing on core subjects and introduction to secondary education.",
    image: "/images/form1.jpg",
    link: "/academics/form-one",
    variant: "primary"
  },
  {
    id: 2,
    title: "Form Two",
    ageRange: "15-16 years",
    description: "Building on core knowledge with increased focus on practical applications.",
    image: "/images/trip1.jpg",
    link: "/academics/form-two",
    variant: "secondary"
  },
  {
    id: 3,
    title: "Form Three",
    ageRange: "16-17 years",
    description: "Advanced studies with specialization options and career guidance.",
    image: "/images/students3.jpg",
    link: "/academics/form-three",
    variant: "primary"
  },
  {
    id: 4,
    title: "Form Four",
    ageRange: "17-18 years",
    description: "Final year preparation for KCSE examinations and university entrance.",
    image: "/images/students1.jpg",
    link: "/academics/form-four",
    variant: "secondary"
  }
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Parents Meeting",
    date: "2025-05-15",
    day: 15,
    month: "May",
    time: "9:00 AM",
    location: "School Hall",
    color: "primary"
  },
  {
    id: 2,
    title: "Sports Day",
    date: "2025-06-01",
    day: 1,
    month: "June",
    time: "8:00 AM",
    location: "School Grounds",
    color: "secondary"
  },
  {
    id: 3,
    title: "Science Fair",
    date: "2025-06-15",
    day: 15,
    month: "June",
    time: "10:00 AM",
    location: "Science Labs",
    color: "primary"
  }
];

export const classroomSection = [
  {
    id: 1,
    title: "Modern Classrooms",
    description: "Our classrooms are equipped with modern technology and comfortable learning spaces.",
    image: "/images/students6.jpg"
  },
  {
    id: 2,
    title: "Interactive Learning",
    description: "Students engage in collaborative and interactive learning experiences.",
    image: "/images/trip5.jpg"
  }
];

export const formSection = [
  {
    id: 1,
    title: "Form 1",
    description: "Our Form 1 program focuses on building strong academic foundations.",
    image: "/images/students1.jpg"
  },
  {
    id: 2,
    title: "Form 2",
    description: "Form 2 students develop critical thinking and problem-solving skills.",
    image: "/images/students2.jpg"
  },
  {
    id: 3,
    title: "Form 3",
    description: "Form 3 curriculum emphasizes advanced concepts and practical applications.",
    image: "/images/students3.jpg"
  },
  {
    id: 4,
    title: "Form 4",
    description: "Form 4 prepares students for KCSE examinations and future success.",
    image: "/images/students4.jpg"
  }
];