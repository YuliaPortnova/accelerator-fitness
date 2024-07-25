import { Swiper } from '../vendor/swiper';

new Swiper('.reviews', {
  watchOverflow: true,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      simulateTouch: true,
    },
    768: {
      simulateTouch: true,
      grabCursor: true,
    },
    1366: {
      simulateTouch: false,
      grabCursor: false,
    }
  }
});
