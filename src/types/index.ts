export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
 
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Member {
  id: string;
  name: string;
  email: string | null;
  contactNo: string | null;
  links: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
    twitter?: string;
    medium?: string;
    quora?: string;
  };
  img: string | null;
  yearOfGrad: string;
}