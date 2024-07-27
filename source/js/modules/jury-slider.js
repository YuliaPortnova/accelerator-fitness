import { Swiper } from '../vendor/swiper';

const initJurySlider = () => {
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
        slidesPerGroup: 2,
        slidesPerView: 2,
        simulateTouch: true,
        grabCursor: true,
      },
      1366: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        speed: 800,
        simulateTouch: false,
        grabCursor: false,
      }
    },
  });
};

export { initJurySlider };
