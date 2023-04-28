//refactor lodash throttle used for storage update

import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const submitBtnEl = document.querySelector('button');

let formData;
let emailInput = document.querySelector('[name="email"]');
let messageTextarea = document.querySelector('[name="message"]');

formEl.addEventListener(
  'input',
  throttle(() => {
    formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    //zapisuje obiekt z polami email i message
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }),
  500
);

let savedData = localStorage.getItem('feedback-form-state');
let parsedData = JSON.parse(savedData);

window.addEventListener('load', e => {
  //   e.preventDefault();
  //dodaj try catch lub warunek jeśli local storage jest pusty
  //wypełnij danymi z local storage pola formularza
  try {
    formEl.elements.email.value = parsedData.email;
    formEl.elements.message.value = parsedData.message;
  } catch (error) {
    console.log('Please fill in the form fields');
  }
});

submitBtnEl.addEventListener('click', e => {
  e.preventDefault();
  //wyloguj formData
  console.log('email:', formEl.elements.email.value);
  console.log('message:', formEl.elements.message.value);
  //wyczyść dane formularza
  formEl.reset();
  //wyczyść local storage
  localStorage.clear();
});
