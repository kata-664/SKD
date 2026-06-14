// ========== IMAGES & ICONS DATABASE ==========
// Menggunakan var agar bisa diakses dari semua file JS
var IMAGES = {
  // ========== ICON UMUM ==========
  graduate: '🎓',
  user: '👤',
  bell: '🔔',
  eye: '👁️',
  eyeOff: '🙈',
  play: '▶',
  chevron: '›',
  building: '🏛️',
  back: '←',
  close: '×',
  check: '✅',
  cross: '❌',
  clock: '⏳',
  star: '⭐',
  fire: '🔥',
  trophy: '🏆',
  medal: '🏅',
  rocket: '🚀',
  lightning: '⚡',
  warning: '⚠️',
  logout: '🚪',
  trash: '🗑️',
  reload: '🔄',
  menu: '📋',
  
  // ========== KATEGORI ==========
  category: {
    twk: '📚',
    tiu: '🔢',
    tkp: '⭐',
    simulasi: '⏰',
    kuisCepat: '⚡',
    materi: '📖',
    statistik: '📊',
    pencapaian: '🏅',
    petunjuk: '📝',
    tentang: 'ℹ️'
  },
  
  // ========== MENU ICONS ==========
  menuIcons: {
    home: '🏠',
    latihan: '📚',
    statistik: '📊',
    profil: '👤'
  },
  
  // ========== STATS ==========
  stats: {
    totalLatihan: '📚',
    totalSoal: '📝',
    skorTertinggi: '⭐'
  },
  
  // ========== QUIZ CEPAT ==========
  quizCepat: {
    twk: { icon: '📚', name: 'TWK', fullName: 'Tes Wawasan Kebangsaan' },
    tiu: { icon: '🔢', name: 'TIU', fullName: 'Tes Intelegensi Umum' },
    tkp: { icon: '⭐', name: 'TKP', fullName: 'Tes Karakteristik Pribadi' }
  },
  
  // ========== NAVIGASI ==========
  nav: {
    prev: '◀ Prev',
    next: 'Next ▶',
    finish: '✅ Selesai',
    daftarSoal: '📋 Daftar Soal',
    lanjutBelajar: 'Lanjut Belajar',
    mulaiSimulasi: '🚀 MULAI SIMULASI UJIAN',
    mulaiKuis: '🚀 Mulai Kuis!'
  },
  
  // ========== STATUS ==========
  status: {
    selesai: '✅ Selesai',
    belum: '⏳ Belum',
    benar: '✅ BENAR',
    salah: '❌ SALAH',
    belumJawab: '⏳ BELUM',
    timerOn: '⏱️ ON',
    timerOff: '⏸️ OFF'
  },
  
  // ========== LOGIN ==========
  login: {
    title: 'Latihan SKD CPNS',
    subtitle: 'Masuk untuk mulai belajar',
    masukBtn: 'Masuk',
    errorMsg: '⚠️ Username atau password salah!'
  },
  
  // ========== RESULT ==========
  result: {
    lulus: '🎉 SELAMAT! Anda LULUS Passing Grade SKD!',
    gagal: '⚠️ Belum lulus passing grade. Terus semangat berlatih!',
    ulangi: '🔄 Ulangi',
    evaluasi: '📋 Evaluasi'
  },
  
  // ========== MODAL ==========
  modal: {
    logoutTitle: 'Yakin Ingin Logout?',
    logoutMsg: 'Kamu akan keluar dari akun ini dan kembali ke halaman login.',
    resetTitle: 'Reset Progress',
    resetMsg: 'Yakin ingin mereset semua skor latihan?'
  },
  
  // ========== AKUN ==========
  akun: {
    title: '👤 Profil Saya',
    aktif: '✅ Akun Aktif'
  },
  
  // ========== MISC ==========
  misc: {
    selamatPagi: 'Selamat pagi',
    selamatSiang: 'Selamat siang',
    selamatSore: 'Selamat sore',
    selamatMalam: 'Selamat malam',
    selamatSubuh: 'Selamat subuh',
    motto: 'Tetap semangat, raih masa depanmu! 👋',
    newBest: '🎉 Rekor Baru!',
    belumAda: 'Belum ada'
  }
};
