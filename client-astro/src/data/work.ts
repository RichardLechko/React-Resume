export type WorkExperience = {
  id: string;
  logo: string;
  tools: string[];
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
};

const workExperiences: WorkExperience[] = [
  {
    id: "hendrickson_2025",
    logo: "/work-images/hendrickson-logo.png",
    tools: ["Python", "REST APIs", "Data Pipelines", "ERP Systems", "PostgreSQL"],
    startDate: "12/2025",
    isCurrent: true,
  },
  {
    id: "preferred_risk",
    logo: "/work-images/pris-logo-v2.png",
    tools: ["C#", ".NET Core", "React", "Next.js", "Datadog", "Tailwind"],
    startDate: "08/2025",
    endDate: "11/2025",
    isCurrent: false,
  },
  {
    id: "hendrickson_2024",
    logo: "/work-images/hendrickson-logo.png",
    tools: ["PowerBI", "KPIs", "SQL", "ERP Systems", "QAD"],
    startDate: "11/2024",
    endDate: "08/2025",
    isCurrent: false,
  },
];

export default workExperiences;
