"use strict";

const myFutureCars = +prompt("Сколько у меня будет машин?", '');

const categoryCars = {
    count: myFutureCars,
    models: {},
    actors: {},
    genres: [],
    privat: true
};

const firstQuestion = prompt("Какая у меня была первая машина?", ''),
      secondQuestion = prompt("На сколько бы я её оценил?", ''),
      thirdQuestion = prompt("Какая у меня была вторая машина?", ''),
      fourdQuestion = prompt("На сколько бы я её оценил?", '');

categoryCars.models[firstQuestion] = secondQuestion;
categoryCars.models[thirdQuestion] = firstQuestion;

console.log(categoryCars);

let userName = 'Sam';

userName = 'Denis';

console.log(userName);

const storeName = "AsylHolding";

const storeDescription = {
    budget: 10000000,
    employees: ['Leo', 'Cristano', 'John'],
    products: {
        'cars': 250000,
        'house': 350000
    },

    open: true
}


const loading = 100;


