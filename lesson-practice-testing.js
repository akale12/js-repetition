'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('A lot');
} else {
    console.log('ok!');
}

const $num = 100;

if ($num < 99) {
    console.log('Это неправильно');
} else if ($num > 99) {
    console.log('Вот это уже правильно');
} else if ($num > 200) {
    console.log('Слишком много');
} else {
    console.log('Okay');
}

(num === 50) ? console.log('Ok') : console.log('Error');

const $$num = 50

switch ($$num) { 
    case 49: 
        console.log('Неверно');
            break; 
    case 50: 
        console.log('Верно');
            break;      
    case 51:
        console.log('Тоже неверно');
            break;
    default: 
        console.log('Нету правильного решения');
            break;
}

console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);


// *
// **
// ***
// ****
// *****
// ******
// *******

let $result = '';

const $length = 8;

for (let i = 1; i < $length; i++) {

    for (let j = 0; j < i; j++) {
        $result += '*'
    }

    $result += '\n'
}

console.log($result);


//Правильно
function firstTast() {
    for (let i = 5; i < 11; i++) {
            console.log(i);
    }
}

//Правильно, но забыл некоторые строки кода
function secondTask() {
    for (let i = 20; i > 10; i--) {
            if (i === 13) {
                console.log(i);
                break;
            }
    }
}

//Правильно, также забыл некоторые строки кода
function thirdTask() {
    for (let i = 2; i < 10; i++) {
        if (i % 2 === 0);
            console.log(i);
    }
}

//Правильно, но забыл некоторые строки кода
function fourdTask () {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
            i++;
    };
};


//Правильно, но нижняя часть кода была просмотрена
function fifthTask() {
    const arrayS = [];

    for (let i = 5; i < 11; i++) {
        arrayS[i - 5] = i;
    }

    console.log(arrayS);
    return arrayS;
}

const elka = 5;
let resultat = "";

for (let i = 0; i <= elka; i ++) {
    for(let j = 0; j <= elka - i; j++) {
        resultat += " ";
    }

    for(let j = 0; j < 2 * i + 1; j++) {
        resultat += "*";
    }

    resultat += "\n";

}

console.log(resultat);

// const number0Films = +prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//     count: number0Films,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// const firstQuestion = prompt("Один из последних просмотренных фильмов?", ''),
//       secondQuestion = prompt("На сколько оцените его?", ''),
//       thirdQuestion = prompt("Один из последних просмотренных фильмов?", ''),
//       fourdQuestion = prompt ("На сколько оцените его?", '');
      
// personalMovieDB.movies[firstQuestion] = secondQuestion;
// personalMovieDB.movies[thirdQuestion] = fourdQuestion;

// console.log(personalMovieDB);

// const myFutureCars = +prompt("Сколько у меня будет машин?", '');




