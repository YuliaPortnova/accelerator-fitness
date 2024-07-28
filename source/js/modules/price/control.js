import { prices } from './model';
import { renderPrice } from './view';

const tabButtonsElements = document.querySelectorAll('.price__tab-button');

let currentIndex = 0;

const initPrices = () => {
  renderPrice(prices[currentIndex], currentIndex);

  tabButtonsElements.forEach((buttonElement, index) => {
    buttonElement.addEventListener('click', () => {
      currentIndex = index;
      renderPrice(prices[currentIndex], currentIndex);
    });
  });
};

export { initPrices };
