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
    console.log('fizzbuzz',fizzBuzz);
    var newFizzBuzz = document.createElement('LI');
    newFizzBuzz.textContent = i ;
    answerFizzBuzz.appendChild(newFizzBuzz);
  }
  else if (i % 3 === 0){
    fizz.push(i);
    console.log('fizz', fizz);
    var newFizz = document.createElement('LI');
    newFizz.textContent = i;
    answerFizz.appendChild(newFizz);
  }
  else if (i % 5 === 0){
    buzz.push(i);
    console.log('buzz',buzz);
    var newBuzz = document.createElement('LI');
    newBuzz.textContent = i ;
    answerBuzz.appendChild(newBuzz);
  }
  else{
    console.log(i);
  }
}
console.log(fizzBuzz,' ', fizz,' ', buzz);
answerFizzlar.textContent = `Fizzlar ${fizz.length} ta`;
answerBuzzlar.textContent = `Buzzlar ${buzz.length} ta`;
answerFizzBuzzlar.textContent = `FizzBuzzlar ${fizzBuzz.length} ta`;

});

// var gmCars = [];
// gmCars.push('Nexia', 'Tico', 'Damas');
// gmCars.push('Matiz');
// gmCars.push('Spark', 'Nexia 2', 'Nexia 3', 'Maluba', 'Lacetti', 'Kabolat', 'Gentra', 'Trailblazer', 'Equinox', 'Captiva', 'Epica', 'Tracker', 'Orlando');


// for (var i = 0; i < gmCars.length; i++){
//   console.log(gmCars[i]);
// }