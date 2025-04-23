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
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/474380329_1131024558715269_6300357879248411838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHa0R0AI-ryaNg_4zbA6C1NIdo8yyjk4K4h2jzLKOTgrjaKPHn1pf_GGGbyaj8EUunAuLaX5qz3oweqHw7X87eG&_nc_ohc=-KdI5m5NXgsQ7kNvwHzYmgd&_nc_oc=Adk5KZsDNoePkLFy1aisBPA_zHOl1ttdnXgNb2_Ta4lY1ODHYdn4Er63oEJRcM4lc6s&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=UlHnpio9wL1Dw1tp3_L1TQ&oh=00_AfF4xBHNlMMsbwQQPkKjhP5r2INiOmYIDvqckkKGbEPuEw&oe=680D6D41"
  },
  {
    id: 2,
    title: "Excellence in Education",
    description: "Preparing young men to excel academically and in life",
    buttonText: "Learn More",
    buttonLink: "/about",
    buttonVariant: "primary",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/299172793_581407337010330_517400459563407425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHgLBwFUP1aShtirHL7gWdNZ0F03qHkThdnQXTeoeROF_yvBU82sz5q5Q2bsmb9X9gI-wTsaK3t8Mbv6hwWPkPb&_nc_ohc=DY_XOyTwMQIQ7kNvwEG21S_&_nc_oc=AdnIVVqrCoRx5TqYVXvj2AqlX40mBplHka-eJMLexq2gTvHR8_tFIvwJq2f2ZgrgIBQ&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=HYCWoGH0RRDM3t4r7RJ58w&oh=00_AfEH4YwfBEMaWHsIOT6IAYG3iiiMJvYZgfIIgh0l8EsZwA&oe=680D6CE6"
  },
  {
    id: 3,
    title: "God, Discipline and Success",
    description: "Our motto guides us in nurturing tomorrow's leaders",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
    buttonVariant: "primary",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/45288703_1950747978347125_3936876227352068096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoWCXCi7EGUO5qGeJ3OzYP9F6HSlbGIuf0XodKVsYi59JuSokirfcUilcWQVXRFkwOZPPTNHgWF6G6Ph2nRMVH&_nc_ohc=xEtQAHIvnLoQ7kNvwEqSpjO&_nc_oc=AdnXbeQpEDQdugCKImRBFLrf1GKGjnkolyPA9-xPO3V7__Cerc3pGRdccKsS4-LsCCU&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=oK59-1L_4jRM5fOzYDDIIQ&oh=00_AfHeGOcd8O6lbFoKuNFER73zrPNXV-63_j6Wc5umhi2fDg&oe=682F2161"
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
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464748073_8563082410446949_8902343514568291852_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCI0mfc3kRKSLC-8DlfaoduiVJFkozXHC6JUkWSjNccCJR0d2IePPPoYW2ZPNYhDffTGGVhGqBb5rjdcJLGenH&_nc_ohc=OwT-NLHQV3wQ7kNvwFpLLZp&_nc_oc=Adn7cooXdy_ZUncWfyP2EpPQt1JDIYGiCf6Umkk05Fq2ev7OOncWZESRC7jW5qYtrN0&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=wRFTqYxG7-TWCnC9X5Trcw&oh=00_AfFHwClir5rxqEFfMq7qSinLYe0pd1Z5ONUodtcpY7hIjQ&oe=680EA97B",
    title: "Kiage Tumaini Celebrates 12 Years of Excellence",
    excerpt: "The school recently celebrated its 12th anniversary with a grand event that recognized the achievements of students, staff, and alumni. ",
    date: "2023-05-12",
    link: "/news-events/12th-anniversary-celebration"
  },
  {
    id: 2,
    image: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464907002_8563082593780264_8063665135507507167_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGR28qjBixxbMj6bn5XWZQfnPAYouHMAzGc8Bii4cwDMdZbV8uXHfq0QC1_XTWcYOTUdMfiAdQzgZ3E8jq4B7F-&_nc_ohc=rP_fsE_KICQQ7kNvwFRHtpH&_nc_oc=AdkH15YS0MxUU1cn5kAsJRNQz1pFYQwCNZwDSYnS9-0_h5tz-wuDirKqLDueRM0KGaA&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=9duaZtNR692ysHsi4VM94Q&oh=00_AfGJP5JztiJhqLWDPn6cSrTzAPTcp6BE2a1ht6FUc5a58Q&oe=68018126",
    title: "Kiage Tumaini Students Shine at National Science Fair",
    excerpt: "Our students recently participated in the National Science Fair, showcasing their innovative projects and winning several awards.",
    date: "2023-04-28",
    link: "/news-events/science-fair-success"
  },
  {
    id: 3,
    image: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464270956_8534882233266967_862136308672317374_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEoy7RTysyiGKbJcfQHSvNJoX8rjHuUlWChfyuMe5SVYDkp81A6FQJBf8eNR5H1b-F_ANe5VglGaJ9EhP8G6a9b&_nc_ohc=xqeqXkCAZIEQ7kNvwFRY8cq&_nc_oc=Adl4O3BM7CvddDFc_mzshGXOafG4dOVfUJoMzdH0UHwxXWFUBM34LZdbeWC6eIeCr7E&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4Lh26k6wiWRTvkpY8QWUyw&oh=00_AfHzH2yzcNuAQnHJNmoL071K0BZdMVpsALQ4lBjZqYlVeg&oe=68018F2B",
    title: "New Partnership with University of Nairobi",
    excerpt: "Kiage Tumaini has established a new partnership with the University of Nairobi to provide academic and research opportunities for our students.",
    date: "2023-03-15",
    link: "/news-events/university-partnership"
  },
  {
    id: 4,
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464907002_8563082593780264_8063665135507507167_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGR28qjBixxbMj6bn5XWZQfnPAYouHMAzGc8Bii4cwDMdZbV8uXHfq0QC1_XTWcYOTUdMfiAdQzgZ3E8jq4B7F-&_nc_ohc=EQJa2QwWNuEQ7kNvwH8Jz9b&_nc_oc=AdmpadvEAAndsqRvVBoAhSNGEIwE2GNi2C6TtE3zDPVNDjtuz0f-op1H6rUigcN6lOk&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=Rm7YMw2YoAk0dTeqMzreEQ&oh=00_AfFvzfZH6_pXLd2bE3_atEjfGKnm36GJiD2llnGabwRaIA&oe=680EB026",
    title: "Kiage Tumaini Hosts Annual Sports Day",
    excerpt: "The school's annual sports day was a huge success, filled with exciting competitions and displays of athleticism.",
    date: "2023-02-25",
    link: "/news-events/sports-day-2023"
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
    location: "School Campus",
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
    image: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464333366_8534882449933612_7210426615662670934_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEAtEUc3d6xomjQDR3xWkXWDszb_-Ut-eoOzNv_5S356jEUrDZVN7nO_QEKfgDhib4dv5IeL4cciT4lymm4bR22&_nc_ohc=ZXMx_RRrI4EQ7kNvwGpZ58X&_nc_oc=AdmoWsU6ITraiz_hNgLQJHM8F8KivNt13xzfguCCQzoEWR1eX52bASeZSmXI76T1m0w&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=vpjZIWomuTS0g5GAAGGQ8g&oh=00_AfF9oyqu9qcuwNVL1oQbvw0-ad-33vPE8QxjSWyNFzkZUw&oe=68017DE9",
    link: "/academics/junior",
    variant: "primary"
  },
  {
    id: 2,
    title: "Senior High School",
    ageRange: "Ages 15 - 18 Years Old",
    description: "Our senior program prepares students for KCSE examinations and higher education with specialized subjects and advanced learning.",
    image: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/464411889_8534882436600280_3268250614493585959_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGlmv8ZKOuPjPbYUsgc8S_xQWPpMWVDx1dBY-kxZUPHV0OAXys5bZbpb_9mFWfDpLahGDhKNW17PVmxuvasuJkH&_nc_ohc=DdmseYd7JL0Q7kNvwG4bERn&_nc_oc=AdkBR7KWz-YnuuPnalrq6r80-GdsmZcyF-6blbnT1I_HbiqjOJMqV1-93s9PQNO-igU&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=uW3VDFqOD947gZxf3o-o6w&oh=00_AfG0aRQZM1cviEjyJkhGZFsWS_nSkOWz9lLy5HbX8gXTUQ&oe=68018CE8",
    link: "/academics/senior",
    variant: "secondary"
  },
  {
    id: 3,
    title: "Boarding Facilities",
    ageRange: "Ages 13 - 18 Years Old",
    description: "Our boarding program provides a supportive community environment that fosters independence, discipline, and academic focus.",
    image: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/464525981_8534882946600229_7951063959042981708_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeH3-f-N9U31Ks5xPMN7O0ZXuc7YcUqA9ve5zthxSoD293Jj8DHzcg61zyEi2AFIh7DqLrM21unqo6p-V754bhWD&_nc_ohc=z_Gw1cK7iA0Q7kNvwH-Eb0t&_nc_oc=Adljx542KZ-5eNOL10N-SL6uJIavZgWQGru2c4_JTXNj7yS6pF5Z6gTE8XOlrZmY-7g&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=iecQubJop-MxnejNkQyV4Q&oh=00_AfFbXkGV9LjOiiXx4jGhbafyI9zm1FiX2hq3VT7RXkJiIg&oe=68017788",
    link: "/academics/boarding",
    variant: "primary"
  }
];

export const campusSection: CampusSection = {
  id: 1,
  title: "Kiage Tumaini Boy's Highschool Complex",
  description: "Our flagship campus features modern classrooms, science laboratories, computer labs, extensive sports facilities, and comfortable boarding accommodations for our students.",
  image: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/463996998_8524221257666398_1881651535161341590_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF6HR0F5Nghu1gsU92-DebK2YOfLhOQ9o_Zg58uE5D2j0jsT6lBa19YUiXUjFYh9JS1Ta2Kf8AGO4y7EIgQhFMh&_nc_ohc=Ryq7p0xIkBAQ7kNvwG4ar7K&_nc_oc=AdmK0osjhNXFS0IvtTn-BKWqk17AmhZI5T2A8FthtIhR7hV38hU-Xu_imOI6wuJOWss&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=pwWwRv3GRODSO0R9K4M5PQ&oh=00_AfGPM21T_MaZnDH75XcIw6neko5BhP0YeqNaT8MH70qx-A&oe=68019BA9",
  link: "/campuses/main"
};

export const resultSections: ResultSection[] = [
  {
    id: 1,
    title: "Our Campus",
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
  description: "Kiage Tumaini Boys High School is located in Kitutu Chache South, Kisii County, within the Nyanza region of Kenya. As an ISO certified institution, we are committed to providing affordable, accessible, sustainable and quality education by ensuring our services are effective and efficient to meet stakeholder expectations.",
  vision: "To be a leading center of academic excellence and character formation in Kenya",
  motto: "God, Discipline and Success",
  coreValues: [
    "Excellence in Learning",
    "Integrity and Character",
    "Spiritual Growth",
    "Leadership Development",
    "Community Service"
  ],
  history: {
    establishment: "Founded in 2011 as a boys' secondary school with a vision to provide quality education",
    milestones: [
      {
        year: "2011",
        event: "Official establishment and admission of first students"
      },
      {
        year: "2015",
        event: "Achieved ISO certification for quality education standards"
      },
      {
        year: "2018",
        event: "Expanded facilities to accommodate growing student population"
      },
      {
        year: "2023",
        event: "Recognized as one of the top-performing schools in Kisii County"
      }
    ]
  },
  additionalInfo: "The school maintains high standards of academic excellence while fostering character development and leadership skills in our students. Our commitment to quality education and continuous improvement has established us as a leading institution in the region."
};

export const technologyContent = {
  title: "Expanding the Bounds of Learning with Technology",
  description: "Our classrooms are no longer static entities confined by four walls. At Tumaini Kiage Boys High School, through the integration of modern technology, we're creating dynamic, interactive ecosystems where subjects come alive, inviting students to explore, question, and understand in ways previously unimaginable.",
  additionalInfo: "Technology-based learning sessions redefine the boundaries of education, making it an experiential journey rather than a passive acquisition of information. Our students develop critical thinking skills and prepare for the digital future while still maintaining our traditional values and educational excellence.",
  image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464809487_8563082190446971_4149192860917869296_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFP3zx-4sENrSTCrjpHnvnnr9_ejv1i1Oev396O_WLU10msqqqFw8RtkXYo3kvIaUC6-RUhXZ8XLbwyOXzuvtU&_nc_ohc=jIqdgmRotmcQ7kNvwGv6xxK&_nc_oc=AdlbWa2mxtTL8voBiLtj_-9hxFwGhMc2SGl9rShS1FhwOtPQKnRFd1PEwlzaiyW7-Fs&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=ato20-AwBUNn3konwIa2IA&oh=00_AfFmg9EjS6EoKdXmnHV7TafSup8elV_N46Py0ynR0M8rug&oe=680EB337"
};

export const leadingSchoolContent = {
  title: "A Leading School",
  description: "As a member of the Kenya Secondary Schools Association, Kiage Tumaini Boy's High School is committed to providing a modern, forward-looking education while remaining anchored in the culture and traditions of Kenya and actively participating in the local community.",
  image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464344009_8534882446600279_5882791894603496916_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFJ-TBvVTZYjHVZPC6qThG09apqlIUBMsD1qmqUhQEywFGLJLnVXTaLYW3Pi8vmvCKYF6haeay_0G-XjL6cS-A3&_nc_ohc=GhEywCrdAdwQ7kNvwFOvkgo&_nc_oc=AdkOyLHlOQpPe0pXjs3JmzZuSITROOe-3T4AIMcr-UBKJqguXG2VPU2C1HbCLk1tTto&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=m-lXdJgIcVNYxeml-nQWlQ&oh=00_AfGP874njZ3gETTWcsTnvLozjU76E4rkLovy6Rj4VkWidw&oe=680EBA6C"
};



export const footerContent = {
  schoolInfo: {
    name: "Kiage Tumaini",
    subtitle: "Boy's High School",
    description: "Providing excellence in education since 2011. Nurturing young men of character, integrity, and leadership."
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