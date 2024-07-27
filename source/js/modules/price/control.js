import { prices } from './model';
import { renderPrice } from './view';

const tabButtonsElements = document.querySelectorAll('.price__tab-button');
const pricesElements = document.querySelectorAll('.price__rate-price');

let currentIndex = 0;

const initPrices = () => {
  tabButtonsElements[currentIndex].classList.add('price__tab-button--active');

  tabButtonsElements.forEach((buttonElement, index) => {
    buttonElement.addEventListener('click', () => {
      currentIndex = index;
      tabButtonsElements.forEach((element, elementIndex) => {
        element.classList.toggle('price__tab-button--active', elementIndex == currentIndex);
      });
      renderPrice(pricesElements, prices[currentIndex]);
    });
  })
};

export { initPrices };
