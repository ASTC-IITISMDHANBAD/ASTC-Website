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

export interface Members {

}