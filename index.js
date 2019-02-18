const Tesseract = require('tesseract.js');
const robot = require('robotjs');

Tesseract.recognize('/home/akshay/Desktop/Project AP103/Project AP103 (100).jpg')
  .then(result => {
    console.log('Done. Starting typing in...');
    console.log(3);
    let i = 2;
    const timer = setInterval(() => {
      if(i === 0) {
        console.log('Here we go ... ');
        clearInterval(timer);
      } else {
        console.log(i--);
      }
    }, 1000);
    setTimeout(() => {
      robot.typeStringDelayed(result.text, 10000);
    }, 4000);
  });