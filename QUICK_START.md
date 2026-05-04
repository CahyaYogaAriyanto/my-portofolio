# 🚀 Quick Start Guide

## Langkah Cepat untuk Menjalankan Portfolio

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Setup Environment Variables
Buat file `.env.local` di root folder:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 3️⃣ Run Development Server
```bash
npm run dev
```

### 4️⃣ Buka Browser
```
http://localhost:3000
```

---

## ✨ Fitur Baru yang Bisa Dicoba

### 🌓 Dark/Light Mode
1. Lihat di **navbar kanan atas**
2. Klik icon **Sun** (untuk light mode) atau **Moon** (untuk dark mode)
3. Theme akan otomatis tersimpan!

### 🤖 AI Chatbot
1. Lihat di **kiri bawah** layar
2. Klik icon **chat bubble**
3. Ketik pertanyaan seperti:
   - "Apa saja skill yang dimiliki?"
   - "Ceritakan tentang project-projectnya"
   - "Bagaimana cara menghubungi?"
   - "Dimana dia kuliah?"
4. Tekan **Enter** atau klik **Send**
5. AI akan merespons!

---

## 🎨 Customization Cepat

### Ubah Warna Theme
Edit `app/globals.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Tambah Response Chatbot
Edit `app/components/chatbot/ChatBot.tsx`:
```typescript
if (lowerQuestion.includes("keyword_anda")) {
  return "Response anda di sini";
}
```

### Ubah Informasi Personal
Edit `app/page.tsx` untuk hero section
Edit `app/components/educationFlow/EducationFlow.tsx` untuk pendidikan
Edit `app/pages/contact/page.tsx` untuk kontak

---

## 🐛 Troubleshooting

### Port 3000 sudah digunakan?
```bash
npm run dev -- -p 3001
```

### Error saat install?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Chatbot tidak merespons?
- Cek koneksi internet
- Fallback responses akan tetap bekerja
- Lihat console untuk error messages

---

## 📱 Test di Mobile

### Menggunakan ngrok (recommended)
```bash
# Install ngrok
npm install -g ngrok

# Run di terminal terpisah
npm run dev

# Di terminal lain
ngrok http 3000
```

Buka URL yang diberikan ngrok di HP Anda!

### Atau gunakan IP lokal
```bash
# Cari IP komputer Anda
ipconfig  # Windows
ifconfig  # Mac/Linux

# Akses dari HP di network yang sama
http://YOUR_IP:3000
```

---

## 🚀 Deploy ke Production

### Vercel (Paling Mudah)
1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Tambahkan environment variables
5. Deploy!

### Netlify
1. Push code ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. New site from Git
4. Pilih repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

## 📚 Dokumentasi Lengkap

- `README.md` - Overview dan setup lengkap
- `FEATURES.md` - Detail semua fitur
- `IMPLEMENTATION_SUMMARY.md` - Technical details

---

## 💡 Tips

1. **Gunakan Dark Mode** untuk coding malam hari
2. **Test Chatbot** dengan berbagai pertanyaan
3. **Cek Responsive** di berbagai ukuran layar
4. **Customize** sesuai kebutuhan Anda
5. **Deploy** untuk share dengan dunia!

---

## 🎉 Selamat!

Portfolio Anda sekarang memiliki:
- ✅ Dark/Light Mode
- ✅ AI Chatbot
- ✅ Modern Animations
- ✅ Responsive Design
- ✅ Professional Look

**Happy Coding!** 🚀

---

Need help? Contact: cahyayoga10@gmail.com
