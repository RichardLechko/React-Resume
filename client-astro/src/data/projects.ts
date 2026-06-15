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
    liveLink: "https://mma-scheduler.vercel.app/",
    sourceLink: "",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "scarlet_hacks",
    techStack: ["Next.js", "JavaScript", "Supabase", "Anthropic AI", "Node.js", "Tailwind"],
    liveLink: "https://iit-hackathon.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/scarlet-hacks-2025",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "northern_trust",
    techStack: ["React", "JavaScript", "Tailwind", "Node.js", "Express", "Python", "Vercel"],
    liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/depaul-northern-trust-hackathon",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "freedom_butchers",
    techStack: ["Astro", "Node.js", "Express", "SCSS", "ShadCN"],
    liveLink: "https://freedombutchers.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/superior-sphere",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "cloud_project",
    techStack: ["Next.js", "SCSS", "Node.js", "Docker", "Express", "TypeScript", "Django"],
    liveLink: "",
    sourceLink: "https://github.com/RichardLechko/depaul-cloud-project",
    inDevelopment: true,
    isPrivate: true,
  },
];

export default projects;
