import type { SiteContent } from "@/lib/types";

export const contentEn: SiteContent = {
  nav: {
    home: "Overview",
    experience: "Experience",
    skills: "Skills",
    certifications: "Certifications",
    references: "References",
    contact: "Contact",
    viewCv: "View CV",
  },
  hero: {
    name: "Kadir Akdoğan",
    title: "IT Support Specialist / Network & Systems Administrator",
    statement:
      "Delivering end-to-end IT support, reliable network deployment, systems administration, and enterprise software operations.",
    downloadCv: "Download CV",
    contactBtn: "Contact Me",
    viewExperience: "View Experience",
    availableForWork: "Available for Projects & Opportunities",
  },
  home: {
    aboutBadge: "About",
    aboutTitle: "Reliable, Business-Driven IT Operations",
    aboutSummary:
      "IT professional with hands-on experience in technical support, network and systems administration, and infrastructure management. Practical expertise in MikroTik and Ubiquiti networking technologies, IP/analog camera systems, and Akınsoft business software solutions. Vocational training in software development, networking, and server technologies, with a strong personal interest in cybersecurity. Focused on analytical problem-solving, attention to detail, and delivering reliable IT solutions.",
    experienceBadge: "Career Snapshot",
    experienceTitle: "Featured Work Experience",
    viewAllExperience: "View Full Experience History",
    skillsBadge: "Capabilities",
    skillsTitle: "Core Technical Competencies",
    viewAllSkills: "Explore Full Skill Breakdown",
    highlightsTitle: "Proven Field Experience",
    highlights: [
      {
        value: "4+",
        label: "Corporate Positions",
        description: "Technical service, IT management, and field internship roles",
      },
      {
        value: "5",
        label: "Branches Managed",
        description: "Centralized ERP, network infrastructure, and hardware coordination",
      },
      {
        value: "2+",
        label: "Years in the Field",
        description: "Hands-on diagnostic, deployment, and 24/7 technical helpdesk",
      },
    ],
    languagesTitle: "Language Proficiencies",
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "A2 (Technical Documentation Level)" },
    ],
  },
  experiencePage: {
    title: "Professional Work Experience",
    description:
      "A chronological overview of system deployments, network configurations, ERP implementations, and hardware support roles.",
    items: [
      {
        company: "Akınsoft Başer Bilişim",
        role: "Technical Service Specialist",
        startDate: "",
        endDate: "Current",
        bullets: [
          "Akınsoft ERP installation, network configuration, and comprehensive client staff training",
          "Server-client network setup, domain integrations, and workstation hardware maintenance",
          "Providing on-site and remote technical advisory to business customers",
        ],
        technologies: ["Akınsoft ERP", "Windows Server", "Network Architecture", "Client Training"],
      },
      {
        company: "Paçacı Şemsi",
        role: "IT & Data Processing Manager",
        startDate: "",
        endDate: "~3 months",
        bullets: [
          "Centralized software management and data processing across a 5-branch business",
          "Inter-branch network and hardware infrastructure setup, routing, and optimization",
          "On-site technical support for hardware, system, and network troubleshooting across branches",
        ],
        technologies: ["Central Management", "Router/Switch", "Multi-Branch Network", "Hardware Maintenance"],
      },
      {
        company: "Akınsoft Başer Bilişim",
        role: "Technical Service",
        startDate: "01/09/2025",
        endDate: "02/03/2026",
        bullets: [
          "Akınsoft ERP and commercial software installation, database setup, and user onboarding",
          "Hardware fault diagnostics, OS updates, and periodic physical server maintenance",
          "SQL database backup routines and system disaster recovery operations at client sites",
        ],
        technologies: ["SQL Database", "Commercial ERP", "System Upgrades", "Fault Diagnosis"],
      },
      {
        company: "Kent Bilgisayar",
        role: "IT Support Intern",
        startDate: "15/09/2024",
        endDate: "02/06/2025",
        bullets: [
          "CCTV camera systems (IP & Analog) installation, cabling, and NVR/DVR configuration",
          "Point-to-point wireless internet (P2P) infrastructure deployment and alignment",
          "Desktop and laptop component diagnostics, repair, and operating system reinstalls",
        ],
        technologies: ["CCTV", "P2P Wireless", "Hardware Repair", "Structured Cabling"],
      },
    ],
  },
  skillsPage: {
    title: "Technical Skills & Competencies",
    description:
      "Comprehensive breakdown of systems administration, networking protocols, security hardware, and business software.",
    categories: [
      {
        category: "Systems",
        items: ["Windows Server", "Windows 10/11 Deployment", "VMware", "VirtualBox", "Active Directory Basics"],
      },
      {
        category: "Networking",
        items: [
          "Cisco Switch/Router",
          "Fortinet Firewall",
          "MikroTik (Switch/Router Configuration)",
          "UBNT P2P Wireless Solutions",
          "VLAN & Subnetting",
          "DHCP & DNS Management",
        ],
      },
      {
        category: "Security Systems",
        items: ["IP Camera Systems", "Analog Camera (CCTV)", "NVR / DVR Setup & Configuration", "Remote Video Surveillance"],
      },
      {
        category: "Infrastructure",
        items: [
          "Structured Cabling (Cat6/Cat6A)",
          "Patch Panel Termination",
          "Server Rack Organization",
          "Server Hardware Mounting",
          "Cable Testing & Labeling",
        ],
      },
      {
        category: "Software & ERP",
        items: [
          "Akınsoft ERP Installation & Management",
          "Commercial Business Suites",
          "MS SQL Server Setup & Backups",
          "End-User Technical Training",
        ],
      },
      {
        category: "Support & Operations",
        items: [
          "24/7 Remote & On-Site Helpdesk",
          "Hardware Troubleshooting & Repair",
          "OS Image Deployment",
          "System Backup & Disaster Recovery",
        ],
      },
    ],
  },
  certificationsPage: {
    title: "Certifications & Training",
    description:
      "Formal vocational certifications, specialized industry training programs, and ongoing continuous education.",
    emptyTitle: "Certifications in Progress",
    emptyDescription:
      "Currently pursuing advanced MikroTik, Ubiquiti, and Cybersecurity accreditations. Official credential records will be published here upon completion.",
    educationTitle: "Formal Vocational Education",
    education: [
      {
        institution: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
        field: "Information Technologies – Software Development",
        startDate: "2021",
        endDate: "2025",
        description:
          "Comprehensive vocational high school education covering software architecture, database management, network fundamentals, and server operating systems.",
      },
    ],
  },
  referencesPage: {
    title: "Professional References",
    description:
      "Contact information for business executives, managers, and mentors with whom I have worked directly.",
    privacyNote:
      "In adherence to personal privacy and security standards, contact numbers are masked by default. Click the button below to reveal verification details.",
    showContactInfo: "Show Contact Info",
    hideContactInfo: "Hide Info",
  },
  contactPage: {
    title: "Get in Touch",
    description:
      "For IT infrastructure inquiries, system administration projects, or open positions, feel free to fill out the form below or reach out directly.",
    form: {
      name: "Your Name",
      namePlaceholder: "e.g. John Doe",
      email: "Your Email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "e.g. Network Project / Job Inquiry",
      message: "Your Message",
      messagePlaceholder: "Describe your inquiry or project scope...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successMessage: "Your message has been sent successfully. I will get back to you shortly.",
      errorMessage: "An error occurred while sending your message. Please reach out via direct email or phone.",
    },
    info: {
      directEmail: "akdogankadir07@gmail.com",
      directPhone: "0 (552) 532 62 70",
      location: "Kepez / Antalya, Türkiye",
      workingHours: "Working Hours",
      workingHoursVal: "Monday – Saturday (08:30 – 19:00 TRT)",
    },
  },
  cvPage: {
    title: "Curriculum Vitae (CV)",
    backHome: "Back to Home",
    downloadPdf: "Download PDF",
    printCv: "Print Document",
    fallbackNotice:
      "If your browser cannot preview the PDF document directly, use the download button below to view the file on your device.",
  },
  footer: {
    tagline: "IT Support Specialist & Network/Systems Administrator — Enterprise IT solutions.",
    quickLinks: "Navigation",
    contactHeading: "Direct Contact",
    rightsReserved: "All rights reserved.",
  },
};
