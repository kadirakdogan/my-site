<p align="center">
  <img src="assets/banner.svg" alt="Kadir Akdoğan — IT Support Specialist & Network Administrator" width="100%" />
</p>

<p align="center">
  <strong>Modern, kurumsal ve yüksek performanslı kişisel portfolyo &amp; CV web sitesi.</strong><br />
  <em>A modern, enterprise-tier personal portfolio &amp; CV website built for high-performance presentation.</em>
</p>

<p align="center">
  <a href="https://kadirakdogan.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Canl%C4%B1%20Site-kadirakdogan.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://kadirakdogan.vercel.app/cv" target="_blank">
    <img src="https://img.shields.io/badge/CV%20G%C3%B6r%C3%BCnt%C3%BCle-PDF%20Viewer-10b981?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="View CV" />
  </a>
  <a href="https://kadirakdogan.vercel.app/contact" target="_blank">
    <img src="https://img.shields.io/badge/%C4%B0leti%C5%9Fim-Mesaj%20G%C3%B6nder-8b5cf6?style=for-the-badge&logo=minutemailer&logoColor=white" alt="Contact" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2014-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=blue" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Tema-Dark%20%2F%20Light-f59e0b?style=flat-square" alt="Dark/Light Mode" />
  <img src="https://img.shields.io/badge/Dil-TR%20%7C%20EN-6366f1?style=flat-square" alt="Bilingual" />
  <img src="https://img.shields.io/badge/Lisans-MIT-success?style=flat-square" alt="License" />
</p>

---

## 📌 Genel Bakış / Overview

Bu depo, **Kadir Akdoğan** (BT Destek Uzmanı / Ağ ve Sistem Yöneticisi) için özel olarak tasarlanmış kurumsal düzeydeki kişisel portfolyo, özgeçmiş ve interaktif CV platformunun kaynak kodlarını içerir.

Tasarım felsefesi; Apple ve Microsoft ekosistemlerinin benimsediği **monokrom tipografik hiyerarşi**, **mikro-etkileşimler**, **yüksek kontrastlı karanlık/aydınlık mod** ve **performans odaklı App Router mimarisi** üzerine inşa edilmiştir.

> 🌐 **Canlı Demo**: [https://kadirakdogan.vercel.app](https://kadirakdogan.vercel.app)

---

## 📸 Ekran Görüntüleri / Visual Showcase

### 🌓 1. Ana Sayfa & Tema Desteği (Dark & Light Mode)
Kullanıcının sistem tercihini otomatik algılayan, sıfır gecikmeli ve yüksek kontrastlı monokrom çift tema deneyimi:

| 🌙 Koyu Tema (Dark Mode - Signature Look) | ☀️ Açık Tema (Light Mode) |
| :---: | :---: |
| <img src="assets/screenshots/preview-home-dark.png" alt="Dark Mode Hero Preview" width="100%" /> | <img src="assets/screenshots/preview-home-light.png" alt="Light Mode Hero Preview" width="100%" /> |

---

### 💼 2. Deneyim & Kariyer Geçmişi (`/experience`)
Ters-kronolojik formatta yapılandırılmış kurumsal pozisyonlar, operasyonel kazanımlar ve her pozisyonda kullanılan spesifik teknolojiler:

<p align="center">
  <img src="assets/screenshots/preview-experience.png" alt="Deneyim Sayfası Önizlemesi" width="100%" />
</p>

---

### 🛠️ 3. Teknik Yetenek Matrisi (`/skills`)
Sistemler, Ağ Teknolojileri, Güvenlik (CCTV/NVR), Saha & Yapısal Kablolama, Yazılım & ERP (Akınsoft) ve Kullanıcı Destek operasyonlarını kategorize eden dinamik matris:

<p align="center">
  <img src="assets/screenshots/preview-skills.png" alt="Teknik Yetenekler Önizlemesi" width="100%" />
</p>

---

### 📄 4. Entegre İnteraktif CV Görüntüleyici (`/cv`)
Tarayıcı içinde çalışan gömülü PDF okuyucu (`<object>` ve iframe fallback), doğrudan indirme butonu, yeni sekmede açma ve optimize edilmiş `@media print` baskı desteği:

<p align="center">
  <img src="assets/screenshots/preview-cv.png" alt="CV Görüntüleyici Önizlemesi" width="100%" />
</p>

---

### 📱 5. Mobil Uyumluluk & İletişim Formu (`/contact`)

| 📱 Mobil Uyumlu Görünüm (Responsive) | 📬 Güvenli İletişim Formu (Resend API) |
| :---: | :---: |
| <img src="assets/screenshots/preview-mobile.png" alt="Mobil Görünüm" width="90%" /> | <img src="assets/screenshots/preview-contact.png" alt="İletişim Formu" width="100%" /> |

---

## 🌟 Öne Çıkan Özellikler / Key Highlights

- **⚡ Next.js 14 App Router & React 18**: Hızlı ilk sayfa yüklemesi (FCP), optimize edilmiş statik sayfalar ve sunucu taraflı render avantajları.
- **🇹🇷 / 🇬🇧 Çift Dil Desteği (Bilingual Context)**: Sayfa yenilenmesine gerek kalmadan anında Türkçe ve İngilizce içerik değişimi. Tercih `localStorage` üzerinde saklanır.
- **🌓 Kusursuz Tema Sistemi (next-themes)**: Yanıp sönme (FOUC) yapmayan, CSS custom variables tabanlı Dark ve Light mod geçişi.
- **🎨 Framer Motion Animasyonları**: Zarif scroll animasyonları, donanım ivmeli fade-in geçişleri ve `prefers-reduced-motion` erişilebilirlik desteği.
- **✉️ Sunucusuz İletişim Altyapısı (Next.js Serverless Route)**: `/api/contact` üzerinden Resend e-posta servisine doğrudan bağlantı, form doğrulama ve spam avcısı (honeypot field) koruması.
- **🔒 Kurumsal Güvenlik Başlıkları (CSP & HSTS)**: `next.config.mjs` içerisinde yapılandırılmış Content Security Policy, X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`).
- **🔍 Arama Motoru Optimizasyonu (SEO & OpenGraph)**: JSON-LD `Person` şeması, otomatik `sitemap.xml`, `robots.txt` ve sosyal medya için OG Image kartları.
- **🖨️ Yazdırma Dostu (Print-Ready)**: Doğrudan `Cmd+P` veya `Ctrl+P` yapıldığında gezinme çubuklarını gizleyen ve salt okunur A4 formatı sunan `@media print` stilleri.

---

## 🛠️ Teknoloji Mimarisi / Tech Stack

| Kategori | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | React tabanlı tam kapsamlı üretim çatısı |
| **Dil** | TypeScript | Tip güvenli ve ölçeklenebilir kod tabanı |
| **Stil / CSS** | Tailwind CSS & Vanilla CSS | Katı monokrom tasarım sistemi ve CSS değişkenleri |
| **Animasyon** | Framer Motion | Mikro-etkileşimler ve scroll görünürlük efektleri |
| **Tema** | next-themes | SSR uyumlu tema yönetimi |
| **E-Posta** | Resend API | İletişim formu için sunucusuz e-posta gönderimi |
| **Ekran Yakalama** | Puppeteer-Core | Yüksek çözünürlüklü otomatik ekran görüntüsü üretimi |
| **Dağıtım** | Vercel | Küresel kenar ağında (Edge CDN) sıfır yapılandırmalı yayınlama |

---

## 📁 Proje Dizin Yapısı / Directory Tree

```text
kadir-akdogan-portfolio/
├── assets/                       # GitHub depolama görselleri ve banner'lar
│   ├── banner.svg                # Vektörel dinamik README başlık görseli
│   └── screenshots/              # Retina çözünürlükte ekran alıntıları
│       ├── preview-home-dark.png
│       ├── preview-home-light.png
│       ├── preview-experience.png
│       ├── preview-skills.png
│       ├── preview-certifications.png
│       ├── preview-cv.png
│       ├── preview-contact.png
│       └── preview-mobile.png
├── public/                       # Statik web varlıkları (CDN tarafından sunulan)
│   ├── cv/
│   │   └── kadir-akdogan-cv.pdf  # Güncel profesyonel özgeçmiş PDF belgesi
│   ├── images/
│   │   └── profile.jpg           # Yüksek çözünürlüklü profil fotoğrafı
│   ├── screenshots/              # Genel web erişimli ekran görüntüleri
│   ├── favicon.svg
│   └── og-image.svg
├── scripts/
│   └── capture-screenshots.mjs   # Otomatik ekran görüntüsü alma scripti (Puppeteer)
├── src/
│   ├── app/                      # Next.js App Router Sayfaları ve Endpoint'ler
│   │   ├── api/contact/route.ts  # Resend destekli güvenli iletişim API'si
│   │   ├── certifications/       # Sertifikalar ve eğitim sayfası
│   │   ├── contact/              # İletişim sayfası
│   │   ├── cv/                   # İnteraktif PDF CV önizleme & indirme sayfası
│   │   ├── experience/           # İş deneyimi ve kariyer sayfası
│   │   ├── references/           # Maskeleme korumalı referanslar sayfası
│   │   ├── skills/               # Teknik yetenekler matrisi sayfası
│   │   ├── globals.css           # Monokrom CSS değişkenleri ve baskı stilleri
│   │   ├── layout.tsx            # Root layout, Header, Footer & JSON-LD şeması
│   │   ├── not-found.tsx         # Özel 404 sayfası
│   │   ├── robots.ts             # Robots.txt üreticisi
│   │   └── sitemap.ts            # XML Sitemap üreticisi
│   ├── components/               # Yeniden kullanılabilir React bileşenleri
│   │   ├── ui/                   # Badge, Button, Card, SectionHeading
│   │   ├── Header.tsx            # Yapışkan (Sticky) navigasyon ve geçiş anahtarları
│   │   ├── Footer.tsx            # Kurumsal alt bilgi
│   │   └── ScrollReveal.tsx      # Framer Motion kaydırma kapsayıcısı
│   ├── context/
│   │   └── LanguageContext.tsx   # İki dilli (TR/EN) durum yöneticisi
│   ├── data/                     # İçerik ve veri modelleri
│   │   ├── content.tr.ts         # Türkçe ana metinler
│   │   ├── content.en.ts         # İngilizce tercümeler
│   │   ├── certifications.ts     # Sertifika kayıtları
│   │   └── references.ts         # Referans kayıtları
│   └── lib/
│       └── types.ts              # TypeScript arayüz tanımları
├── next.config.mjs               # CSP güvenlik başlıkları ve Next yapılandırması
├── tailwind.config.ts            # Özel font ve monokrom renk token'ları
└── package.json
```

---

## 🚀 Hızlı Başlangıç / Getting Started

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/kadirakdogan/my-site.git
cd my-site
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Çevre Değişkenlerini Tanımlayın (Opsiyonel)
İletişim formundan e-posta almak istiyorsanız kök dizinde `.env.local` dosyası oluşturun:
```env
RESEND_API_KEY=re_ornek_resend_anahtariniz
```
*(Not: `RESEND_API_KEY` girilmediğinde form geliştirici modunda çalışır ve gönderilen mesajları güvenle sunucu konsoluna kaydeder).*

### 4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızdan [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyin.

### 5. Yeni Ekran Görüntüleri Oluşturma
Sitede tasarım veya içerik güncellemesi yaptığınızda, README ekran görüntülerini tek komutla otomatik yenileyebilirsiniz:
```bash
npm run screenshots
```

---

## 📝 İçerik Güncelleme Kılavuzu / Content Customization

| Yapılacak İşlem | İlgili Dosya Yolu | Açıklama |
| :--- | :--- | :--- |
| **Yeni İş Deneyimi Ekleme** | `src/data/content.tr.ts`<br />`src/data/content.en.ts` | `experiencePage.items` dizisine yeni pozisyon objesi ekleyin. |
| **Teknik Yetenek Güncelleme** | `src/data/content.tr.ts`<br />`src/data/content.en.ts` | `skillsPage.categories` altında yetenek etiketlerini düzenleyin. |
| **Sertifika Ekleme** | `src/data/certifications.ts` | `certifications` dizisine yeni sertifika veya eğitim kaydı ekleyin. |
| **Referans Ekleme** | `src/data/references.ts` | `references` dizisine isim, kurum, unvan ve telefon bilgisi ekleyin. |
| **CV PDF Belgesini Güncelleme** | `public/cv/kadir-akdogan-cv.pdf` | Yeni PDF dosyanızı bu konuma aynı isimle kaydedin. |
| **Profil Fotoğrafını Değiştirme** | `public/images/profile.jpg` | Yeni portre fotoğrafınızı bu konuma yerleştirin. |

---

## 🌐 Canlı Yayınlama / Deployment (Vercel)

Web sitesi Vercel üzerinde tek tıkla canlıya alınacak biçimde yapılandırılmıştır:

1. Değişikliklerinizi GitHub'a gönderin:
   ```bash
   git add .
   git commit -m "feat: update portfolio content and showcase"
   git push origin main
   ```
2. [Vercel Dashboard](https://vercel.com/new) üzerinden `kadirakdogan/my-site` deposunu bağlayın.
3. Framework Preset otomatik olarak **Next.js** olarak algılanır.
4. **Deploy** butonuna tıklayın. Her `main` dalı güncellemesinde siteniz otomatik olarak derlenip güncellenecektir.

---

## 📬 İletişim / Contact

- **Ad Soyad**: Kadir Akdoğan
- **Unvan**: BT Destek Uzmanı / Ağ ve Sistem Yöneticisi
- **Konum**: Kepez / Antalya, Türkiye
- **E-Posta**: [akdogankadir07@gmail.com](mailto:akdogankadir07@gmail.com)
- **Web Sitesi**: [kadirakdogan.vercel.app](https://kadirakdogan.vercel.app)
- **GitHub**: [@kadirakdogan](https://github.com/kadirakdogan)

---

<p align="center">
  <sub>Tasarım ve mimari: <strong>Kadir Akdoğan</strong> • &copy; 2026 Tüm Hakları Saklıdır.</sub>
</p>
