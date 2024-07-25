const buttons = document.querySelectorAll('.faq__button');
const categories = document.querySelectorAll('.faq__category');
const questionButtons = document.querySelectorAll('.faq__question');
const firstOpenQuestion = document.querySelector('.faq__question--open + p');

const classesRemove = (elements, cssClass) => {
  elements.forEach((element) => {
    element.classList.remove(cssClass);
  });
};

const initFaq = () => {
  firstOpenQuestion.style.maxHeight = `${firstOpenQuestion.scrollHeight}px`;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      classesRemove(buttons, 'faq__button--active');
      button.classList.add('faq__button--active');

      classesRemove(categories, 'faq__category--open');
      categories[index].classList.add('faq__category--open');

      const openQuestion = categories[index].querySelector('.faq__question--open + p');
      openQuestion.style.maxHeight = `${openQuestion.scrollHeight}px`;
    });
  });

  questionButtons.forEach((questionButton) => {
    questionButton.addEventListener('click', () => {
      questionButton.classList.toggle('faq__question--open');

      const clickedDescription = questionButton.nextElementSibling;
      const isActive = questionButton.classList.contains('faq__question--open');
      clickedDescription.style.maxHeight = isActive ? `${clickedDescription.scrollHeight}px` : 0;
    });
  });
};

export { initFaq } ;
