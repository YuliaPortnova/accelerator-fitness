const form = document.querySelector('.form__form');
const inputs = form.querySelectorAll('.form__input');

const messages = {
  required: 'Это обязательное поле',
  error: 'Некорректные данные',
};

const showMessage = (isValueMissing, input) => {
  let message = messages.error;
  if (isValueMissing) {
    message = messages.required;
  }
  input.nextElementSibling.textContent = message;
  input.classList.add('form__input--error');
};

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.classList.remove('form__input--error');
    }
  });
});

form.addEventListener('submit', (event) => {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showMessage(input.validity.valueMissing, input);
      event.preventDefault();
    }
  });
});
