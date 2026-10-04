<div id="top"></div>

#  TaskFlow - Task & Project Management App

<div align="center">
  <img src="./screenshots/00-home-overview.png" alt="TaskFlow Preview" width="100%" style="border-radius: 10px;" />
  <p><em>Modern, duyarlı ve yerel hafıza destekli görev yönetim paneli / Modern, responsive and local-storage backed task management dashboard</em></p>

  <br />

  
  <p>
    <strong>🌐 Dil Seçimi / Select Language:</strong><br />
    <a href="#türkçe-dokümantasyon">🇹🇷 <b>Türkçe Dokümantasyona Git</b></a>
    &nbsp;&nbsp;•&nbsp;&nbsp;
    <a href="#english-documentation">🇬🇧 <b>Jump to English Documentation</b></a>
  </p>
</div>

---

## 📸 Ekran Görüntüleri / Screenshots

| 01. Ekleme ve Listeleme (Create & Read) | 02. Durum Güncelleme (Update) | 03. Silme & Boş Durum (Delete) |
| :---: | :---: | :---: |
| <img src="./screenshots/01-create-and-list.png" width="100%" alt="Create and List" /> | <img src="./screenshots/02-update-task.png" width="100%" alt="Update Status" /> | <img src="./screenshots/03-delete-empty-state.png" width="100%" alt="Delete and Empty State" /> |

---

## Türkçe Dokümantasyon

###  Proje Hakkında
**TaskFlow**, kullanıcıların ve çalışma ekiplerinin günlük görevlerini kolayca planlamasını, önceliklendirmesini ve takip etmesini sağlayan modern bir Tek Sayfa Görev Yönetim Uygulamasıdır (SPA). Veriler tarayıcının yerel hafızasında (`localStorage`) saklandığı için harici bir backend veya sunucu kurulumu gerektirmeden tamamen yerel ortamda bağımsız çalışır.

###  Kullanılan Teknolojiler
* **Frontend Framework:** React (Vite altyapısı)
* **Tasarım & Stil:** Tailwind CSS (Koyu tema / Dark Mode)
* **Durum Yönetimi:** React Hooks (`useState`, `useEffect`)
* **Veri Depolama:** Web Storage API (`localStorage`)
* **Versiyon Kontrol:** Git & GitHub

###  Temel Özellikler (CRUD Operasyonları)
* **Görev Ekleme (Create):** Görev başlığı, opsiyonel açıklama, öncelik seviyesi (Düşük, Orta, Yüksek) ve atanan kişi bilgisiyle yeni kart oluşturma.
* **Dinamik Listeleme (Read):** Öncelik seviyelerine göre renk kodlamalı kartlar ve anlık görev sayacı.
* **Durum Güncelleme (Update):** Görevi tek tıkla tamamlandı olarak işaretleme, üstünü çizme ve istendiğinde geri alma.
* **Görev Silme (Delete):** Tamamlanan veya iptal edilen görevleri pano üzerinden tek tıkla kaldırma.
* **Kalıcı Hafıza:** Sayfa yenilendiğinde görevlerin kaybolmaması için çift yönlü `localStorage` senkronizasyonu.

###  Kurulum ve Yerel Çalıştırma
Projeyi kendi bilgisayarınızda yerel olarak çalıştırmak için:

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install