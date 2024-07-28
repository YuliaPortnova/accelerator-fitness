import { Swiper } from '../vendor/swiper';

const initReviewsSlider = () => {
  new Swiper('.reviews__container', {
    watchOverflow: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    breakpoints: {
      320: {
        simulateTouch: true,
        grabCursor: true,
        spaceBetween: 150,
        speed: 500,
      },
      768: {
        simulateTouch: true,
        grabCursor: true,
        spaceBetween: 200,
        speed: 800,
      },
      1366: {
        simulateTouch: false,
        grabCursor: false,
        spaceBetween: 450,
        speed: 900,
      }
    },
  });
};

export { initReviewsSlider };
