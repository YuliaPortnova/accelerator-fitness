import { Swiper } from '../vendor/swiper';

new Swiper('.jury__container', {
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 40,
  speed: 500,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      slidesPerView: 2,
      simulateTouch: true,
      grabCursor: true,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
      grabCursor: false,
    }
  },
});
