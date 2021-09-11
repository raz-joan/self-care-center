// querySelector variables:
var receiveMessageBtn = document.querySelector('button');
var messageDisplayBox = document.querySelector('#message-display');
var affirmSelect = document.querySelector('#affirmation-radio');
var mantraSelect = document.querySelector('#mantra-radio');

// data models:
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

// other variables:

// event listeners:
receiveMessageBtn.addEventListener('click', decideMessageType);

// functions and event handlers:
function decideMessageType() {
  if (!affirmSelect.checked && !mantraSelect.checked) {
    window.alert("Slow down. You must first select either 'affirmation' or 'mantra' to receive a message!");
  } else if (affirmSelect.checked) {
    returnRandomAffirm();
  } else if (mantraSelect.checked) {
    returnRandomMantra();
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function returnRandomAffirm() {
  messageDisplayBox.innerHTML = `<p>${affirmations[getRandomIndex(affirmations)]}</p>`;
};

function returnRandomMantra() {
  messageDisplayBox.innerHTML = `<p>${mantras[getRandomIndex(mantras)]}</p>`;
};
