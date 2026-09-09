import type { SiteContent } from "@/lib/types";

export const contentTr: SiteContent = {
  nav: {
    home: "Genel Bakış",
    experience: "Deneyim",
    skills: "Yetenekler",
    certifications: "Sertifikalar",
    references: "Referanslar",
    contact: "İletişim",
    viewCv: "CV İncele",
  },
  hero: {
    name: "Kadir Akdoğan",
    title: "BT Destek Uzmanı / Ağ ve Sistem Yöneticisi",
    statement:
      "Ağ altyapısı kurulumu, sistem yönetimi ve kurumsal yazılım çözümlerinde operasyonel kararlılık sağlayan uçtan uca BT desteği.",
    downloadCv: "CV İndir",
    contactBtn: "İletişime Geç",
    viewExperience: "Deneyimi İncele",
    availableForWork: "Yeni Projeler ve İş Tekliflerine Açık",
  },
  home: {
    aboutBadge: "Hakkımda",
    aboutTitle: "Güvenilir, İşletme Odaklı BT Yönetimi",
    aboutSummary:
      "Teknik destek, ağ ve sistem yönetimi ile altyapı yönetimi alanlarında uygulamalı deneyime sahip bir BT profesyoneliyim. MikroTik ve Ubiquiti ağ teknolojileri, IP/analog kamera sistemleri ve Akınsoft işletme yazılımları konusunda pratik uzmanlığa sahibim. Yazılım geliştirme, ağ ve sunucu teknolojileri alanlarında mesleki eğitim aldım; siber güvenlik konusuna kişisel ilgim güçlü. Analitik problem çözme, detaylara dikkat ve güvenilir BT çözümleri sunma odaklı çalışıyorum.",
    experienceBadge: "Kariyer Özeti",
    experienceTitle: "Öne Çıkan Deneyimler",
    viewAllExperience: "Tüm Deneyim Geçmişini Görüntüle",
    skillsBadge: "Yetkinlikler",
    skillsTitle: "Temel Teknik Uzmanlıklar",
    viewAllSkills: "Detaylı Yetenek Matrisini Görüntüle",
    highlightsTitle: "Rakamlarla Saha Tecrübesi",
    highlights: [
      {
        value: "4+",
        label: "Kurumsal Pozisyon",
        description: "Teknik servis, bilgi işlem yönetimi ve saha stajı süreçleri",
      },
      {
        value: "5",
        label: "Şube Altyapı Yönetimi",
        description: "Merkezi ERP, donanım ve ağ koordinasyonu",
      },
      {
        value: "2+",
        label: "Yıl Saha Deneyimi",
        description: "Yerinde ve uzaktan 7/24 kesintisiz teknik destek",
      },
    ],
    languagesTitle: "Dil Yetkinlikleri",
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "A2 (Teknik Dokümantasyon Düzeyi)" },
    ],
  },
  experiencePage: {
    title: "İş Deneyimi & Profesyonel Geçmiş",
    description:
      "Sistem kurulumu, ERP yönetimi, yapısal kablolama ve ağ yapılandırması alanlarında üstlendiğim sorumluluklar.",
    items: [
      {
        company: "Akınsoft Başer Bilişim",
        role: "Teknik Servis Sorumlusu",
        startDate: "",
        endDate: "Güncel",
        bullets: [
          "Akınsoft kurulumu, ağ yapılandırması ve müşteri eğitimi",
          "İstemci ve sunucu düzeyinde ağ yapılandırmaları ve donanım entegrasyonu",
          "Kullanıcı süreçlerine yönelik yerinde ve uzaktan teknik danışmanlık",
        ],
        technologies: ["Akınsoft ERP", "Windows Server", "Ağ Yapılandırması", "Müşteri Eğitimi"],
      },
      {
        company: "Paçacı Şemsi",
        role: "Bilgi İşlem Sorumlusu",
        startDate: "",
        endDate: "~3 ay",
        bullets: [
          "5 şubeli işletmenin merkezi yazılım ve veri işleme yönetimi",
          "Şubeler arası ağ ve donanım altyapısı kurulumu ve optimizasyonu",
          "Şubelerde meydana gelen donanım, sistem ve ağ sorunlarına yerinde teknik destek",
        ],
        technologies: ["Merkezi Yönetim", "Router/Switch", "Şube Ağı", "Donanım Bakımı"],
      },
      {
        company: "Akınsoft Başer Bilişim",
        role: "Teknik Servis",
        startDate: "01/09/2025",
        endDate: "02/03/2026",
        bullets: [
          "Akınsoft ERP ve ticari yazılım kurulumu, veritabanı yapılandırması ve kullanıcı eğitimi",
          "Donanım arıza giderme, sistem güncellemeleri ve periyodik sunucu bakımı",
          "Müşteri lokasyonlarında SQL veritabanı yedekleme ve sistem kurtarma operasyonları",
        ],
        technologies: ["SQL Veritabanı", "Ticari Yazılım", "Sistem Güncelleme", "Arıza Tespiti"],
      },
      {
        company: "Kent Bilgisayar",
        role: "Staj",
        startDate: "15/09/2024",
        endDate: "02/06/2025",
        bullets: [
          "Kamera sistemleri (CCTV, IP ve Analog) kurulumu, NVR/DVR yapılandırması",
          "Noktadan noktaya kablosuz internet (P2P) altyapı hizmetleri kurulumu",
          "Masaüstü ve dizüstü donanım tamiri, bileşen değişimi ve arıza tespiti",
        ],
        technologies: ["CCTV", "P2P Wireless", "Donanım Onarımı", "Yapısal Kablolama"],
      },
    ],
  },
  skillsPage: {
    title: "Teknik Yetenekler & Uzmanlık Alanları",
    description:
      "Ağ yönetimi, sunucu altyapısı, güvenlik sistemleri ve donanım süreçlerinde aktif kullanılan teknolojiler.",
    categories: [
      {
        category: "Sistemler",
        items: ["Windows Server", "Windows 10/11 Kurulumu & Dağıtımı", "VMware", "VirtualBox", "Active Directory Temelleri"],
      },
      {
        category: "Ağ Teknolojileri",
        items: [
          "Cisco Switch/Router",
          "Fortinet Güvenlik Duvarı",
          "MikroTik (Switch/Router Yapılandırması)",
          "UBNT P2P Kablosuz Çözümler",
          "VLAN & Alt Ağ Yapılandırması",
          "DHCP / DNS Yönetimi",
        ],
      },
      {
        category: "Güvenlik Sistemleri",
        items: ["IP Kamera Sistemleri", "Analog Kamera (CCTV)", "NVR / DVR Kurulumu ve Yapılandırması", "Uzaktan Kamera İzleme Erişimi"],
      },
      {
        category: "Altyapı & Saha",
        items: [
          "Yapısal Kablolama (Cat6/Cat6A)",
          "Patch Panel Sonlandırma",
          "Rack Kabin Düzenleme",
          "Sunucu Donanım Montajı",
          "Kablo Test & Etiketleme",
        ],
      },
      {
        category: "Yazılım & ERP",
        items: [
          "Akınsoft ERP Kurulum ve Yönetimi",
          "Akınsoft Ticari Çözümler",
          "MS SQL Veritabanı Kurulumu & Yedekleme",
          "Son Kullanıcı Eğitimleri",
        ],
      },
      {
        category: "Destek & Operasyon",
        items: [
          "7/24 Uzaktan ve Yerinde Helpdesk",
          "Donanım Arıza Tespiti & Onarımı",
          "İşletim Sistemi İmaj Dağıtımı",
          "Yedekleme & Geri Yükleme Prosedürleri",
        ],
      },
    ],
  },
  certificationsPage: {
    title: "Sertifikalar ve Mesleki Eğitim",
    description:
      "Tamamlanan mesleki eğitim programları, resmi sertifikasyonlar ve devam eden gelişim süreçleri.",
    emptyTitle: "Sertifikasyon Hazırlık Aşaması",
    emptyDescription:
      "MikroTik, Ubiquiti ve Siber Güvenlik sertifikasyon süreçleri devam etmektedir. Resmi sertifika kayıtları tamamlandıkça bu alanda yayınlanacaktır.",
    educationTitle: "Örgün Mesleki Eğitim",
    education: [
      {
        institution: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
        field: "Bilişim Teknolojileri – Yazılım Geliştirme",
        startDate: "2021",
        endDate: "2025",
        description:
          "Yazılım prensipleri, veritabanı mimarisi, ağ temelleri ve sunucu sistemleri üzerine kapsamlı mesleki lise eğitimi.",
      },
    ],
  },
  referencesPage: {
    title: "Mesleki Referanslar",
    description:
      "Birlikte çalıştığım işletme yöneticileri ve kurum yetkililerinin referans bilgileri.",
    privacyNote:
      "Kişisel verilerin gizliliği ve güvenlik prensipleri doğrultusunda referans iletişim numaraları maskelenmiştir. Detaylı doğrulama için aşağıdaki butonu kullanarak bilgileri görüntüleyebilirsiniz.",
    showContactInfo: "İletişim Bilgisini Göster",
    hideContactInfo: "Bilgiyi Gizle",
  },
  contactPage: {
    title: "İletişime Geçin",
    description:
      "Ağ altyapısı, kurumsal IT desteği veya açık pozisyonlar hakkında görüşmek için aşağıdaki formu doldurabilir ya da doğrudan iletişim kanallarını kullanabilirsiniz.",
    form: {
      name: "Adınız Soyadınız",
      namePlaceholder: "Örn. Ahmet Yılmaz",
      email: "E-Posta Adresiniz",
      emailPlaceholder: "ahmet@ornek.com",
      subject: "Konu",
      subjectPlaceholder: "Örn. Ağ Altyapısı Projesi / İş Teklifi",
      message: "Mesajınız",
      messagePlaceholder: "Talebinizi veya proje detaylarınızı buraya yazabilirsiniz...",
      submitBtn: "Mesajı Gönder",
      submittingBtn: "Gönderiliyor...",
      successMessage: "Mesajınız başarıyla iletildi. En kısa sürede dönüş sağlayacağım.",
      errorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan e-posta veya telefon ile ulaşın.",
    },
    info: {
      directEmail: "akdogankadir07@gmail.com",
      directPhone: "0 (552) 532 62 70",
      location: "Kepez / Antalya, Türkiye",
      workingHours: "Çalışma Saatleri",
      workingHoursVal: "Pazartesi – Cumartesi (08:30 – 19:00)",
    },
  },
  cvPage: {
    title: "Özgeçmiş Belgesi (CV)",
    backHome: "Ana Sayfaya Dön",
    downloadPdf: "PDF Olarak İndir",
    printCv: "Yazdır (Print)",
    fallbackNotice:
      "Tarayıcınız PDF önizleme eklentisini desteklemiyorsa, belgeyi aşağıdaki butona tıklayarak doğrudan cihazınıza indirebilirsiniz.",
  },
  footer: {
    tagline: "BT Destek Uzmanı & Ağ/Sistem Yöneticisi — Güvenilir kurumsal altyapı çözümleri.",
    quickLinks: "Hızlı Bağlantılar",
    contactHeading: "Doğrudan İletişim",
    rightsReserved: "Tüm hakları saklıdır.",
    builtWith: "Next.js & TypeScript ile geliştirildi",
  },
};
