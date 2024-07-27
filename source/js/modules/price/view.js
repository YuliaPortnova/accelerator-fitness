const renderPrice = (elements, prices) => {
  elements.forEach((element, index) => {
    element.textContent = prices[index];
    element.dataset.price = prices[index];
  });
}

export { renderPrice };

