# 📧 PANDUAN SETUP EMAIL FUNCTIONALITY

Saya telah mengintegrasikan EmailJS ke dalam website portfolio Anda. Sekarang form kontak akan mengirim email langsung ke naufalzul45@gmail.com.

## 🚀 Langkah-Langkah Setup (PENTING)

### 1. Buat Akun EmailJS (Gratis)
- Kunjungi: https://www.emailjs.com/
- Klik "Sign Up Free"
- Daftar dengan email Anda atau akun Google/GitHub
- Verifikasi email Anda

### 2. Setup Email Service
Setelah login ke EmailJS:

1. **Buka Dashboard**
2. **Klik "Add New Service"**
3. **Pilih Gmail** (atau email provider Anda)
4. **Klik "Connect Account"**
5. Ikuti proses autentikasi Gmail
6. **Salin Service ID** Anda (contoh: `service_xxxxxxxx`)

### 3. Buat Email Template
1. Klik **"Email Templates"**
2. Klik **"Create New Template"**
3. Atur template dengan nama: `contact_form` atau nama lain yang Anda inginkan
4. **Gunakan template berikut:**

```
Subject: Pesan Baru dari {{user_name}}

Nama: {{user_name}}
Email: {{user_email}}

Pesan:
{{message}}
```

5. **Salin Template ID** Anda (contoh: `template_xxxxxxxx`)

### 4. Ambil Public Key
1. Klik **"Account"** di menu atas
2. Klik **"API Keys"**
3. Salin **Public Key** Anda

### 5. Update File script.js

Buka file `script.js` dan cari baris ini (sekitar line 1-5):

```javascript
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE" // Ganti dengan public key Anda nanti
});
```

Ganti dengan:
```javascript
emailjs.init({
    publicKey: "YOUR_ACTUAL_PUBLIC_KEY" // Paste public key Anda di sini
});
```

### 6. Update Email Template di script.js

Cari baris ini di function `contactForm.addEventListener`:

```javascript
emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', templateParams)
```

Ganti dengan:
```javascript
emailjs.send('service_XXXXXX', 'template_YYYYYY', templateParams)
```

Dimana:
- `service_XXXXXX` = Service ID Anda dari step 2
- `template_YYYYYY` = Template ID Anda dari step 3

### 7. Test Email Function

1. Buka website portfolio Anda di browser
2. Scroll ke section "Hubungi Saya"
3. Isi form dengan:
   - Nama: Test User
   - Email: test@example.com (atau email Anda)
   - Pesan: Ini adalah test email
4. Klik "Kirim Pesan"
5. Tunggu sampai muncul alert sukses
6. Cek email naufalzul45@gmail.com - seharusnya ada email baru!

## 📋 Daftar Perubahan Yang Dilakukan

✅ Menambahkan script EmailJS ke `index.html`  
✅ Menambahkan `id` dan `name` ke input form  
✅ Membuat fungsi EmailJS initialization di `script.js`  
✅ Mengganti form submission handler dengan EmailJS integration  
✅ Menambahkan error handling dan loading state  

## ⚙️ Variabel Form yang Dikirim

Form akan mengirimkan data berikut ke email:
- **user_name** - Nama pengisi form
- **user_email** - Email pengisi form
- **message** - Pesan/pertanyaan dari pengunjung
- **to_email** - Email tujuan (naufalzul45@gmail.com)
- **reply_to** - Email balasan otomatis

## 🔐 Keamanan

✅ Public Key tidak sensitive (aman untuk dipublikasikan)  
✅ Service ID dan Template ID hanya berfungsi untuk send email saja  
✅ Tidak ada credential sensitif yang tersimpan di public  

## 🆘 Troubleshooting

### Email tidak terkirim?
1. Pastikan Anda sudah login ke EmailJS
2. Periksa Service ID dan Template ID sudah benar
3. Periksa console browser (F12) untuk error messages
4. Pastikan email Gmail Anda sudah terkoneksi dengan EmailJS

### Muncul error "Invalid Service ID"?
- Double-check Service ID di dashboard EmailJS
- Pastikan copy-paste tanpa spasi

### Muncul error "Invalid Template ID"?
- Pastikan template sudah dibuat
- Double-check Template ID
- Pastikan template variables match (user_name, user_email, message)

## 📚 Dokumentasi Lengkap
- EmailJS Docs: https://www.emailjs.com/docs/
- Tutorial: https://www.emailjs.com/docs/tutorial/creating-contact-form/

## 💡 Tips Tambahan

1. **Unlimited Emails**: Paket gratis EmailJS memberikan 200 email/bulan
2. **Custom Template**: Anda bisa membuat template email yang lebih fancy dengan HTML
3. **Tracking**: EmailJS memiliki dashboard untuk tracking email yang dikirim
4. **SMTP Alternative**: Jika ingin menggunakan provider email lain, EmailJS mendukung banyak provider

---

**Status**: Setup siap! Ikuti langkah-langkah di atas untuk mengaktifkan email functionality.

Setelah selesai setup, form kontak Anda akan berfungsi dan setiap pengunjung yang mengisi form akan mengirim email langsung ke naufalzul45@gmail.com! 🎉
