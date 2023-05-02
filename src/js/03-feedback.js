import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const submitBtnEl = document.querySelector('button');

const save = data => {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const throttledSave = throttle(data => save(data), 500);

formEl.addEventListener('input', event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    message: message.value,
  };

  throttledSave(formData);
});

let savedData = localStorage.getItem('feedback-form-state');
let parsedData;
try {
  parsedData = JSON.parse(savedData);
} catch {
  console.log('');
}

// window.addEventListener('load', e => {})

if (parsedData) {
  formEl.elements.email.value = parsedData.email;
  formEl.elements.message.value = parsedData.message;
} else {
  console.log('Please fill in the form fields');
}

submitBtnEl.addEventListener('click', e => {
  e.preventDefault();
  //log formData
  console.log('email:', formEl.elements.email.value);
  console.log('message:', formEl.elements.message.value);
  console.log(savedData);
  //clear data-form
  formEl.reset();
  //clear local storage
  localStorage.clear();
});
