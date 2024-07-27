const buttonsElements = document.querySelectorAll('.faq__button');
const categoriesElements = document.querySelectorAll('.faq__category');
const questionButtonsElements = document.querySelectorAll('.faq__question');
const firstOpenQuestionElement = document.querySelector('.faq__question--open + p');

const classesRemove = (elements, cssClass) => {
  elements.forEach((element) => {
    element.classList.remove(cssClass);
  });
};

const initFaq = () => {
  firstOpenQuestionElement.style.maxHeight = `${firstOpenQuestionElement.scrollHeight}px`;

  buttonsElements.forEach((buttonElement, index) => {
    buttonElement.addEventListener('click', () => {
      classesRemove(buttonsElements, 'faq__button--active');
      buttonElement.classList.add('faq__button--active');

      classesRemove(categoriesElements, 'faq__category--open');
      categoriesElements[index].classList.add('faq__category--open');

      const openQuestionElement = categoriesElements[index].querySelector('.faq__question--open + p');
      openQuestionElement.style.maxHeight = `${openQuestionElement.scrollHeight}px`;
    });
  });

  questionButtonsElements.forEach((questionButtonElement) => {
    questionButtonElement.addEventListener('click', () => {
      questionButtonElement.classList.toggle('faq__question--open');

      const clickedDescriptionElement = questionButtonElement.nextElementSibling;
      const isActive = questionButtonElement.classList.contains('faq__question--open');
      clickedDescriptionElement.style.maxHeight = isActive ? `${clickedDescriptionElement.scrollHeight}px` : 0;
    });
  });
};

export { initFaq } ;
