// Experience data with actual dates for dynamic calculation
export interface ExperienceData {
  company: string;
  role: string;
  startDate: string; // Format: "YYYY-MM-DD"
  endDate: string | null; // null for current position
  location: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experienceData: ExperienceData[] = [
  {
    company: "Kyra Solutions",
    role: "Mean Stack Developer",
    startDate: "2025-03-01",
    endDate: null,
    location: "Remote",
    current: true,
    responsibilities: [
      "Developed and enhanced Angular-based user interfaces for image review, dashboards, filters, and reports, ensuring usability and performance",
      "Integrated Node.js and Java-based REST APIs to fetch, process, and display image metadata, reviews, and audit data",
      "Worked extensively with MongoDB & PostgreSQL, writing optimized queries to support reporting, filtering, and large-scale transactional data access",
      "Implemented authentication and role-based authorization using Keycloak, securing application access across multiple user roles",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Java APIs",
      "Keycloak",
      "AWS",
      "Nx",
    ],
  },
  {
    company: "Asset Telematics Private Limited",
    role: "Software Engineer",
    startDate: "2021-10-01",
    endDate: "2025-02-28",
    location: "Hyderabad, India",
    current: false,
    responsibilities: [
      "Developed and maintained Angular-based web applications, successfully onboarding 500+ customers and managing 10,000+ IoT devices",
      "Optimized Node.js REST APIs, reducing response time by 30% and efficiently handling high-concurrency requests",
      "Designed and implemented MongoDB aggregation pipelines to process large IoT datasets, enabling faster analytics and optimized data retrieval",
      "Integrated and customized JioXplor Maps API to improve real-time tracking accuracy and overall user experience",
      "Collaborated with cross-functional teams in an Agile/Scrum environment, delivering 30+ sprints on schedule while meeting business requirements",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "JioXplor Maps API",
    ],
    achievements: [
      "Successfully onboarded 500+ customers and managed 10,000+ IoT devices",
      "Reduced API response time by 30% through optimization",
      "Improved system response time by 40% through efficient indexing and aggregation pipelines",
    ],
  },
];

/**
 * Calculate total years of experience from experience data
 */
export function calculateTotalExperience(): number {
  const now = new Date();
  
  const totalMonths = experienceData.reduce((total, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : now;
    
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;
    
    return total + months;
  }, 0);

  // Convert to years with one decimal place
  return Math.round((totalMonths / 12) * 10) / 10;
}

/**
 * Format date range for display
 */
export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

/**
 * Get experience summary text
 */
export function getExperienceSummary(): string {
  const years = calculateTotalExperience();
  return `${years}+ years`;
}
