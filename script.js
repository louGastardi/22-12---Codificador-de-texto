'use strict';

const encryptBtn = document.getElementById('encrypt');
const decryptBtn = document.getElementById('decrypt');
const copyBtn = document.getElementById('copy');
const output = document.getElementById('outputMessage');
const noMessage = document.querySelector('.rightSideNoMessage');
const showMessage = document.querySelector('.rightSideShowMessage');
const textarea = document.getElementById('textAreaUser');

// Display lottie - Search
let animationArea = document.querySelector('.animate');
let animationObject = bodymovin.loadAnimation({
  container: animationArea,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  autoloadSegments: false,
  path: 'Reizinho_Search.json',
});

// Display right side

function displayRightSide(content) {
  if (content !== '') {
    noMessage.style.display = 'none';
    showMessage.style.display = 'block';
  } else {
    noMessage.style.display = 'block';
    showMessage.style.display = 'none';
  }
}

// Colect text from textarea, encrypt it and return to display area

encryptBtn.addEventListener('click', function () {
  let encryptedText = textarea.value
    .replaceAll('a', 'ai')
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
  output.innerHTML = encryptedText;
  textarea.value = '';

  displayRightSide(encryptedText);

  return encryptedText;
});

// Decrypt message and display it

decryptBtn.addEventListener('click', function () {
  let decryptedText = textarea.value
    .replaceAll('ufat', 'u')
    .replaceAll('ober', 'o')
    .replaceAll('imes', 'i')
    .replaceAll('enter', 'e')
    .replaceAll('ai', 'a');
  output.innerHTML = decryptedText;
  textarea.value = '';
  displayRightSide(decryptedText);
  return decryptedText;
});

// Copy text to clipboard
copyBtn.addEventListener('click', function () {
  navigator.clipboard.writeText(output.innerHTML);
  console.log('text copied!');
});
