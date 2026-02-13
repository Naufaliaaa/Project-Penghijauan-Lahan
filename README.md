# 🎯 Portofolio Naufal

Website portofolio personal yang modern dan responsif, yang menampilkan pengalaman profesional, galeri pekerjaan, dan informasi kontak. Dibangun dengan teknologi terbaru, memiliki animasi menarik dan antarmuka yang intuitif.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi dan Penggunaan](#instalasi-dan-penggunaan)
- [Fitur Responsif](#fitur-responsif)
- [Informasi Kontak](#informasi-kontak)

---

## ✨ Fitur Utama

### 🏠 Beranda (Area Hero)
- Halaman pendaratan dengan gradien yang menarik
- Foto personal dengan efek cahaya dinamis yang melayang
- Tombol ajakan untuk bertindak yang responsif
- Efek latar belakang partikel interaktif
- Animasi teks yang halus dan menarik

### 👤 Tentang Saya (Bagian About)
- Profil profesional yang lengkap
- Foto formal dengan dekorasi animasi
- Bilah keterampilan dengan animasi pengisian otomatis
- Deskripsi pengalaman dan semangat profesional
- Tata letak responsif dengan sistem grid

### 💼 Pengalaman Kerja (Timeline)
- Timeline vertikal interaktif dengan 3 pengalaman utama:
  - **Magang Kementerian Komunikasi dan Ekonomi Digital** - Komunikasi digital dan manajemen data
  - **Magang Kementerian Perwakilan** - Proyek strategis transportasi dan logistik
  - **Program Pelatihan Google** - Pengembangan keterampilan digital dan kepemimpinan
- Penanda timeline dengan animasi
- Kartu pengalaman dengan efek hover
- Label/badge untuk setiap pengalaman

### 🖼️ Galeri Portofolio (Bagian Portofolio)
- Galeri grid dengan 4 foto pengalaman kerja
- Filter kategori interaktif (Semua, Kementerian Komunikasi dan Ekonomi Digital, Kementerian Perwakilan, Google)
- Overlay gradien dengan informasi saat hover
- Animasi efek zoom dan opacity
- Lazy loading untuk performa optimal

### 📧 Hubungi Kami (Bagian Kontak)
- Formulir kontak yang berfungsi lengkap
- Informasi kontak lengkap:
  - Email：naufalzul45@gmail.com
  - Telepon：+62 83829586688
  - Lokasi：Jawa Barat, Indonesia
- Validasi formulir yang sangat baik
- Pemberitahuan pesan berhasil

### 📱 Footer
- Tautan media sosial (LinkedIn, GitHub, Facebook, Instagram)
- Tautan navigasi cepat
- Informasi hak cipta
- Tata letak responsif

---

## 🛠️ Teknologi yang Digunakan

### Teknologi Frontend

#### **HTML5**
- Struktur HTML semantik
- Praktik terbaik aksesibilitas
- Tag meta yang dioptimalkan untuk SEO
- Integrasi ikon Font Awesome

#### **CSS3**
- Tata letak Grid dan Flexbox modern
- Properti kustom CSS (variabel)
- Latar belakang dan efek gradien
- Animasi keyframe
- Efek blur latar belakang
- Bayangan dalam
- Desain responsif dengan media query
- Pendekatan mobile-first
- Transisi dan fungsi waktu yang halus

#### **JavaScript (Murni)**
- Manipulasi DOM dan event listener
- Intersection Observer API untuk lazy loading
- Perilaku gulir halus
- Validasi dan penanganan formulir
- Pembuatan elemen dinamis
- Pemicu animasi
- Fungsi menu mobile toggle
- Efek paralaks
- Indikator progres gulir
- Indikator tautan navigasi aktif

### UI/UX Library

#### **Font Awesome 6.4.0**
- Library ikon untuk media sosial, kontak, navigasi
- Integrasi CDN

### Pola Desain

- **Desain Responsif**：Titik henti 768px dan 480px
- **Pendekatan Mobile-First**：Dikembangkan dari mobile terlebih dahulu
- **Struktur Komponen**：Bagian modular yang dapat digunakan ulang
- **Optimasi Performa**：Lazy loading gambar, animasi yang dioptimalkan
- **Aksesibilitas**：HTML semantik, kontras yang sesuai

---

## 📁 Struktur Proyek

```
Lahan Penghijauan/
├── index.html          # Halaman HTML utama
├── style.css           # Stylesheet untuk animasi dan desain responsif
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi proyek (dokumen ini)
└── img/                # Folder sumber gambar
    ├── foto-formal.jpg
    ├── foto-diskominfo.jpeg
    ├── foto-KementerianPerhubungan1.jpeg
    ├── foto-KementerianPerhubungan2.jpeg
    └── foto-google.jpeg
```

---

## 🚀 Instalasi dan Penggunaan

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Sumber CDN (Font Awesome) memerlukan koneksi internet

### Langkah-langkah

1. **Kloning atau mengunduh proyek**
   ```bash
   git clone <repository-url>
   cd Lahan\ Penghijauan
   ```

2. **Membuka file HTML**
   - Buka `index.html` langsung di browser
   - Atau gunakan ekstensi Live Server di VS Code
   ```bash
   # Saat menggunakan Live Server
   # Klik kanan index.html → Open with Live Server
   ```

3. **Pengujian**
   - Pastikan semua bagian berfungsi dengan baik
   - Uji desain responsif untuk berbagai ukuran layar
   - Pastikan semua animasi berjalan dengan halus

### Server Pengembangan (Opsional)
Gunakan Live Server atau alat pengembangan lainnya:

```bash
# Python 3
python -m http.server 8000

# Node.js dengan http-server
npx http-server
```

Lalu buka `http://localhost:8000` di browser.

---

## 📱 Fitur Responsif

### Titik Henti
- **Desktop**：> 768px (tata letak penuh)
- **Tablet**：481px - 768px (grid yang disesuaikan)
- **Mobile**：< 480px (satu kolom)

### Elemen Responsif
- ✅ Menu hamburger untuk mobile
- ✅ Tata letak grid yang beradaptasi
- ✅ Ukuran font yang dapat diskalakan
- ✅ Tombol dan tautan yang ramah sentuhan
- ✅ Gambar yang dioptimalkan untuk perangkat berbeda
- ✅ Gulir yang halus di semua browser

---

## 🎨 Animasi dan Efek

### Animasi Utama
- `fadeInUp` - Fade in dengan translasi ke atas
- `float` - Efek melayang untuk gambar hero
- `pulse` - Efek denyut cahaya
- `slideDown` - Animasi geser ke bawah untuk navbar
- `bounce` - Efek pantulan untuk logo
- `scaleIn` - Animasi skala
- `slideInLeft` dan `slideInRight` - Animasi geser dari arah tertentu
- `fillBar` - Animasi pengisian bilah keterampilan

### Efek Interaksi
- Efek hover pada kartu dan tombol
- Transisi yang halus untuk semua elemen interaksi
- Efek gulir paralaks
- Indikator bilah progres saat menggulir
- Efek partikel dinamis di bagian hero

---

## 📊 Performa

### Tips Optimasi
- Lazy loading gambar menggunakan Intersection Observer
- Animasi CSS dengan akselerasi GPU
- Minimalkan repaint dan reflow
- Event delegation yang efisien
- Debounce event scroll (untuk beberapa browser)

### Dukungan Browser
- Chrome (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Edge (terbaru)

---

## 🔧 Kustomisasi

### Mengubah Warna Tema
Edit variabel CSS di `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #8b5cf6;
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    /* ... */
}
```

### Menambahkan Bagian Baru
1. Tambahkan HTML di `index.html`
2. Tambahkan CSS di `style.css`
3. Tambahkan JavaScript di `script.js` (jika diperlukan)

### Memperbarui Konten
- Ubah teks di `index.html`
- Perbarui foto di folder `img/`
- Sesuaikan informasi kontak di bagian kontak

---

## 📞 Informasi Kontak

- **Email**：naufalzul45@gmail.com
- **Telepon**：+62 83829586688
- **Lokasi**：Jawa Barat, Indonesia
- **Media Sosial**：LinkedIn, GitHub, Facebook, Instagram

---

## 📝 Lisensi

Portofolio ini dibuat untuk tujuan profesional pribadi. Silakan gunakan sebagai referensi untuk proyek Anda sendiri.

---

## 🎯 Peta Jalan Fitur Masa Depan

- [ ] Integrasi backend untuk pengiriman formulir
- [ ] Bagian blog/artikel
- [ ] Showcase proyek dengan detail
- [ ] Pengalihan ke mode gelap
- [ ] Dukungan multibahasa (Indonesia, Inggris, dan Mandarin)
- [ ] Unduhan CV dalam format PDF
- [ ] Bagian surat rekomendasi
- [ ] Bagian layanan

---

## 📄 Catatan Perubahan

### Versi 1.0 (Saat ini)
- ✅ Rilis awal
- ✅ Desain responsif sepenuhnya
- ✅ Animasi dan efek yang halus
- ✅ Informasi kontak diperbarui
- ✅ Tautan media sosial (LinkedIn, GitHub, Facebook, Instagram)
- ✅ Dokumentasi profesional

---

**❤️ Dibuat dengan HTML5, CSS3, dan JavaScript Vanila**

*Terakhir diperbarui：13 Januari 2026*

