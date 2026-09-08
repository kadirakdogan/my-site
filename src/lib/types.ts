export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  field: string;
  startDate: string;
  endDate: string;
}