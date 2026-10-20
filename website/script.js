// Pilih tombol dan seluruh pertanyaan dari HTML.
const tombolFaq = document.querySelector("#tombol-faq");
const daftarJawaban = Array.from(document.querySelectorAll("#tanya-jawab details"));

if (tombolFaq && daftarJawaban.length > 0) {
  // Fungsi ini mengecek keadaan sebenarnya, termasuk setelah klik per pertanyaan.
  function perbaruiTombol() {
    const semuaTerbuka = daftarJawaban.every((jawaban) => jawaban.open);
    tombolFaq.textContent = semuaTerbuka
      ? "Tutup semua jawaban"
      : "Tampilkan semua jawaban";
  }

  // Event listener menjalankan fungsi ketika tombol diklik.
  tombolFaq.addEventListener("click", () => {
    const bukaSemua = !daftarJawaban.every((jawaban) => jawaban.open);
    daftarJawaban.forEach((jawaban) => {
      jawaban.open = bukaSemua;
    });
    perbaruiTombol();
  });

  // Label tetap tepat jika pengunjung membuka atau menutup jawaban satu per satu.
  daftarJawaban.forEach((jawaban) => {
    jawaban.addEventListener("toggle", perbaruiTombol);
  });

  perbaruiTombol();
  // Tampilkan tombol hanya setelah JavaScript siap; FAQ biasa tetap bisa digunakan.
  tombolFaq.hidden = false;
}
