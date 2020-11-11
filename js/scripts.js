var formFizzBuzz = document.querySelector('.form');
var input = formFizzBuzz.querySelector('.input');
var answerFizz = document.querySelector('.answer-fizz');
var answerBuzz = document.querySelector('.answer-buzz');
var answerFizzBuzz = document.querySelector('.answer-fizzbuzz');
var answerFizzlar = document.querySelector('.fizzlar');
var answerBuzzlar = document.querySelector('.buzzlar');
var answerFizzBuzzlar = document.querySelector('.fizzbuzzlar');


formFizzBuzz.addEventListener('submit', function(evt){
  evt.preventDefault();

var inputValue = parseInt(input.value.trim(),10);

var fizzBuzz = [];
var fizz = [];
var buzz = [];
answerFizzBuzz.innerHTML = '';
answerFizz.innerHTML = '';
answerBuzz.innerHTML = '';

for (var i = 1; i <= inputValue; i++){
  
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push(i);
    var newFizzBuzz = document.createElement('LI');
    newFizzBuzz.textContent = i ;
    answerFizzBuzz.appendChild(newFizzBuzz);
  }
  else if (i % 3 === 0){
    fizz.push(i);
    var newFizz = document.createElement('LI');
    newFizz.textContent = i;
    answerFizz.appendChild(newFizz);
  }
  else if (i % 5 === 0){
    buzz.push(i);
    var newBuzz = document.createElement('LI');
    newBuzz.textContent = i ;
    answerBuzz.appendChild(newBuzz);
  }
}
answerFizzlar.textContent = `Fizzlar ${fizz.length} ta`;
answerBuzzlar.textContent = `Buzzlar ${buzz.length} ta`;
answerFizzBuzzlar.textContent = `FizzBuzzlar ${fizzBuzz.length} ta`;
input.value= '';
});
