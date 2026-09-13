export interface Article {
  id: string;
  title: string;
  category: "Malaysia Living" | "Frontend Architecture" | "Productivity Tools" | "Engineering Leadership";
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "3-jalur-kerja-di-malaysia",
    title: "3 Jalur Kerja di Malaysia: Pekerjaan Kasar, BPO, dan Sesuai Keahlian",
    category: "Malaysia Living",
    readTime: "5 min read",
    date: "Sep 2026",
    summary: "Catatan langsung jalur kerja di Malaysia: syarat tiap jalur, benchmark gaji berdasarkan pengalaman, cooling-off period visa ESD, dan platform rekomendasi cari kerja.",
    tags: ["Kerja di Malaysia", "Visa ESD", "BPO", "Gaji Malaysia", "Bahasa Indonesia"],
    content: [
      "Ada 3 jalur:",
      "- Jalur pekerjaan kasar atau blue collar",
      "- BPO",
      "- Sesuai keahlian kita",
      "## 1. Jalur Pekerjaan Kasar (Blue Collar)",
      "SANGAT GAK DISARANKAN KARENA ANDA LEBIH BAIK CARI KERJA DI JEPANG ATAU NEGARA LAIN",
      "- Syarat: Lulusan SMA. Gak butuh Inggris yang bagus",
      "- Cara cari kerja: Harus lewat agen (di link yang bawah saya kasi) atau kenalan teman. Nanti dibantu urus visanya. Untuk ini harus ikutin agen tapi harus hati” jangan sembarangan. Selalu verifikasi agensinya lewat:",
      "- https://sipermit.id/registration_list?category=agent",
      "- https://jtksm.mohr.gov.my/ms/perkhidmatan/agensi-pekerjaan-swasta/senarai-agensi-pekerjaan-swasta",
      "- Gaji maximal 3000 RM",
      "- Visa diperpanjang tiap tahun",
      "## 2. Jalur BPO",
      "- Syarat: Lulusan S1 dan bisa Bahasa Inggris. Bonus poin kalau ada IELTS dan TOEFL. Fresh graduate bisa juga (kalau hoki). Kalau bisa bahasa Jepang dan Korea, even better! Gaji min 5000 RM",
      "- Deskripsi: Biasanya yg kerja di BPO lebih mirip outsourcing kyk customer service, content reviewer dll dan biasanya kerjanya di Concentrix, Accenture, TDCX, dan Aegis.",
      "- Cari kerja di:",
      "- LinkedIn",
      "- Perusahaan yang aku mention",
      "- Gaji & Visa: Gaji start 5000 & visanya bisa diperpanjang setahun sekali tapi nanti kalau udh diperpanjang 2 kali, bakal disuruh balik ke indo buat “istirahat” baru apply lagi kecuali gajinya jadi 5000 RM.",
      "- Bisa dicek di https://esd.imi.gov.my/portal/pdf/esdguidebook.pdf",
      "## 3. Jalur Sesuai Keahlian Kita",
      "- Syarat: Sama kyk BPO tapi dengan jurusan yang kita mau. Kalau bisa ada pengalaman 2 tahun dulu di indo biar gajinya bisa 7000 RM.",
      "- Cari kerja di:",
      "- LinkedIn",
      "- Hiredly",
      "- Jobstreet (gk direkomen karena otomatis taruh cv WNA dipaing bawah)",
      "- Gaji tergantung experience:",
      "- Kalau baru 1-2 tahun, ambil aja 5000 RM.",
      "- 3 tahun, 6-7rb RM",
      "- Kalau udh 5 tahun palingan 8-10rbRM.",
      "- 10rb RM biasanya buat yang ada S2 atau pengalaman 8 tahun keatas.",
      "- Regulasi Visa: Kalau gaji dibawah 10rb RM bakal disuruh balik ke indo buat “istirahat” baru apply lagi setelah perpanjang 2 kali",
      "- Bisa di cek di https://esd.imi.gov.my/portal/pdf/esdguidebook.pdf buat proses imigrasinya"
    ]
  },
  {
    id: "panduan-hidup-transportasi-belanja-malaysia",
    title: "Panduan Hidup di Malaysia: Transportasi, Mobil & SIM, Belanja, dan Komunitas",
    category: "Malaysia Living",
    readTime: "4 min read",
    date: "Sep 2026",
    summary: "Catatan praktis harian seputar transportasi kereta & bus MyRapid, tips kartu TnG NFC, biaya beli mobil, transfer SIM ke JPJ, marketplace barang bekas, dan grup FB tanya-jawab.",
    tags: ["Living in Malaysia", "Transportasi KL", "MyRapid", "Beli Mobil", "Bahasa Indonesia"],
    content: [
      "## Transportasi: Kereta & Bus",
      "Di Penang dan KL bisa pakai https://myrapid.com.my/ buat cek kereta dan bus yang harus diambil. Kalau blm berpengalaman, pakai kereta dlu aja. Bus di Malaysia gk tepat waktu kecuali bus rute terkenal kyk 600 dan 640 di Kuala Lumpur.",
      "- Bayar bus dan kereta biasanya pakai TnG Card. Kartunya bisa dibeli di stasiun MRT tapi kalau bisa, beli yang ada NFC lewat aplikasi TnG eWallet biar bisa top up di hp (Aku biasa top up 50 RM tiap 2 minggu)",
      "## Nyetir & Mobil di Malaysia",
      "- Kalau mau beli mobil baru, minimal ada 120jt++ (kalau mobil lokal) / 200jt++ (buat mobil merk luar)",
      "- Nyetir di Malaysia lebih ketat dan lebih mahal biaya belajarnya tapi saranku transfer sim aja tapi butuh 3-6 bulan prosesnya. Harus ke tempat namanya JPJ di Wangsa Maju atau Shah alam. Boleh nyogok btw cuma tetap harus ikut les-nya 😛",
      "- Bensin jauh lebih berkualitas dan lebih murah daripada Indonesia.",
      "- Pajak kendaraan murah dan bisa stop bayar dlu kalau mobilnya dijual",
      "- Harus ada asuransi mobil",
      "## Marketplace Buat Beli Barang",
      "- Beli Nothing Project (bisa minta barang bekas gratis)",
      "- FB marketplace",
      "- Carousel",
      "## Grup FB Berguna Buat Tanya Jawab",
      "- KL EXPATS: https://www.facebook.com/groups/176705455831148",
      "- Developer Kaki: https://www.facebook.com/groups/797518550594060"
    ]
  }
];
