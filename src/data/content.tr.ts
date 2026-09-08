import type { SiteContent } from "@/lib/types";

export const contentTr: SiteContent = {
  nav: {
    about: "Hakkımda",
    experience: "Deneyim",
    skills: "Yetenekler",
    education: "Eğitim",
    contact: "İletişim",
    viewCv: "CV İncele",
  },
  hero: {
    name: "Kadir Akdoğan",
    title: "BT Destek Uzmanı / Ağ ve Sistem Yöneticisi",
    statement:
      "Ağ mimarisinden uç nokta desteğine, güvenilir BT altyapıları ve işletme odaklı teknolojik çözümler üretiyorum.",
    downloadCv: "CV İndir",
    contactBtn: "İletişime Geç",
  },
  about: {
    sectionNumber: "01",
    sectionTitle: "Hakkımda",
    summary:
      "Teknik destek, ağ ve sistem yönetimi ile altyapı yönetimi alanlarında uygulamalı deneyime sahip bir BT profesyoneliyim. MikroTik ve Ubiquiti ağ teknolojileri, IP/analog kamera sistemleri ve Akınsoft işletme yazılımları konusunda pratik uzmanlığa sahibim. Yazılım geliştirme, ağ ve sunucu teknolojileri alanlarında mesleki eğitim aldım; siber güvenlik konusuna kişisel ilgim güçlü. Analitik problem çözme, detaylara dikkat ve güvenilir BT çözümleri sunma odaklı çalışıyorum.",
    stats: [
      { value: "4+", label: "Kurumsal Deneyim" },
      { value: "2+", label: "Yıl Aktif Saha Tecrübesi" },
      { value: "3", label: "Temel Uzmanlık Alanı" },
    ],
    coreAreas: [
      "Ağ & Sistem Altyapısı",
      "Güvenlik & CCTV Sistemleri",
      "Kurumsal ERP ve Donanım Desteği",
    ],
  },
  experience: {
    sectionNumber: "02",
    sectionTitle: "İş Deneyimi",
    items: [
      {
        company: "Akınsoft Başer Bilişim",
        role: "Teknik Servis Sorumlusu",
        startDate: "",
        endDate: "Güncel",
        bullets: [
          "Akınsoft kurulumu, ağ yapılandırması, müşteri eğitimi",
        ],
      },
      {
        company: "Paçacı Şemsi",
        role: "Bilgi İşlem Sorumlusu",
        startDate: "",
        endDate: "~3 ay",
        bullets: [
          "5 şubeli işletmenin merkezi yazılım yönetimi",
          "Ağ ve donanım altyapısı kurulumu",
          "Şubelerde donanım, sistem ve ağ sorunlarına yerinde teknik destek",
        ],
      },
      {
        company: "Akınsoft Başer Bilişim",
        role: "Teknik Servis",
        startDate: "01/09/2025",
        endDate: "02/03/2026",
        bullets: [
          "Akınsoft ERP ve ticari yazılım kurulumu, veritabanı yapılandırması, kullanıcı eğitimi",
          "Donanım arıza giderme, sistem güncellemeleri, periyodik bakım",
        ],
      },
      {
        company: "Kent Bilgisayar",
        role: "Staj",
        startDate: "15/09/2024",
        endDate: "02/06/2025",
        bullets: [
          "Kamera sistemleri (CCTV) kurulumu ve yapılandırması",
          "Kablosuz internet (P2P) altyapı hizmetleri",
          "Masaüstü/dizüstü donanım tamiri ve arıza tespiti",
        ],
      },
    ],
  },
  skills: {
    sectionNumber: "03",
    sectionTitle: "Teknik Yetkinlikler",
    categories: [
      {
        category: "Sistemler",
        items: ["Windows Server", "10/11 Kurulumu", "VMware/VirtualBox"],
      },
      {
        category: "Ağ",
        items: [
          "Cisco",
          "Fortinet",
          "MikroTik (Switch/Router Yapılandırması)",
          "UBNT P2P Kablosuz Çözümler",
        ],
      },
      {
        category: "Güvenlik Sistemleri",
        items: ["IP/Analog Kamera (CCTV)", "NVR/DVR Kurulumu"],
      },
      {
        category: "Altyapı",
        items: [
          "Yapısal Kablolama",
          "Patch Panel Sonlandırma",
          "Rack/Sunucu Donanım Kurulumu",
        ],
      },
      {
        category: "Yazılım",
        items: ["Akınsoft ERP Kurulum ve Yönetimi"],
      },
      {
        category: "Destek",
        items: ["7/24 Uzaktan ve Yerinde Helpdesk"],
      },
    ],
  },
  education: {
    sectionNumber: "04",
    sectionTitle: "Eğitim",
    items: [
      {
        institution: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
        field: "Bilişim Teknolojileri – Yazılım Geliştirme",
        startDate: "2021",
        endDate: "2025",
      },
    ],
  },
  contact: {
    sectionNumber: "05",
    sectionTitle: "İletişim",
    headline: "Birlikte",
    headlineHighlight: "çalışalım.",
    description:
      "Ağ yönetimi, sistem altyapısı veya teknik destek konularında projeleriniz için her zaman iletişime geçebilirsiniz.",
    email: "kadir.akdogan@example.com",
    emailLabel: "E-Posta",
    phone: "+90 5XX XXX XX XX",
    phoneLabel: "Telefon",
    location: "Türkiye",
    locationLabel: "Konum",
    ctaButton: "Mesaj Gönder",
  },
  cvPage: {
    title: "Özgeçmiş (CV)",
    backHome: "Ana Sayfaya Dön",
    downloadPdf: "PDF Olarak İndir",
    fallbackNotice:
      "Tarayıcınız PDF önizlemesini desteklemiyorsa aşağıdaki butondan doğrudan indirebilirsiniz.",
  },
  footer: {
    rightsReserved: "Tüm hakları saklıdır.",
    builtWith: "Next.js ile hazırlandı",
  },
};
