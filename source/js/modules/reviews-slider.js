import { Swiper } from '../vendor/swiper';

new Swiper('.reviews__container', {
  watchOverflow: true,
  speed: 500,
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
