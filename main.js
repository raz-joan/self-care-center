// querySelector variables:
var receiveMessageBtn = document.querySelector('#receive-button');
var messageDisplayBox = document.querySelector('#message-display');
var affirmSelect = document.querySelector('#affirmation-radio');
var mantraSelect = document.querySelector('#mantra-radio');
var clearMessageBtn = document.querySelector('#clear-button');
var deleteMessageBtn = document.querySelector('#delete-button');

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
clearMessageBtn.addEventListener('click', replaceMessageWithIcon);
deleteMessageBtn.addEventListener('click', deleteMessage);

// functions and event handlers:
function decideMessageType() {
  if (!affirmSelect.checked && !mantraSelect.checked) {
    window.alert("Hey there, you've got to slow down! First, you must select either 'affirmation' or 'mantra' to receive a message. Blessings!");
  } else if (affirmSelect.checked) {
    returnRandomMessage(affirmations);
  } else if (mantraSelect.checked) {
    returnRandomMessage(mantras);
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function returnRandomMessage(array) {
  messageDisplayBox.innerHTML = `<p>${array[getRandomIndex(array)]}</p>`;
  clearMessageBtn.classList.remove('hidden');
  deleteMessageBtn.classList.remove('hidden');
};

function replaceMessageWithIcon() {
  messageDisplayBox.innerHTML = `<img src="./assets/meditate.svg" alt="Meditation Icon">`;
  clearMessageBtn.classList.add('hidden');
  deleteMessageBtn.classList.add('hidden');
};

function deleteMessage() {
  var currentMessage = messageDisplayBox.firstElementChild.innerText;
  var answer = window.confirm("Woah! Are you sure you want to delete this message? You will not be able to see it again!");
  if (answer) {
    if (affirmSelect.checked) {
      for (var i = 0; i < affirmations.length; i++) {
        if (currentMessage === affirmations[i]) {
          affirmations.splice(i, 1);
          replaceMessageWithIcon();
        }
      }
    } else if (mantraSelect.checked) {
      for (var i = 0; i < mantras.length; i++) {
        if (currentMessage === mantras[i]) {
          mantras.splice(i, 1);
          replaceMessageWithIcon();
        }
      }
    }
  }
}
