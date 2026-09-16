export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies?: string[];
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
  description?: string;
}

export interface LanguageProficiency {
  name: string;
  level: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  company: string;
  role: string;
  phone: string;
  email?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface SiteContent {
  nav: {
    home: string;
    experience: string;
    skills: string;
    certifications: string;
    references: string;
    contact: string;
    viewCv: string;
  };
  hero: {
    name: string;
    title: string;
    statement: string;
    downloadCv: string;
    contactBtn: string;
    viewExperience: string;
    availableForWork: string;
  };
  home: {
    aboutBadge: string;
    aboutTitle: string;
    aboutSummary: string;
    experienceBadge: string;
    experienceTitle: string;
    viewAllExperience: string;
    skillsBadge: string;
    skillsTitle: string;
    viewAllSkills: string;
    highlightsTitle: string;
    highlights: Array<{ value: string; label: string; description: string }>;
    languagesTitle: string;
    languages: LanguageProficiency[];
  };
  experiencePage: {
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  skillsPage: {
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  certificationsPage: {
    title: string;
    description: string;
    emptyTitle: string;
    emptyDescription: string;
    educationTitle: string;
    education: EducationItem[];
  };
  referencesPage: {
    title: string;
    description: string;
    privacyNote: string;
    showContactInfo: string;
    hideContactInfo: string;
  };
  contactPage: {
    title: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMessage: string;
      errorMessage: string;
    };
    info: {
      directEmail: string;
      directPhone: string;
      location: string;
      workingHours: string;
      workingHoursVal: string;
    };
  };
  cvPage: {
    title: string;
    backHome: string;
    downloadPdf: string;
    printCv: string;
    fallbackNotice: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactHeading: string;
    rightsReserved: string;
  };
}