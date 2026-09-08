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

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteContent {
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    viewCv: string;
  };
  hero: {
    name: string;
    title: string;
    statement: string;
    downloadCv: string;
    contactBtn: string;
  };
  about: {
    sectionNumber: string;
    sectionTitle: string;
    summary: string;
    stats: StatItem[];
    coreAreas: string[];
  };
  experience: {
    sectionNumber: string;
    sectionTitle: string;
    items: ExperienceItem[];
  };
  skills: {
    sectionNumber: string;
    sectionTitle: string;
    categories: SkillCategory[];
  };
  education: {
    sectionNumber: string;
    sectionTitle: string;
    items: EducationItem[];
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    email: string;
    emailLabel: string;
    phone: string;
    phoneLabel: string;
    location: string;
    locationLabel: string;
    ctaButton: string;
  };
  cvPage: {
    title: string;
    backHome: string;
    downloadPdf: string;
    fallbackNotice: string;
  };
  footer: {
    rightsReserved: string;
    builtWith: string;
  };
}