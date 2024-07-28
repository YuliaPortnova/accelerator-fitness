const tabButtonsElements = document.querySelectorAll('.price__tab-button');
const pricesElements = document.querySelectorAll('.price__rate-price');

const renderPrice = (prices, currentIndex) => {
  tabButtonsElements.forEach((element, elementIndex) => {
    element.classList.toggle('price__tab-button--active', elementIndex === currentIndex);
  });

  pricesElements.forEach((element, index) => {
    element.querySelector('span').textContent = prices[index];
    element.dataset.price = prices[index];
  });
};

export { renderPrice };
