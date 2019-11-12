// 2. Slide-Out AD

// Global Varibale
const slideOutAd = document.getElementById('slideout-ad');

// Show Ad After 3 Seconds on Page
setTimeout(() => {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show-ad');
}, 2000);

function slideBackAd() {
  slideOutAd.classList.add('hide');
  slideOutAd.classList.remove('show-ad');
}

slideOutAd.addEventListener("click", slideBackAd);
