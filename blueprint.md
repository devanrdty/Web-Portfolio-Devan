# Blueprint Proyek

## Ringkasan

Ini adalah portofolio digital untuk **Devan Raditya Pratama**, seorang profesional Pemasaran Digital dan Pengembang n8n. Aplikasi ini menampilkan keahlian, proyek, dan wawasan individu, yang dirancang untuk menarik klien atau pemberi kerja potensial. Aplikasi ini dibangun menggunakan HTML, CSS, dan JavaScript modern, dengan fokus pada desain yang bersih, responsif, dan sangat interaktif.

## Desain dan Fitur

### **Desain Visual**
*   **Estetika:** Gaya *neo-brutalist* yang modern dan mencolok, ditandai dengan bayangan tajam (`shadow-neo-lg`), batas tebal, dan palet warna yang berani (lime, kuning, hitam).
*   **Tipografi:** Menggunakan font `Inter` untuk keterbacaan dan `Space Mono` untuk sentuhan teknis pada judul dan elemen penting.
*   **Responsif:** Tata letak beradaptasi dengan mulus dari perangkat seluler ke desktop, dengan menu navigasi hamburger khusus untuk seluler.
*   **Interaktivitas:**
    *   Elemen yang dapat diklik memiliki efek *hover* yang menarik (misalnya, `-translate-y-1`) dan bayangan aktif untuk memberikan umpan balik taktil.
    *   Jendela modal (pop-up) memiliki desain yang konsisten dengan sisa aplikasi, menampilkan detail proyek dan postingan blog secara elegan.
    *   Animasi *fade-in* saat pengguna menggulir halaman, memberikan pengalaman premium dan dinamis.

### **Fitur Fungsional**
*   **Struktur Multi-Halaman:**
    *   **`index.html`:** Halaman utama yang berfungsi sebagai ringkasan portofolio, menampilkan bagian Hero, Keahlian, Proyek Unggulan, Blog Terbaru, dan Formulir Kontak.
    *   **`blog.html`:** Halaman arsip blog khusus dengan semua postingan.
*   **Modal Interaktif:**
    *   Klik pada kartu proyek atau blog akan membuka jendela modal yang menampilkan konten lengkapnya, memungkinkan pengguna untuk melihat detail tanpa meninggalkan halaman saat ini.
*   **Filter Blog:**
    *   Di halaman `blog.html`, pengguna dapat memfilter postingan berdasarkan kategori (`Pemasaran`, `n8n`, `SEO`) secara instan. Tombol filter yang aktif secara visual ditandai untuk kejelasan.
*   **Formulir Kontak:**
    *   Formulir kontak terintegrasi dengan **Formspree** untuk penanganan *backend* yang mudah, memungkinkan pengunjung mengirim pesan langsung ke email **Devan Raditya Pratama**.
*   **Animasi Scroll:**
    *   Setiap bagian utama di `index.html` dan `blog.html` menggunakan `IntersectionObserver` untuk memicu animasi *fade-in* saat bagian tersebut masuk ke dalam tampilan, meningkatkan daya tarik visual.

## Rencana Implementasi Terakhir

Rencana implementasi untuk menambahkan interaktivitas dan animasi telah **selesai**.

1.  **Filter Blog:**
    *   **Status:** Selesai.
    *   **Langkah:** Menambahkan *dataset category* pada kartu blog, membuat tombol filter, dan menulis logika JavaScript untuk menampilkan/menyembunyikan kartu berdasarkan filter yang dipilih.

2.  **Formulir Kontak Aktif:**
    *   **Status:** Selesai.
    *   **Langkah:** Memodifikasi tag `<form>` di `index.html` untuk menunjuk ke endpoint Formspree. **Tindakan yang diperlukan pengguna adalah mengganti URL placeholder.**

3.  **Animasi Scroll:**
    *   **Status:** Selesai.
    *   **Langkah:** Menambahkan kelas CSS untuk status awal (tersembunyi) dan akhir (terlihat), menambahkan kelas penanda `.fade-in-section` ke elemen HTML, dan menulis logika JavaScript menggunakan `IntersectionObserver` untuk menambahkan kelas akhir saat elemen terlihat.

Proyek sekarang dianggap stabil dan kaya fitur.
