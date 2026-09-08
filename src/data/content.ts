import type { EducationItem, ExperienceItem, SkillCategory } from "@/lib/types";

export const personalInfo = {
  name: "Kadir Akdoğan",
  title: "IT Support Specialist / Network & Systems Administrator",
  tagline:
    "Building reliable infrastructure and delivering business-focused IT solutions — from network architecture to endpoint support.",
  summary:
    "IT professional with hands-on experience in technical support, network and systems administration, and infrastructure management. Practical expertise in MikroTik and Ubiquiti networking technologies, IP/analog camera (CCTV) systems, structured cabling, and Akınsoft business software solutions. Vocational training in software development, networking, and server technologies, with a strong personal interest in cybersecurity. Known for analytical problem-solving, attention to detail, and delivering reliable, business-focused IT solutions.",
  email: "kadir.akdogan@example.com",
  phone: "+90 5XX XXX XX XX",
  location: "Türkiye",
};

export const experience: ExperienceItem[] = [
  {
    company: "Akınsoft Başer Bilişim",
    role: "Technical Service Specialist",
    startDate: "",
    endDate: "Current",
    bullets: [
      "Akınsoft installation, network configuration, client training",
    ],
  },
  {
    company: "Paçacı Şemsi",
    role: "IT / Data Processing Manager",
    startDate: "",
    endDate: "~3 months",
    bullets: [
      "Centralized software management across a 5-branch business",
      "Network and hardware infrastructure setup",
      "On-site technical support for hardware, system, and network issues",
    ],
  },
  {
    company: "Akınsoft Başer Bilişim",
    role: "Technical Service",
    startDate: "01/09/2025",
    endDate: "02/03/2026",
    bullets: [
      "Akınsoft ERP and commercial software installation, database setup, user training",
      "Hardware fault resolution, system updates, periodic maintenance",
    ],
  },
  {
    company: "Kent Bilgisayar",
    role: "IT Support Intern",
    startDate: "15/09/2024",
    endDate: "02/06/2025",
    bullets: [
      "CCTV installation and configuration",
      "Point-to-point wireless internet infrastructure services",
      "Desktop/laptop hardware repair and diagnostics",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Systems",
    items: ["Windows Server", "10/11 Deployment", "VMware/VirtualBox"],
  },
  {
    category: "Networking",
    items: [
      "Cisco",
      "Fortinet",
      "MikroTik (Switch/Router)",
      "UBNT Point-to-Point Wireless",
    ],
  },
  {
    category: "Security Systems",
    items: ["IP/Analog Camera (CCTV)", "NVR/DVR Installation"],
  },
  {
    category: "Infrastructure",
    items: [
      "Structured Cabling",
      "Patch Panel Termination",
      "Rack/Server Hardware Installation",
    ],
  },
  {
    category: "Software",
    items: ["Akınsoft ERP Installation & Management"],
  },
  {
    category: "Support",
    items: ["24/7 Remote & On-Site Helpdesk"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
    field: "Information Technologies – Software Development",
    startDate: "2021",
    endDate: "2025",
  },
];