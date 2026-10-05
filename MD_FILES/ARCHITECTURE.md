# Architecture — DotFlix

> Website statis sederhana tanpa backend.

## 1. Tech Stack
| Bagian | Teknologi |
|---|---|
| Tampilan | HTML dan CSS biasa |
| Logika | Vanilla JavaScript |
| Data film | `data/movies.json` |
| My List | `localStorage` |
| Trailer | YouTube iframe |
| Hosting | GitHub Pages |

Tidak memakai Tailwind, framework, database, API key, atau environment variable.

## 2. Alur Kerja
```text
Browser membuka index.html
    |
    |- script.js menampilkan loading state
    |- script.js mengambil data/movies.json
    |- data berhasil: tampilkan banner dan baris film
    |- data gagal: tampilkan pesan error
    |- klik film: buka modal detail dan trailer
    |- pencarian: filter judul dan tampilkan empty state bila perlu
    |- My List: simpan dan baca ID film dari localStorage
```

Semua proses berjalan di browser. `localStorage` hanya menyimpan daftar film pada browser pengguna.

## 3. Struktur Folder
```text
dotflix/
|- index.html
|- css/
|  `- style.css
|- js/
|  `- script.js
|- data/
|  `- movies.json
|- img/
|  `- poster dan banner
|- MD_FILES/
|  |- PRD.md
|  |- ARCHITECTURE.md
|  |- TODO.md
|  |- DESIGN.md
|  `- README.md
```

## 4. Format Data
```json
[
  {
    "id": 1,
    "title": "Judul Film",
    "year": 2023,
    "genre": ["Action", "Drama"],
    "synopsis": "Sinopsis singkat film.",
    "poster": "img/judul-film.jpg",
    "trailer": "https://www.youtube.com/embed/KODE_VIDEO",
    "featured": true
  }
]
```

Hanya satu film yang sebaiknya memiliki `featured: true`. Jika tidak ada film unggulan, gunakan film pertama sebagai cadangan.

## 5. Deploy
1. Push project ke GitHub.
2. Buka repository, pilih **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch utama dan folder `/ (root)`.
5. Simpan, lalu tunggu URL GitHub Pages aktif.
6. Tes semua fitur melalui URL publik.

GitHub Pages cocok karena project hanya berisi file statis.
