# 🚀 TaskFlow - Task & Project Management App

<div align="center">
  <img src="./screenshots/00-home-overview.png" alt="TaskFlow Ana Görünüm" width="100%" style="border-radius: 10px;" />
  <p><em>Modern, duyarlı ve performanslı görev yönetim paneli / Modern, responsive and high-performance task management interface</em></p>

  <p>
    <a href="https://github.com/KULLANICI_ADIN/TaskFlow" target="_blank"><strong>📦 GitHub Deposu (Repository) »</strong></a>
    &nbsp;&nbsp;•&nbsp;&nbsp;
    <a href="https://SENIN-NETLIFY-ADRESIN.netlify.app" target="_blank"><strong>🌐 Canlı Demo (Live Demo) »</strong></a>
  </p>
</div>

---

## 📸 Ekran Görüntüleri / Screenshots

| 01. Ekleme ve Listeleme (Create & Read) | 02. Durum Güncelleme (Update) | 03. Silme & Boş Durum (Delete) |
| :---: | :---: | :---: |
| <img src="./screenshots/01-create-and-list.png" width="100%" alt="Görev Ekleme ve Listeleme" /> | <img src="./screenshots/02-update-task.png" width="100%" alt="Görev Durum Güncelleme" /> | <img src="./screenshots/03-delete-empty-state.png" width="100%" alt="Görev Silme ve Boş Liste" /> |

---

## 🇹🇷 Türkçe Dokümantasyon

### 📌 Proje Hakkında
**TaskFlow**, ekiplerin ve bireylerin günlük görevlerini planlamasını, önceliklendirmesini ve yaşam döngülerini kolayca yönetmesini sağlayan modern bir Tek Sayfa Uygulamasıdır (SPA). React ekosistemi ve modern web standartları temel alınarak geliştirilmiştir.

### 🛠️ Kullanılan Teknolojiler
* **Frontend Framework:** React 18/19 (Vite tabanlı)
* **Arayüz & Stil:** Tailwind CSS (Modern Dark Mode Arayüzü)
* **State Yönetimi:** React Hooks (`useState`, `useEffect`)
* **Kalıcı Depolama:** Tarayıcı Yerel Hafızası (`localStorage`)
* **Versiyon Kontrolü:** Git & GitHub
* **Canlı Yayın (Deployment):** Netlify

### ✨ Temel Özellikler (CRUD Operasyonları)
* **Görev Ekleme (Create):** Görev başlığı, detaylı açıklama, öncelik seviyesi (Düşük, Orta, Yüksek) ve atanan kişi bilgisi ile yeni kayıt oluşturma.
* **Dinamik Listeleme (Read):** Öncelik derecesine göre renklendirilmiş kartlar ve anlık aktif görev sayacı.
* **Durum Güncelleme (Update):** Görevleri tek tıkla tamamlandı olarak işaretleme, üstünü çizme ve istendiğinde geri alabilme.
* **Görev Silme (Delete):** Tamamlanan veya iptal edilen görevleri pano üzerinden tamamen kaldırma.
* **Kalıcı Hafıza:** Sayfa yenilendiğinde verilerin kaybolmaması için çift yönlü `localStorage` senkronizasyonu.

### 🚀 Kurulum ve Yerel Çalıştırma
```bash
# 1. Depoyu klonlayın
git clone [https://github.com/KULLANICI_ADIN/TaskFlow.git](https://github.com/KULLANICI_ADIN/TaskFlow.git)
cd TaskFlow

# 2. Gerekli bağımlılıkları yükleyin
npm install

# 3. Geliştirici sunucusunu başlatın
npm run dev