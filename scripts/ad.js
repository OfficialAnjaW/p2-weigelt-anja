// 2. POP-UP AD

// Global Varibale
const slideOutAd = document.getElementById('slideout-ad');

// Show Ad After 3 Seconds on Page
setTimeout(() => {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show-ad');
}, 2000);