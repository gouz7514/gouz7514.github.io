'use strict';

const introText = document.querySelector('.intro-container');

function checkSlide(e) {
    const introHeight = introText.getBoundingClientRect().height;
    const introOffTop = introText.offsetTop;

    const fadeInAt = (window.scrollY + window.innerHeight) - introHeight / 4;
    const introBottom = introOffTop + introHeight;

    const isHalfShown = fadeInAt > introOffTop;
    const isNotScrolledPast = window.scrollY + introBottom;

    if (isHalfShown && isNotScrolledPast) {
        introText.classList.add('active');
    } else {
        introText.classList.remove('active');
    }
}

function debounce(func, wait = 50, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

window.addEventListener('scroll', debounce(checkSlide));
