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
    //save an object with email and message to local storage
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

let savedData = localStorage.getItem('feedback-form-state');
let parsedData = JSON.parse(savedData);

window.addEventListener('load', e => {
  //   e.preventDefault();
  //use try catch to avoid error if local storage is empty
  //fill the form with the data from local storage
  try {
    formEl.elements.email.value = parsedData.email;
    formEl.elements.message.value = parsedData.message;
  } catch (error) {
    console.log('Please fill in the form fields');
  }
});

submitBtnEl.addEventListener('click', e => {
  e.preventDefault();
  //log formData
  console.log('email:', formEl.elements.email.value);
  console.log('message:', formEl.elements.message.value);
  //clear data-form
  formEl.reset();
  //clear local storage
  localStorage.clear();
});
