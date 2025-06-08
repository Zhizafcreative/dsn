# 🚀 Panduan Deployment - Digital Marketing Platform

## 📋 Persiapan Deployment

### 1. Repository Setup
```bash
# Clone repository
git clone https://github.com/username/dsn.git
cd dsn

# Atau jika membuat repository baru
git init
git add .
git commit -m "Initial commit: Digital Marketing Platform"
git branch -M main
git remote add origin https://github.com/username/dsn.git
git push -u origin main
```

### 2. GitHub Pages Setup

#### Metode 1: Melalui GitHub Web Interface
1. Buka repository di GitHub
2. Klik **Settings** tab
3. Scroll ke bagian **Pages**
4. Pilih **Source**: Deploy from a branch
5. Pilih **Branch**: main / master
6. Pilih **Folder**: / (root)
7. Klik **Save**

#### Metode 2: Menggunakan GitHub Actions (Otomatis)
File `.github/workflows/deploy.yml` sudah disediakan untuk deployment otomatis.

### 3. Kustomisasi Domain (Opsional)

#### Custom Domain
1. Buat file `CNAME` di root directory:
```
yourdomain.com
```

2. Update DNS settings di domain provider:
```
Type: CNAME
Name: www (atau @)
Value: username.github.io
```

#### Update Configuration
Edit file `_config.yml`:
```yaml
url: "https://yourdomain.com"
baseurl: ""
```

## 🔧 Konfigurasi Platform

### 1. Personalisasi Konten

#### Update Informasi Dosen
Edit `index.html` pada bagian:
```html
<span class="profile-name">Dr. Sarah Wijaya</span>
<h1 class="welcome-title">Selamat Datang, Dr. Sarah Wijaya</h1>
```

#### Update Statistik
Edit bagian quick stats sesuai data aktual:
```html
<span class="stat-number">156</span> <!-- Total Mahasiswa -->
<span class="stat-number">3</span>   <!-- Mata Kuliah Aktif -->
<span class="stat-number">24</span>  <!-- Tugas Pending -->
<span class="stat-number">89%</span> <!-- AI Efficiency -->
```

### 2. Kustomisasi Warna dan Branding

#### Update CSS Variables
Edit `style.css`:
```css
:root {
    --primary-color: #4F46E5;    /* Warna utama institusi */
    --secondary-color: #10B981;  /* Warna sekunder */
    --accent-color: #F59E0B;     /* Warna aksen */
}
```

#### Update Logo dan Branding
```html
<div class="logo">
    <i class="fas fa-graduation-cap"></i>
    <span>Nama Institusi Anda</span>
</div>
```

### 3. Konfigurasi AI Assistant

#### Menambah Response AI
Edit `script.js` pada bagian `generateAIResponse`:
```javascript
const responses = {
    'mata kuliah': 'Informasi tentang mata kuliah Digital Marketing...',
    'mahasiswa': 'Data mahasiswa dan analytics...',
    'tugas': 'Informasi tentang tugas dan penilaian...',
    // Tambahkan response sesuai kebutuhan
};
```

## 📊 Analytics dan Monitoring

### 1. Google Analytics (Opsional)
Edit `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXX-X
```

### 2. Performance Monitoring
Platform sudah dilengkapi dengan:
- Service Worker untuk PWA
- Lazy loading untuk performa optimal
- Responsive design untuk semua device

## 🔒 Keamanan dan Best Practices

### 1. Environment Variables
Untuk data sensitif, gunakan GitHub Secrets:
```yaml
# Di .github/workflows/deploy.yml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

### 2. Content Security Policy
Tambahkan di `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; script-src 'self';">
```

## 🚀 Optimisasi Performance

### 1. Image Optimization
- Gunakan format WebP untuk gambar
- Implementasikan lazy loading
- Compress images sebelum upload

### 2. Code Optimization
- Minify CSS dan JavaScript untuk production
- Gunakan CDN untuk library external
- Implement caching strategy

### 3. SEO Optimization
File `robots.txt` dan `sitemap.xml` sudah disediakan.

Update meta tags di `index.html`:
```html
<meta name="keywords" content="digital marketing, pembelajaran, agentic ai, bisnis digital">
<meta property="og:title" content="Digital Marketing Platform">
<meta property="og:description" content="Platform pembelajaran dengan Agentic AI">
<meta property="og:image" content="https://yourdomain.com/preview.jpg">
```

## 🔄 Update dan Maintenance

### 1. Regular Updates
```bash
# Pull latest changes
git pull origin main

# Make changes
# ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main
```

### 2. Backup Strategy
- Regular backup of repository
- Export data secara berkala
- Dokumentasi perubahan

## 🆘 Troubleshooting

### Common Issues

#### 1. GitHub Pages tidak update
- Check GitHub Actions logs
- Verify branch settings
- Clear browser cache

#### 2. CSS/JS tidak load
- Check file paths
- Verify HTTPS/HTTP mixed content
- Check browser console for errors

#### 3. Mobile responsiveness issues
- Test di berbagai device
- Use browser dev tools
- Validate CSS media queries

## 📞 Support

Untuk bantuan teknis:
1. Check dokumentasi GitHub Pages
2. Review browser console errors
3. Validate HTML/CSS/JS syntax
4. Test di local environment dulu

---

**🎓 Selamat menggunakan Digital Marketing Platform!**
