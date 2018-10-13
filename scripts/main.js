var myImage = document.querySelector('img');


function bestFunc() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/itro.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}


myImage.onclick = bestFunc


function myFunc(num1, num2) {
    var result = num1 * num2;
    return result;
}

function add(num1, num2){
    var result = num1 + num2;
    return result;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
/*
Adding some comments
*/
