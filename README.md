# TaskFlow - Task & Project Management App

<div align="center">
  <img src="./screenshots/00-home-overview.png" alt="TaskFlow Preview" width="100%" style="border-radius: 10px;" />
  <p><em>Modern, duyarlı ve yerel hafıza destekli görev yönetim paneli / Modern, responsive and local-storage backed task management dashboard</em></p>
  
  <br />
  
  <p>
    <strong> Dil Secimi / Select Language:</strong><br />
    <a href="#tr">🇹🇷 Turkce Dokumantasyon Icin Tiklayin</a>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#en">🇬🇧 Jump to English Documentation</a>
  </p>
</div>

---

##  Ekran Goruntuleri / Application Screenshots

| 01. Ekleme ve Listeleme | 02. Durum Guncelleme | 03. Silme ve Bos Durum |
| :---: | :---: | :---: |
| <img src="./screenshots/01-create-and-list.png" width="100%" alt="Create and List" /> | <img src="./screenshots/02-update-task.png" width="100%" alt="Update Status" /> | <img src="./screenshots/03-delete-empty-state.png" width="100%" alt="Delete and Empty State" /> |

---

<a name="tr"></a>
## 🇹🇷 Türkçe Dokümantasyon

###  Proje Hakkında ve Geliştirme Amacı
TaskFlow, bireylerin ve çalışma ekiplerinin günlük görevlerini, proje süreçlerini ve iş yüklerini kolayca organize edebilmeleri için tasarlanmış modern bir Tek Sayfa Uygulamasıdır (Single Page Application). Geleneksel çok sayfalı yapıların aksine, React ekosisteminin sunduğu bileşen tabanlı mimari sayesinde yüksek performanslı ve akıcı bir kullanıcı deneyimi sunar. Uygulama verileri tamamen tarayıcının yerel hafızasında (`localStorage`) tutulduğu için harici bir veritabanı veya sunucu kurulumuna ihtiyaç duymadan, çevrimdışı çalışabilme esnekliği sağlar.

###  Kullanılan Teknolojiler ve Mimari
- **Frontend Altyapısı:** React 18 (Vite derleyicisi kullanılarak ultra hızlı HMR ve optimizasyon sağlanmıştır).
- **Tasarım ve Arayüz (UI):** Tailwind CSS ile tamamen utility-first (işlev odaklı) bir yaklaşım benimsenmiş, modern ve göz yormayan bir karanlık tema (Dark Mode) entegre edilmiştir.
- **Durum (State) Yönetimi:** React Hooks (`useState` ve `useEffect`) kullanılarak bileşenler arası kesintisiz veri akışı sağlanmıştır.
- **Veri Kalıcılığı:** Web Storage API (`localStorage`) kullanılarak kullanıcı tarayıcıyı kapatsa dahi verilerin kaybolması engellenmiştir.
- **Versiyon Kontrol:** Tüm süreç Git ile izlenmiş ve kodlar GitHub üzerinde barındırılmıştır.

###  Detaylı Özellikler (CRUD Operasyonları)
- **Görev Ekleme (Create):** Kullanıcılar görev başlığı, detaylı görev açıklaması, üç farklı öncelik seviyesi (Düşük, Orta, Yüksek) ve görevin atanacağı kişi bilgisini girerek sisteme yeni bir görev kaydedebilir. Form validasyonları sayesinde boş görev eklenmesi engellenir.
- **Dinamik Listeleme (Read):** Eklenen tüm görevler, öncelik durumlarına göre özel renk kodlamasına sahip duyarlı (responsive) kartlar şeklinde listelenir. Üst kısımda bulunan sayaç sayesinde toplam aktif görev sayısı anlık olarak takip edilebilir.
- **Durum Güncelleme (Update):** Kullanıcılar bir görevi tamamladığında "Tamamla" butonuna tıklayarak görevin durumunu güncelleyebilir. Bu işlem sonucunda görevin üstü çizilir, kartın opaklığı düşürülür ve buton "Geri Al" olarak değişir.
- **Görev Silme (Delete):** Tamamlanan, iptal edilen veya hatalı girilen görevler "Sil" butonu ile listeden tamamen ve kalıcı olarak kaldırılır. Liste tamamen boşaldığında kullanıcıyı yönlendiren özel bir boş ekran (empty state) tasarımı devreye girer.
- **Otomatik Senkronizasyon:** Uygulama üzerinde yapılan her türlü ekleme, güncelleme ve silme işlemi anında tarayıcının yerel hafızasına yazılır. Sayfa yenilendiğinde en son durum hafızadan okunarak ekran kayıpsız bir şekilde yeniden oluşturulur.

###  Klasör ve Dosya Yapısı
```text
TaskFlow/
├── src/
│   ├── App.jsx          (Ana bileşen ve state yönetim merkezi)
│   ├── TaskForm.jsx     (Görev ekleme formu ve input bileşeni)
│   ├── TaskCard.jsx     (Görev listeleme ve durum yönetimi bileşeni)
│   └── main.jsx         (Uygulamanın başlangıç ve render noktası)
├── screenshots/         (Dokümantasyon ve sunum görselleri)
├── package.json         (Proje bağımlılıkları ve scriptler)
└── README.md            (Proje dokümantasyonu)