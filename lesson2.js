'use strict'; // работаем в современном режиме, где уже не работают, 
             //некоторые не точности, которые были в старых стандартах JS

a = 15;
console.log(a);

let number = 5;

const leftBorderWidth = 1; //Такой формат написания, называется КемолКейс

number = 10;
console.log(number); 

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);


console.log(name);
var name = 'Akylbek'; //это называется хостинг, или всплытие переменных

{
    let result = 50;
}

console.log(result);

alert(5);

[].push('a');

const persone = {
    name: 'Denis',
    age: 28,
    i$Married: true
};

console.log(persone['name']);


const hamburger = 4;
const cola = 3;
fries = 2;

console.log(hamburger === 4 && cola === 3 && fries);


const number0Films = +prompt("Сколько у вас просмотренных фильмов?", '');

const personalMovieDB = {

    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false 

};

const aQestion = prompt("Сколько у вас просмотренных фильмов?",''),
      bQestion = +prompt("На сколько бы, вы её оценили?", ''),
      cQestion = prompt("Сколько у вас просмотренных фильмов?", ''),
      dQestion = +prompt("Насколько бы, вы её оценили?", '');
      
personalMovieDB.movies[aQestion];
personalMovieDB.movies[dQestion];

console.log(personalMovieDB);

