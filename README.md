**Geometry Dash Portfolio** adalah sebuah website sederhana berbasis **HTML, CSS, dan JavaScript** yang menampilkan perjalanan dan pengalaman bermain game *Geometry Dash*. Website ini berisi informasi tentang berbagai **game modes**, tingkat preferensi, skill, enjoyment, serta daftar **level tersulit** yang pernah diselesaikan.

Proyek ini dibuat sebagai tugas pengembangan web dengan fokus pada:

* Struktur HTML yang rapi
* Styling modern menggunakan CSS
* Interaktivitas menggunakan JavaScript

---

Fitur Utama

Navbar Interaktif

* Navigasi ke setiap bagian website
* Dropdown menu untuk memilih berbagai **game modes**
* Smooth scrolling ke section yang dituju

Section Game Modes

Menampilkan berbagai mode dalam Geometry Dash:

* Cube
* Ship
* Ball
* UFO
* Wave
* Spider
* Swingcopter

Setiap mode memiliki:

* Penjelasan singkat
* Statistik:

  * Preference
  * Skill
  * Enjoyment
* Sistem rating berbentuk lingkaran (circle rating)

Mode bisa di-*expand* dan *collapse* dengan klik (accordion style).

---

Hardest Levels Section

Menampilkan level tersulit yang pernah diselesaikan:

* Nama level
* Difficulty
* Total attempts
* Tingkat enjoyment
* Gambar preview level

---

UI/UX Modern

* Dark theme 
* Animasi halus 
* Responsive design 

---

Interaktivitas JavaScript

Beberapa fitur yang di-handle oleh JavaScript:

* Generate rating circle otomatis berdasarkan `data-rating`
* Smooth scrolling antar section
* Toggle dropdown menu
* Expand/collapse mode container

---

Struktur File

```
project-folder
│
├── index.html   # Struktur utama website
├── style.css    # Styling dan tampilan UI
└── script.js    # Interaktivitas dan logika
```

---

Teknologi yang Digunakan

* **HTML5** → Struktur halaman
* **CSS3** → Styling & layout (flexbox, grid, animation)
* **JavaScript (Vanilla JS)** → Interaksi dan DOM manipulation

---

📖 Cara Menjalankan

Cukup buka file `index.html` di browser:

```bash
double click index.html
```

Atau bisa juga pakai Live Server di VS Code biar lebih mantap.

---

Cara Custom

Kalau mau ubah isi:

Ganti Gambar Level

Di `index.html`, ubah bagian:

```html
<img src="LINK_GAMBAR" alt="Level Image">
```

Ubah Rating

```html
<div class="circles" data-rating="5"></div>
```

Nilai `data-rating` dari 0–5

Tambah Mode Baru

* Copy satu `mode-container`
* Ganti id, nama, dan isi

---

Tujuan Pembelajaran

Melalui proyek ini, diharapkan:

* Memahami struktur dasar web
* Menggunakan CSS untuk membuat UI menarik
* Menggunakan JavaScript untuk interaksi dinamis
* Membuat website portfolio sederhana

---

Catatan

Website ini masih bisa dikembangkan lebih lanjut, misalnya:

* Menambahkan backend
* Menyimpan data user
* Animasi lebih kompleks
* Dark/light mode toggle

---

Author

**Lutfi Rosyadi**
Mahasiswa | Universitas Jember
