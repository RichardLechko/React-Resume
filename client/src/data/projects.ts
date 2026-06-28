export type Project = {
  id: string;
  techStack: string[];
  liveLink: string;
  sourceLink: string;
  inDevelopment: boolean;
  isPrivate: boolean;
};

const projects: Project[] = [
  {
    id: "mma",
    techStack: ["Astro", "SCSS", "ShadCN", "Go", "TypeScript", "Supabase", "Docker", "Selenium"],
    liveLink: "https://mmanext.com",
    sourceLink: "",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "scarlet_hacks",
    techStack: ["Next.js", "JavaScript", "Supabase", "Anthropic AI", "Node.js", "Tailwind"],
    liveLink: "",
    sourceLink: "",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "northern_trust",
    techStack: ["React", "JavaScript", "Tailwind", "Node.js", "Express", "Python", "Vercel"],
    liveLink: "",
    sourceLink: "https://github.com/RichardLechko/depaul-northern-trust-hackathon",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "freedom_butchers",
    techStack: ["Astro", "Node.js", "Express", "SCSS", "ShadCN"],
    liveLink: "",
    sourceLink: "",
    inDevelopment: false,
    isPrivate: false,
  },
];

export default projects;
