'use strict';

let userName = 'Alex';
userName = 'Sam';

console.log(userName);

const storeName = 'HamsterHolding';

const storeDescription = {

    budget: 10000,
    workers: ['John', 'Dennis', 'Kate'],
    products: {
        book: 3400,
        pen: 1200
    },
        open: true
};

const mySuperCars = +prompt("Сколько у меня будет машин в будущем?", '');

const categoryCars = {
    count: mySuperCars,
    models: {},
    releaseYear: {},
    speed: [],
    privat: true
};

const aQuestion = prompt("Какая у меня будет первая машина?", ''),
      bQuestion = +prompt("Насколько бы я её оценил?", ''),
      cQuestion = prompt("Какая у меня будет вторая машина?", ''),
      dQuestion = +prompt("Насколько бы я её оценил?", '');

categoryCars.models[aQuestion] = bQuestion;
categoryCars.models[cQuestion] = dQuestion;

console.log(categoryCars);


const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('A lot');
} else if (num > 49) {
    console.log('Yes, bingo!');
}

const hamburger = true;
const fries = false;

