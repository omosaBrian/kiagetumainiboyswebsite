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
    image: "/images/students6.jpg"
  },
  {
    id: 2,
    title: "Excellence in Education",
    description: "Preparing young men to excel academically and in life",
    buttonText: "Learn More",
    buttonLink: "/about",
    buttonVariant: "primary",
    image: "/images/trip6.jpg"
  },
  {
    id: 3,
    title: "God, Discipline and Success",
    description: "Our motto guides us in nurturing tomorrow's leaders",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
    buttonVariant: "primary",
    image: "/images/school 1.jpg"
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
    image: "/images/classroom1.jpg",
    title: "Kiage Tumaini Celebrates 12 Years of Excellence",
    excerpt: "The school recently celebrated its 12th anniversary with a grand event that recognized the achievements of students, staff, and alumni. ",
    date: "2023-05-12",
    link: "/news-events/12th-anniversary-celebration"
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
