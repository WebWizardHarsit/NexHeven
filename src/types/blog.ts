export interface Blog {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  tags: string[];
  socials: {
    linkedin: string;
    github: string;
    portfolio: string;
    instagram: string;
  };
}
