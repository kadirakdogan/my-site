# Git Auto-Push Rule

Herhangi bir kod yazma, düzenleme, bileşen ekleme veya hata düzeltme işlemi tamamlandığında:
1. Projenin derlemesini doğrula (`npm run build`).
2. Değişiklikleri anlamlı bir commit mesajı ile git'e ekle (`git add -A && git commit -m "..."`).
3. Her zaman GitHub'daki `origin/main` dalına otomatik olarak pushla (`git push origin main`).
