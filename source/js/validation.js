const form = document.querySelector('.form__form');
const nameInput = form.querySelector('.form__input--text');
const telInput = form.querySelector('.form__input-tel');
const submitButton = form.querySelector('.form__button');

nameInput.addEventListener("input", function (event) {
  if (nameInput.validity.valid) {
    nameInput.classList.remove('form__input--error');
  }
});

telInput.addEventListener("input", function (event) {
  if (telInput.validity.valid) {
    telInput.classList.remove('form__input--error');
  }
});

form.addEventListener("submit", (event) => {
  if (!nameInput.validity.valid) {
    nameInput.classList.add('form__input--error');
    event.preventDefault();
  }
  if (!telInput.validity.valid) {
    telInput.classList.add('form__input--error');
    event.preventDefault();
  }
});

// const form = document.querySelector('.form__form');
// const inputs = form.querySelectorAll('.form__input');

// inputs.forEach(input => {
//     input.addEventListener('invalid', () => {
//         input.classList.add('form__input--error');
//     });

//     input.addEventListener('input', () => {
//         input.classList.remove('form__input--error');
//     });
// });
