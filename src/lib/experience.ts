export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "item-1",
    role: "Frontend Developer (Part-Time)",
    company: "Aquila Softwares",
    period: "June 2025 - Present",
    description: [
      "Bettermomsh (E-commerce Platform) — Acts as Lead Frontend Developer, responsible for UI architecture, reusable components, responsive layouts, and API integration using React, TypeScript, Tailwind, and Ant Design.",
      "Developed the frontend architecture and integrated APIs for a comprehensive HRIS Recruitment Module, enabling end-to-end user experiences for job management and applicant tracking across web (React) and mobile (React Native) platforms.",
      "Sole frontend developer for a production Inventory Management System using React, TypeScript, SCSS, Ant Design, and MobX, implementing UI, API integration, and real-time notifications for job order deployment and returns via WebSockets.",
      "Serves as the main maintainer of the company’s three Clinic Systems, responsible for new feature development, UI/UX improvements, API integrations, refactoring, and fixing critical production issues.",
      "Implemented UI components, routing, form systems, API calls, and performance optimization for Care Solutions (Next.js Platform) using Next.js, React Server Components, and TypeScript.",
      "Collaborates closely with backend teams to align data structure, fix API issues, and improve system performance across multiple applications.",
      "Improved developer experience by refactoring UI components, implementing scalable state management with MobX, and introducing reusable and consistent UI patterns.",
    ],
  },
  {
    id: "item-2",
    role: "Frontend Developer (Intern)",
    company: "Aquila Softwares",
    period: "March 2025 - June 2025",
    description: [
      "Developed the frontend of an Inventory Management System from scratch, implementing UI designs, navigation routing, and REST API integrations.",
      "Designed and implemented new features for the Clinic system, managing both UI development and API integration.",
      "Maintained and optimized three distinct Clinic systems by integrating APIs and resolving existing technical bugs.",
    ],
  },
];
