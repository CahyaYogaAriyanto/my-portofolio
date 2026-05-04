# 🚀 Fitur-Fitur Portfolio Website

## 1. 🌓 Dark/Light Mode Toggle

### Cara Menggunakan
- Klik icon Sun/Moon di navbar (kanan atas)
- Theme akan otomatis tersimpan di browser
- Saat kembali ke website, theme preference Anda akan diingat

### Implementasi Teknis
- Menggunakan React Context API untuk state management
- LocalStorage untuk persistence
- Smooth transition dengan CSS
- Auto-detect system preference saat pertama kali load

### Customization
Untuk mengubah warna theme, edit `app/globals.css`:

```css
.light {
  --background: #ffffff;
  --foreground: #1a1a1a;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

---

## 2. 🤖 AI Assistant Chatbot

### Fitur Chatbot
- **Real-time Chat**: Kirim pesan dan dapatkan response instant
- **Contextual Responses**: AI memahami konteks tentang portfolio
- **Fallback System**: Tetap berfungsi tanpa API key
- **Animated UI**: Smooth animations untuk UX yang lebih baik
- **Timestamp**: Setiap pesan memiliki timestamp
- **Scroll Auto**: Otomatis scroll ke pesan terbaru

### Cara Menggunakan
1. Klik icon chat di kiri bawah layar
2. Ketik pertanyaan Anda
3. Tekan Enter atau klik tombol Send
4. AI akan merespons dalam beberapa detik

### Pertanyaan yang Bisa Dijawab
- **Skills**: "Apa saja skill yang dimiliki?"
- **Projects**: "Ceritakan tentang project-projectnya"
- **Contact**: "Bagaimana cara menghubungi?"
- **Education**: "Dimana dia kuliah?"
- Dan pertanyaan umum lainnya

### API yang Digunakan
**Hugging Face Inference API** (Gratis)
- Model: microsoft/DialoGPT-medium
- Endpoint: https://api-inference.huggingface.co
- Rate Limit: Cukup untuk personal portfolio

### Setup API (Opsional)
Untuk response AI yang lebih baik:

1. Daftar di [Hugging Face](https://huggingface.co)
2. Buat API token di Settings > Access Tokens
3. Tambahkan ke `.env.local`:
```env
HUGGING_FACE_API_TOKEN=your_token_here
```

4. Update `ChatBot.tsx`:
```typescript
headers: {
  "Authorization": `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
  "Content-Type": "application/json",
}
```

### Fallback Responses
Jika API gagal atau tidak ada token, chatbot menggunakan contextual responses yang sudah di-hardcode:

```typescript
const getContextualResponse = (question: string): string => {
  // Deteksi keyword dan return response yang sesuai
  if (lowerQuestion.includes("skill")) {
    return "Cahya memiliki skills dalam...";
  }
  // dst...
}
```

### Customization Responses
Edit `app/components/chatbot/ChatBot.tsx`:

```typescript
// Tambahkan response baru
if (lowerQuestion.includes("your_keyword")) {
  return "Your custom response here";
}
```

### Styling Chatbot
Chatbot mengikuti theme (dark/light mode) secara otomatis. Untuk custom styling:

```typescript
// Di ChatBot.tsx
className={`
  ${theme === "dark" 
    ? "bg-gray-900 text-white" 
    : "bg-white text-gray-800"
  }
`}
```

---

## 3. 🎨 Animasi & Transisi

### Framer Motion Animations
- **Page Load**: Stagger animations untuk elemen
- **Scroll Animations**: Trigger saat scroll ke view
- **Hover Effects**: Scale, rotate, dan glow effects
- **Page Transitions**: Smooth transitions antar halaman

### Custom Animations
Tambahkan animasi baru dengan Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

---

## 4. 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Hamburger menu dengan animasi
- Touch-friendly buttons
- Optimized layout untuk layar kecil
- Chatbot responsive

---

## 5. 🎯 Performance

### Optimizations
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic dengan Next.js App Router
- **Lazy Loading**: Components load saat dibutuhkan
- **CSS Optimization**: Tailwind CSS purging

### Best Practices
- Minimal JavaScript bundle
- Efficient re-renders dengan React
- Optimized animations dengan Framer Motion
- Cached API responses

---

## 6. 🔒 Security

### Environment Variables
Semua sensitive data disimpan di `.env.local`:
- Supabase credentials
- API tokens
- Never committed to git

### API Security
- CORS configured
- Rate limiting di API level
- No sensitive data di client-side

---

## 7. 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di Vercel
3. Add environment variables
4. Deploy!

### Environment Variables di Vercel
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
HUGGING_FACE_API_TOKEN=...
```

---

## 8. 🐛 Troubleshooting

### Chatbot tidak merespons
- Cek koneksi internet
- Cek console untuk errors
- Fallback responses akan tetap bekerja

### Theme tidak tersimpan
- Cek localStorage di browser
- Clear cache dan reload
- Pastikan JavaScript enabled

### Animasi lag
- Reduce motion di system settings
- Check browser compatibility
- Update browser ke versi terbaru

---

## 9. 🔮 Future Enhancements

### Planned Features
- [ ] Voice input untuk chatbot
- [ ] Multi-language support
- [ ] Blog section
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] PWA support
- [ ] Email notifications dari contact form

---

## 📞 Support

Jika ada pertanyaan atau issue:
- Email: cahyayoga10@gmail.com
- GitHub Issues: [Create an issue](https://github.com/CahyaYogaAriyanto)

---

Made with ❤️ by Cahya Yoga Ariyanto
