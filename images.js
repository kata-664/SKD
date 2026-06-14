var IMAGES = {
  // Avatar & User
  graduate: '🎓',
  user: '👤',
  profil: '👤',
  avatar: '👤',
  
  // Notifikasi
  bell: '🔔',
  notification: '🔔',
  
  // Password
  eye: '👁️',
  eyeOff: '🙈',
  
  // Navigasi
  play: '▶',
  back: '←',
  close: '×',
  prev: '◀',
  next: '▶',
  chevron: '›',
  
  // Status
  check: '✅',
  cross: '❌',
  clock: '⏳',
  warning: '⚠️',
  
  // Achievement
  star: '⭐',
  fire: '🔥',
  trophy: '🏆',
  medal: '🏅',
  rocket: '🚀',
  lightning: '⚡',
  
  // Aksi
  logout: '🚪',
  trash: '🗑️',
  reload: '🔄',
  finish: '✅',
  
  // Menu
  menu: '📋',
  daftarSoal: '📋',
  
  // Kategori
  twk: '📚',
  tiu: '🔢',
  tkp: '⭐',
  
  // Fitur
  simulasi: '⏰',
  materi: '📖',
  statistik: '📊',
  pencapaian: '🏅',
  petunjuk: '📝',
  tentang: 'ℹ️',
  
  // Navigasi Bawah
  home: '🏠',
  
  // Background
  building: '🏛️',
  
  // Quiz Cepat
  qcTwk: '📚',
  qcTiu: '🔢',
  qcTkp: '⭐',
  
  // Hasil
  resultHappy: '😅',
  resultGreat: '🏆',
  resultGood: '🎯',
  resultOk: '💪',
  
  // Matahari & Alam
  sun: '☀️',
  moon: '🌙',
  sunrise: '🌅',
  sunset: '🌇',
  cloud: '☁️',
  sparkle: '✨',
  bird: '🐦',
  flower: '🌸',
  
  // Loading
  loading: '⏳',
  
  // Sosial
  share: '📤',
  save: '💾',
  settings: '⚙️',
  info: 'ℹ️',
  help: '❓',
  
  // Tambahan
  target: '🎯',
  book: '📖',
  chart: '📊',
  lock: '🔒',
  unlock: '🔓',
  badge: '🏅',
  crown: '👑',
  thumbsup: '👍',
  thumbsdown: '👎',
  heart: '❤️',
  party: '🎉',
  think: '🤔',
  brain: '🧠',
  muscle: '💪',
  runner: '🏃',
  shield: '🛡️'
};

// Auto isi semua icon yang punya data-icon
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-icon]').forEach(function(el) {
    var key = el.getAttribute('data-icon');
    if (IMAGES[key]) {
      el.textContent = IMAGES[key];
    }
  });
});
