# DotFlix

Website katalog film untuk project sekolah menggunakan HTML, CSS, dan JavaScript.

**Demo:** isi setelah deploy GitHub Pages.

> DotFlix hanya untuk pembelajaran dan tidak berafiliasi dengan Netflix. Video ditampilkan melalui embed trailer resmi YouTube.

## Fitur
- Banner film unggulan
- Daftar film berdasarkan genre
- Detail film dan trailer
- Pencarian judul
- My List dengan `localStorage`
- Tampilan responsif
- Loading, empty, dan error state

## Teknologi
HTML, CSS, vanilla JavaScript, JSON, `localStorage`, YouTube iframe, dan GitHub Pages.

## Cara Menjalankan
1. Clone repository.
2. Buka folder project di VS Code.
3. Jalankan dengan Live Server.
4. Buka alamat lokal yang diberikan Live Server.

Live Server diperlukan karena browser dapat membatasi `fetch` ke `data/movies.json` jika `index.html` dibuka langsung sebagai file lokal.

## Deploy
1. Push project ke GitHub.
2. Buka **Settings → Pages**.
3. Pilih **Deploy from a branch**.
4. Pilih branch utama dan folder `/ (root)`.
5. Simpan, lalu salin URL GitHub Pages ke bagian Demo.

## Struktur
```text
index.html
css/style.css
js/script.js
data/movies.json
img/
MD_FILES/
```

## Sumber Konten
Poster, judul, dan metadata harus dicantumkan sesuai sumber yang digunakan. Trailer menggunakan link embed dari channel resmi di YouTube.

Jika memakai TMDB, tambahkan atribusi berikut:

> This product uses the TMDB API but is not endorsed or certified by TMDB.

## Dokumentasi
- [PRD](PRD.md)
- [Architecture](ARCHITECTURE.md)
- [To-Do](TODO.md)
- [Design](DESIGN.md)

## Pembuat
Nama pembuat — Project Sekolah 2026
