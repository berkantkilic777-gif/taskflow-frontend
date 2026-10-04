# 🚀 TaskFlow - Task & Project Management Application

<div align="center">
  <img src="./screenshots/00-home-overview.png" alt="TaskFlow Ana Görünüm" width="100%" style="border-radius: 10px;" />
  <p><em>Modern, hızlı ve duyarlı görev ve proje yönetim paneli / Modern, responsive and high-performance task management interface</em></p>
  
  <p>
    <a href="https://github.com/KULLANICI_ADIN/TaskFlow"><strong>GitHub Deposu »</strong></a>
    ·
    <a href="https://taskflow-demo.netlify.app"><strong>Canlı Demo (Netlify) »</strong></a>
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
**TaskFlow**, ekiplerin ve bireylerin günlük görevlerini planlamasını, önceliklendirmesini ve yaşam döngülerini kolayca yönetmesini sağlayan modern bir tek sayfa uygulamasıdır (SPA). React ekosistemi ve modern web bileşenleri temel alınarak geliştirilmiştir.

### 🛠️ Kullanılan Teknolojiler
* **Frontend Framework:** React 18/19 (Vite tabanlı)
* **Arayüz & Stil:** Tailwind CSS (Koyu tema / Dark Mode)
* **State Yönetimi:** React Hooks (`useState`, `useEffect`)
* **Kalıcı Depolama:** Tarayıcı Yerel Hafızası (`localStorage`)
* **Versiyon Kontrolü:** Git & GitHub

### ✨ Temel Özellikler (CRUD Yetenekleri)
* **Görev Oluşturma (Create):** Başlık, açıklama, öncelik derecesi (Düşük, Orta, Yüksek) ve atanan kişi bilgisi ile yeni görevler ekleme.
* **Dinamik Listeleme (Read):** Öncelik seviyelerine göre renk kodlamalı kartlar ve anlık görev sayacı.
* **Durum Güncelleme (Update):** Görevleri tek tıkla "Tamamlandı" olarak işaretleme, üstü çizili stile geçirme veya işlemi geri alma.
* **Görev Silme (Delete):** Tamamlanan veya iptal edilen görevleri pano üzerinden kaldırma.
* **Kalıcı Veri:** Sayfa yenilendiğinde verilerin kaybolmaması için çift yönlü `localStorage` senkronizasyonu.

### 🚀 Kurulum ve Yerel Çalıştırma
```bash
# 1. Projeyi klonlayın
git clone [https://github.com/KULLANICI_ADIN/TaskFlow.git](https://github.com/KULLANICI_ADIN/TaskFlow.git)
cd TaskFlow

# 2. Gerekli bağımlılıkları yükleyin
npm install

# 3. Geliştirici sunucusunu başlatın
npm run dev