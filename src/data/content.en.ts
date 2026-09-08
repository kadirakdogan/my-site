import type { SiteContent } from "@/lib/types";

export const contentEn: SiteContent = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    viewCv: "View CV",
  },
  hero: {
    name: "Kadir Akdoğan",
    title: "IT Support Specialist / Network & Systems Administrator",
    statement:
      "Building resilient IT infrastructure and delivering reliable, business-driven technical solutions — from network routing to client endpoint support.",
    downloadCv: "Download CV",
    contactBtn: "Contact Me",
  },
  about: {
    sectionNumber: "01",
    sectionTitle: "About",
    summary:
      "IT professional with hands-on experience in technical support, network and systems administration, and infrastructure management. Practical expertise in MikroTik and Ubiquiti networking technologies, IP/analog camera (CCTV) systems, and Akınsoft business software solutions. Vocational training in software development, networking, and server technologies, with a strong personal interest in cybersecurity. Known for analytical problem-solving, attention to detail, and delivering reliable, business-focused IT solutions.",
    stats: [
      { value: "4+", label: "Companies / Roles" },
      { value: "2+", label: "Years Field Experience" },
      { value: "3", label: "Core Competency Areas" },
    ],
    coreAreas: [
      "Network & Systems Infrastructure",
      "Security & CCTV Systems",
      "Enterprise ERP & Hardware Maintenance",
    ],
  },
  experience: {
    sectionNumber: "02",
    sectionTitle: "Work Experience",
    items: [
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
    ],
  },
  skills: {
    sectionNumber: "03",
    sectionTitle: "Technical Capabilities",
    categories: [
      {
        category: "Systems",
        items: ["Windows Server", "10/11 Deployment", "VMware/VirtualBox"],
      },
      {
        category: "Networking",
        items: [
          "Cisco",
          "Fortinet",
          "MikroTik (Switch/Router Configuration)",
          "UBNT P2P Wireless Solutions",
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
    ],
  },
  education: {
    sectionNumber: "04",
    sectionTitle: "Education",
    items: [
      {
        institution: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
        field: "Information Technologies – Software Development",
        startDate: "2021",
        endDate: "2025",
      },
    ],
  },
  contact: {
    sectionNumber: "05",
    sectionTitle: "Contact",
    headline: "Let's work",
    headlineHighlight: "together.",
    description:
      "Whether you need robust network deployment, systems administration, or on-site IT support, feel free to reach out.",
    email: "kadir.akdogan@example.com",
    emailLabel: "Email",
    phone: "+90 5XX XXX XX XX",
    phoneLabel: "Phone",
    location: "Türkiye",
    locationLabel: "Location",
    ctaButton: "Get in Touch",
  },
  cvPage: {
    title: "Curriculum Vitae (CV)",
    backHome: "Back to Home",
    downloadPdf: "Download PDF",
    fallbackNotice:
      "If your browser doesn't support PDF preview, use the download button below to view the file directly.",
  },
  footer: {
    rightsReserved: "All rights reserved.",
    builtWith: "Built with Next.js",
  },
};
