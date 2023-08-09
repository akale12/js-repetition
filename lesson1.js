"use strict";

const superCars = +prompt ("Сколько у меня будет машин?", '');

const categoryCars = {
    count: superCars,
    models: {},
    price: {},
    year: []
};

const aQestion = prompt("Какая ваша первая машина?", ''),
      bQestion = +prompt("На сколько я, её оценил?"),  
      cQestion = prompt("Какая ваша вторая машина?", ''),
      dQestion = +prompt("На сколько я, её оценил?");
      
categoryCars.models[aQestion] = bQestion;
categoryCars.models[cQestion] = dQestion;

console.log(categoryCars);

const personAge = 26,
      personYear = 1997;
      
console.log(' Мне скоро будет ' + personAge + ',Я родился в', + personYear);      
      
