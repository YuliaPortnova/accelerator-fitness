const formElement = document.querySelector('.form__form');
const inputsElements = formElement.querySelectorAll('.form__input');

const messages = {
  required: 'Это обязательное поле',
  error: 'Некорректные данные',
};

const showMessage = (isValueMissing, element) => {
  let message = messages.error;
  if (isValueMissing) {
    message = messages.required;
  }
  element.nextElementSibling.textContent = message;
  element.classList.add('form__input--error');
};

const initValidation = () => {
  inputsElements.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      if (inputElement.validity.valid) {
        inputElement.classList.remove('form__input--error');
      }
    });
  });

  formElement.addEventListener('submit', (event) => {
    inputsElements.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        showMessage(inputElement.validity.valueMissing, inputElement);
        event.preventDefault();
      }
    });
  });
};

export { initValidation };
