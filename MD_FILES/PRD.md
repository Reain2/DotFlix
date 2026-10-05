# PRD — DotFlix

> Proyek sekolah versi sederhana: katalog film statis tanpa backend.

## 1. Ringkasan
DotFlix adalah website katalog film dengan tampilan sinematik. Pengguna dapat melihat film berdasarkan kategori, mencari judul, membuka detail film, menonton trailer resmi, dan menyimpan film ke My List.

Data film disimpan manual dalam `data/movies.json`. Tidak ada backend atau database, sehingga project mudah dibuat dan dideploy.

## 2. Tujuan
- Membuat katalog film yang responsif di HP dan laptop.
- Menjalankan fitur utama tanpa login atau server.
- Menyelesaikan project dan mempublikasikannya melalui GitHub Pages.

## 3. Fitur dan Batasan
| Fitur | Detail selesai |
|---|---|
| Beranda | Banner satu film unggulan dan daftar film berdasarkan genre. |
| Detail film | Modal berisi poster, judul, tahun, genre, sinopsis, dan tombol trailer. |
| Trailer | Trailer resmi ditampilkan melalui YouTube iframe. |
| Pencarian | Memfilter film berdasarkan judul secara langsung saat pengguna mengetik. |
| My List | Menambah dan menghapus film favorit menggunakan `localStorage`. |
| Responsif | Layout tidak overflow di layar HP dan tombol mudah disentuh. |

Tidak dibuat: login, register, admin panel, database, pembayaran, rating pengguna, dan rekomendasi personal.

## 4. Data dan Atribusi
- Gunakan 5 film agar cukup untuk demo sekolah.
- Isi setiap film dengan `id`, `title`, `year`, `genre`, `synopsis`, `poster`, `trailer`, dan `featured`.
- Gunakan poster dari sumber yang mengizinkan penggunaan untuk project pembelajaran, atau TMDB sesuai aturan atribusinya.
- Gunakan link trailer resmi dari YouTube. Jangan mengunggah film atau trailer sendiri.
- Cantumkan sumber poster dan metadata di README.

## 5. Tampilan
- Tema gelap dengan aksen aqua mengikuti `DESIGN.md`.
- Navbar berisi logo DotFlix, kolom pencarian, dan tombol My List.
- Film ditampilkan dalam baris horizontal per genre.
- Modal memiliki tombol tutup, dapat ditutup dengan `Escape`, dan dapat digunakan dengan keyboard.
- Tampilkan pesan jika hasil pencarian kosong atau My List belum berisi film.

## 6. Kebutuhan Teknis
- HTML, CSS, dan vanilla JavaScript.
- Tidak memakai framework atau dependency tambahan.
- Gambar dikompres agar halaman cepat dibuka.
- Tambahkan `loading="lazy"` pada poster yang bukan banner utama.
- Tangani kondisi JSON gagal dimuat dengan pesan error yang jelas.
- Uji minimal pada Chrome dan HP asli.

## 7. Kriteria Selesai
- [ ] 5 film tampil dari `data/movies.json`.
- [ ] Banner, kategori, detail, trailer, pencarian, dan My List berfungsi.
- [ ] Empty state dan error state tampil dengan benar.
- [ ] Modal dapat ditutup dengan tombol dan `Escape`.
- [ ] Tidak ada gambar atau link yang rusak.
- [ ] Tidak ada horizontal overflow di HP.
- [ ] Project berhasil dideploy melalui GitHub Pages.
- [ ] URL demo, sumber konten, dan cara menjalankan tercantum di README.
