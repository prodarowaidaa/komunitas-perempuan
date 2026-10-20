# Belajar Website Pertamamu

Website ini memakai HTML dan CSS tanpa instalasi atau JavaScript.

## Dua file utama

| File | Fungsi |
| --- | --- |
| index.html | Isi dan susunan halaman: judul, paragraf, tautan, dan bagian website. |
| style.css | Tampilan: warna, ukuran huruf, jarak, ilustrasi, dan penyesuaian layar HP. |

## Membuka website di komputer

1. Di halaman utama repositori, pilih **Code → Download ZIP**.
2. Ekstrak ZIP tersebut.
3. Buka folder **website**.
4. Klik dua kali **index.html** untuk membukanya di browser.

Biarkan index.html dan style.css dalam folder yang sama. Tampilan file HTML di GitHub adalah kode, bukan website yang sudah dirender.

## Latihan 1 — Mengganti teks (HTML)

Buka index.html menggunakan editor teks seperti Notepad. Cari teks:
```html
Ada ruang<br>untukmu<br><em>bermekaran.</em>
```
Ganti kata “bermekaran.” menjadi “bertumbuh.”, simpan file, lalu muat ulang browser.

- h1: judul utama halaman.
- p: paragraf.
- br: pindah baris.
- em: penekanan kata.
- a: tautan; href menentukan tujuannya.
- section: kelompok isi halaman.

## Latihan 2 — Mengganti warna (CSS)

Di awal style.css, cari:
```css
--rose: #8f4657;
```
Coba ganti menjadi:
```css
--rose: #754d70;
```
Simpan dan muat ulang browser. Variabel ini dipakai oleh tombol dan beberapa bagian halaman, jadi semuanya ikut berubah. Pastikan tulisan tetap jelas dibaca.

## Latihan 3 — Mengganti ukuran judul

Cari aturan h1 di style.css. font-size mengatur ukuran huruf; margin-bottom mengatur jarak ke elemen berikutnya. Coba ubah margin-bottom dari 27px menjadi 40px dan lihat perbedaannya.

## Latihan 4 — Memahami tautan dalam halaman

Tautan href="#tentang" menuju bagian dengan id="tentang". Jika mengganti ID, ganti juga tautan yang menunjuk ke sana.

Bagian FAQ memakai details dan summary: browser menyediakan interaksi buka/tutup tanpa JavaScript.

## Menyimpan hasil belajar ke GitHub

Perubahan lokal tidak otomatis masuk ke GitHub. Untuk menyimpan hasil, buka file yang sama di GitHub, klik ikon pensil, terapkan perubahan, lalu pilih **Commit changes**. Tulis pesan jelas seperti “Mengubah kata bermekaran menjadi bertumbuh”.

Alternatif: gunakan Add file → Upload files pada folder website untuk mengunggah versi lokal yang sudah diedit.

## Cek sebelum menyimpan

- Judul dan paragraf terbaca.
- Semua tautan bagian menuju lokasi yang benar.
- FAQ dapat dibuka dengan mouse dan keyboard.
- Coba perkecil lebar jendela browser; kolom seharusnya tersusun ke bawah.
- Pendaftaran tetap dinyatakan belum dibuka sampai prosesnya benar-benar siap.

## Tentang pratinjau

Pratinjau yang dibuat saat penyusunan adalah salinan versi awal. Perubahan di GitHub belum otomatis memperbarui pratinjau tersebut. Minta bantuan memperbarui pratinjau setelah mengubah kode, atau gunakan file lokal untuk langsung melihat hasil latihan.

Nama komunitas, tanggal, tempat, biaya, dan kontak belum ditentukan. Jangan menambahkan formulir yang tampak menerima pendaftaran sebelum ada proses penyimpanan dan pengelolaan data yang siap.
