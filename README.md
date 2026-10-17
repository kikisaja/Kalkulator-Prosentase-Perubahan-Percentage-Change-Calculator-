# 📈 Percentage Change Calculator

Aplikasi kalkulator persentase perubahan (*Percentage Change Calculator*) berbasis JavaScript untuk menghitung rasio persentase kenaikan atau penurunan antara nilai awal dan nilai akhir.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Mathematical Percentage Formula:**
   Menerapkan rumus $\frac{\text{Nilai Akhir} - \text{Nilai Awal}}{\vert{}\text{Nilai Awal}\vert{}} \times 100$ untuk menentukan arah serta besar perubahan persentase.
2. **Zero Division Guard:**
   Mengamankan logika program agar tidak terjadi pembagian dengan angka nol (*division by zero*).
3. **Dynamic UI States & Classes:**
   Mengubah warna *badge*, teks status, serta ikon indikator secara dinamis menggunakan manipulasi `classList`.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Form input nilai awal & akhir serta kartu indikator hasil
├── style.css        # Desain Neobrutalism pink-pop, badge status, & animasi
└── script.js        # Rumus matematika persentase, validasi zero-guard, & DOM
