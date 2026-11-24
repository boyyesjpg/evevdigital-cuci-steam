/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI CUCI STEAM & DETAILING (EVEVDIGITAL ENGINE)
   Cukup ganti nilai di dalam objek ini, seluruh website langsung terupdate!
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevsteam",
  namaLengkap: "evevsteam — Cuci Steam Hidrolik & Auto Detailing",
  tagline: "Cuci Steam Hidrolik & Detailing Mobil-Motor Bebas Baret",
  deskripsi:
    "Pusat cuci steam hidrolik mobil dan motor profesional di Jakarta Timur dengan shampo salju pH balance 7.0, semprotan kolong bertekanan 150 bar, vacuum interior mendalam, poles kaca bebas jamur, nano ceramic coating 9H, dan teknisi microfiber berpengalaman.",

  temaDefault: "light",

  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  instagram: "@evevsteam.jkt",
  pesanWABooking:
    "Halo evevsteam, saya ingin booking antrean cuci steam hidrolik / detailing. Mohon info slot yang tersedia hari ini.",

  alamat: "Jl. Otista Raya No. 88, Bidara Cina, Jatinegara, Jakarta Timur 13330",
  alamatSingkat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamBukaText: "Setiap Hari: 07:30 - 21:00 WIB",
  jamBukaHour: 7,
  jamBukaMinute: 30,
  jamTutupHour: 21,
  jamTutupMinute: 0,
  areaLayanan: "4 Pit Hidrolik X-Frame (Mobil) & 2 Jalur Express (Motor)",
  linkMaps: "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88+Jatinegara+Jakarta+Timur",

  layanan: [
    {
      id: "cuci-hidrolik-mobil",
      nama: "Cuci Steam Hidrolik Mobil Komplit",
      harga: "Mulai Rp 50.000",
      hargaAngka: 50000,
      durasi: "35 Menit",
      deskripsi:
        "Angkat hidrolik X-Frame aman untuk mobil ceper, semprot kolong lumpur 150 bar, snow wash pH balance 7.0, vacuum kabin & bagasi, lap 2 teknisi microfiber, semir ban silikon, dan parfum kabin.",
      badge: "Paling Favorit",
      pesanWA:
        "Halo evevsteam, saya ingin booking *Cuci Steam Hidrolik Mobil Komplit (Mulai Rp 50.000)*. Mohon info antrean slot hari ini."
    },
    {
      id: "cuci-motor-express",
      nama: "Cuci Steam Motor Express & Semir Ban",
      harga: "Mulai Rp 18.000",
      hargaAngka: 18000,
      durasi: "15 Menit",
      deskripsi:
        "Jalur khusus roda dua bebas antre mobil. Cocok untuk motor bebek, matic harian (Beat, Scoopy, Vario) hingga Maxi/Sport (NMAX, PCX, CBR). Bersih sela velg & CVT, lap microfiber, plus semir ban basah.",
      badge: "Express 15 Menit",
      pesanWA:
        "Halo evevsteam, saya ingin booking *Cuci Steam Motor Express (Mulai Rp 18.000)*. Mohon info antrean jalur motor saat ini."
    },
    {
      id: "snow-wash-jamur-wax",
      nama: "Paket Snow Wash + Jamur Kaca + Waxing",
      harga: "Rp 120.000",
      hargaAngka: 120000,
      durasi: "60 Menit",
      deskripsi:
        "Cuci hidrolik komplit ditambah pembersihan kerak jamur kaca depan & samping agar berkendara malam tetap jernih, plus aplikasi hydrophobic spray wax carnauba untuk kilap wet-look anti air.",
      badge: "Paket Hemat",
      pesanWA:
        "Halo evevsteam, saya ingin booking *Paket Snow Wash + Jamur Kaca + Waxing (Rp 120.000)*. Mohon info jadwal yang tersedia."
    },
    {
      id: "interior-deep-cleaning",
      nama: "Interior Deep Cleaning & Cuci Jok",
      harga: "Rp 350.000",
      hargaAngka: 350000,
      durasi: "120 Menit",
      deskripsi:
        "Ekstraksi basah jok kain/kulit, pembersihan plafon, karpet dasar, sela kisi AC & dashboard, dilanjutkan ozon fogging antibakteri untuk membasmi bau apek, rokok, dan jamur kabin.",
      badge: "Higienis Total",
      pesanWA:
        "Halo evevsteam, saya ingin booking *Interior Deep Cleaning & Cuci Jok (Rp 350.000)*. Mohon info estimasi waktu pengerjaan."
    },
    {
      id: "engine-bay-detailing",
      nama: "Engine Bay Detailing (Ruang Mesin)",
      harga: "Rp 150.000",
      hargaAngka: 150000,
      durasi: "45 Menit",
      deskripsi:
        "Pembersihan kerak oli & debu ruang mesin dengan dry-steam rendah kelembapan dan degreaser water-based khusus yang aman bagi ECU, aki, serta sensor kelistrikan, ditutup dressing plastik.",
      badge: "Aman Kelistrikan",
      pesanWA:
        "Halo evevsteam, saya ingin booking *Engine Bay Detailing Ruang Mesin (Rp 150.000)*. Mohon konfirmasi slot pengerjaan."
    },
    {
      id: "nano-ceramic-coating",
      nama: "Nano Ceramic Coating 9H & Paint Correction",
      harga: "Mulai Rp 1.500.000",
      hargaAngka: 1500000,
      durasi: "1-2 Hari",
      deskripsi:
        "Poles bodi 3 tahap (compound, polish, finishing) mengeliminasi baret halus/swirl mark hingga 95%, dilapisi 2 layer Nano Ceramic Coating 9H efek daun talas ekstrem bergaransi kilap 2 tahun.",
      badge: "Proteksi Sultan",
      pesanWA:
        "Halo evevsteam, saya tertarik konsultasi & booking *Nano Ceramic Coating 9H (Mulai Rp 1.500.000)*. Mohon info promo & ketersediaan slot studio."
    }
  ],

  daftarHarga: [
    {
      kategori: "Cuci Motor",
      item: "Motor Bebek / Matic Kecil (Beat, Mio, Scoopy, Vario)",
      durasi: "15 Menit",
      harga: "Rp 18.000"
    },
    {
      kategori: "Cuci Motor",
      item: "Motor Matic Besar / Sport (NMAX, PCX, Aerox, ADV, CBR, Ninja)",
      durasi: "20 Menit",
      harga: "Rp 28.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "City Car / Hatchback (Brio, Agya, Ayla, Yaris, Raize, Jazz)",
      durasi: "30 Menit",
      harga: "Rp 50.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "Medium / MPV (Avanza, Veloz, Xpander, Ertiga, Stargazer)",
      durasi: "35 Menit",
      harga: "Rp 55.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "SUV / Large MPV (Innova Zenix, Fortuner, Pajero, CR-V, Alphard)",
      durasi: "45 Menit",
      harga: "Rp 65.000"
    },
    {
      kategori: "Perawatan & Detailing",
      item: "Snow Wash + Pembersihan Jamur Kaca + Hydrophobic Wax",
      durasi: "60 Menit",
      harga: "Rp 120.000"
    },
    {
      kategori: "Perawatan & Detailing",
      item: "Engine Bay Detailing (Pembersihan Ruang Mesin Aman Sensor)",
      durasi: "45 Menit",
      harga: "Rp 150.000"
    },
    {
      kategori: "Perawatan & Detailing",
      item: "Interior Deep Cleaning, Cuci Jok & Ozon Fogging Kabin",
      durasi: "120 Menit",
      harga: "Rp 350.000"
    },
    {
      kategori: "Coating Studio",
      item: "Paint Correction 3-Step + Nano Ceramic Coating 9H (Garansi 2 Thn)",
      durasi: "1-2 Hari",
      harga: "Mulai Rp 1.500.000"
    }
  ]
};

// Expose globally agar bisa diakses oleh script lain (termasuk theme-toggle.js)
window.PROFIL_USAHA = PROFIL_USAHA;

/**
 * Helper global untuk auto-format URL WhatsApp ke +62 895-3234-18658
 */
window.EVEV_WA = {
  getCleanNumber: function () {
    return String(PROFIL_USAHA.whatsapp || "62895323418658").replace(/\D/g, "");
  },
  makeUrl: function (customText) {
    const text = (customText && String(customText).trim()) || PROFIL_USAHA.pesanWABooking;
    return `https://wa.me/${this.getCleanNumber()}?text=${encodeURIComponent(text)}`;
  },
  makePaketUrl: function (namaPaket, harga) {
    const labelHarga = harga ? ` (${harga})` : "";
    const msg =
      `Halo ${PROFIL_USAHA.nama}, saya ingin booking layanan:\n\n` +
      `🚿 *Paket:* ${namaPaket}${labelHarga}\n` +
      `🚗 *Kendaraan:* (Mohon isi jenis mobil/motor)\n` +
      `⏰ *Rencana Datang:* Hari ini\n\n` +
      `Mohon konfirmasi ketersediaan antrean. Terima kasih!`;
    return this.makeUrl(msg);
  }
};

// Autohidrasi DOM
document.addEventListener("DOMContentLoaded", function () {
  const p = window.PROFIL_USAHA;
  if (!p) return;

  // 1. Hidrasi elemen dengan atribut [data-config]
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (p[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = p[key];
      } else {
        el.textContent = p[key];
      }
    }
  });

  // 2. Update Status Buka/Tutup Real-Time (WIB) jika elemen tersedia
  const statusEl = document.querySelector("[data-status-operasional]");
  if (statusEl) {
    const now = new Date();
    const wibMinutes = ((now.getUTCHours() + 7) % 24) * 60 + now.getUTCMinutes();
    const openMin = (p.jamBukaHour || 7) * 60 + (p.jamBukaMinute || 30);
    const closeMin = (p.jamTutupHour || 21) * 60 + (p.jamTutupMinute || 0);
    const isOpen = wibMinutes >= openMin && wibMinutes < closeMin;
    statusEl.textContent = isOpen ? "Sedang Buka • Siap Melayani" : "Tutup • Booking untuk Besok";
    statusEl.classList.toggle("is-open", isOpen);
    statusEl.classList.toggle("is-closed", !isOpen);
  }

  // 3. Update Title jika masih menggunakan placeholder lama
  if (p.nama && p.tagline && document.title.includes("Autixir")) {
    document.title = `${p.nama} | ${p.tagline}`;
  }

  // 4. Auto-format seluruh link WhatsApp ke nomor resmi tanpa menghapus pesan khusus paket
  document
    .querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, .floating-wa-btn, a[data-wa-paket], a[data-wa-text]')
    .forEach((a) => {
      const currentHref = a.getAttribute("href") || "";
      if (currentHref.startsWith("#") && currentHref.length > 1) return;

      const paket = a.getAttribute("data-wa-paket");
      const harga = a.getAttribute("data-wa-harga");
      const customText = a.getAttribute("data-wa-text");

      if (paket) {
        a.href = window.EVEV_WA.makePaketUrl(paket, harga);
      } else if (customText) {
        a.href = window.EVEV_WA.makeUrl(customText);
      } else if (currentHref.includes("wa.me") && currentHref.includes("text=")) {
        try {
          const parsed = new URL(currentHref);
          const existingText = parsed.searchParams.get("text");
          a.href = window.EVEV_WA.makeUrl(existingText);
        } catch (err) {
          a.href = window.EVEV_WA.makeUrl();
        }
      } else {
        a.href = window.EVEV_WA.makeUrl();
      }

      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });

  // 5. Intercept Booking Form -> Auto-format pesan WhatsApp rapi ke +62 895-3234-18658
  const bookingForms = document.querySelectorAll(
    "form.appointment-form, form#appointment-form, form#booking-wa-form, form.ltn__car-dealer-form, .ltn__appointment-inner form"
  );
  bookingForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama =
        form.querySelector(
          'input[name="name"], input[name="ltn__name"], input#name, input[placeholder*="Name"], input[placeholder*="Nama"]'
        )?.value?.trim() || "Pelanggan";
      const telp =
        form.querySelector(
          'input[name="phone"], input[name="ltn__phone"], input#phone, input[type="tel"], input[placeholder*="Phone"], input[placeholder*="WhatsApp"]'
        )?.value?.trim() || "-";
      const kendaraan =
        form.querySelector(
          'input[name="vehicle"], input#vehicle, select[name="vehicle"], input[placeholder*="Kendaraan"], input[placeholder*="Mobil"]'
        )?.value?.trim() || "Mobil / Motor";
      const plat =
        form.querySelector('input[name="plat"], input#plat, input[placeholder*="Plat"]')?.value?.trim() || "-";
      const service =
        form.querySelector('select[name="service"], select#service, select')?.value ||
        "Cuci Steam Hidrolik Mobil Komplit";
      const date =
        form.querySelector('input[name="date"], input#date, input[type="date"]')?.value || "Hari ini";
      const time =
        form.querySelector('input[name="time"], select[name="time"], input[type="time"]')?.value ||
        "Secepatnya";
      const catatan =
        form.querySelector('textarea[name="message"], textarea#message, textarea')?.value?.trim() || "";

      let waMessage = `*BOOKING ANTREAN — ${p.nama.toUpperCase()}*\n`;
      waMessage += `----------------------------------\n`;
      waMessage += `Halo admin ${p.nama}, saya ingin reservasi cuci kendaraan:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No. WA:* ${telp}\n`;
      waMessage += `🚗 *Kendaraan:* ${kendaraan}${plat !== "-" ? ` (Plat: ${plat})` : ""}\n`;
      waMessage += `🚿 *Paket Layanan:* ${service}\n`;
      waMessage += `📅 *Tanggal:* ${date}\n`;
      waMessage += `⏰ *Jam Kedatangan:* ${time} WIB\n`;
      if (catatan) {
        waMessage += `📝 *Catatan Khusus:* ${catatan}\n`;
      }
      waMessage += `\nMohon konfirmasi ketersediaan slot hidrolik. Terima kasih!`;

      window.open(window.EVEV_WA.makeUrl(waMessage), "_blank", "noopener,noreferrer");
    });
  });
});
