import { Swiper } from '../vendor/swiper';

new Swiper('.reviews', {
  watchOverflow: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      simulateTouch: true,
      spaceBetween: 100,
      speed: 500,
    },
    768: {
      simulateTouch: true,
      grabCursor: true,
      spaceBetween: 750,
      speed: 800,
    },
    1366: {
      simulateTouch: false,
      grabCursor: false,
      spaceBetween: 750,
      speed: 900,
    }
  },

});
