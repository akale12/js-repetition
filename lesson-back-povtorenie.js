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

const mySuperCars = +prompt("Сколько у вас машин?", '');

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

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
};

console.log (hamburger === 3 && cola || fries === 3 && nuggets);

const mers = 4;
const bmw = 0;
const honda = 0;

if (mers || bmw && honda) {
    console.log('Имеются все машины');
} else {
    console.log('Одной марки машины не имеется');
};

console.log(!0);

const firstHouse = 6;
const secondHouse = 4;
const thirdHouse = 0;
const fourdHouse = 4;

if (firstHouse === 7 && secondHouse || thirdHouse === 2 && fourdHouse) {
    console.log('У всех имеются дома');
} else {
    console.log('Не у всех имеются дома');
}; 

let $num = 50;

// while ($num < 55) {
//     console.log($num);
//     $num++;
// };

// do {
//     console.log($num);
//     $num++;
// }
// while ($num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

let result = '';
const length = 7;

                //цикл будет остановиться, когда итератор меньше чем заданная длина
for (let i = 1; i < length; i++) {

    for  (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);             
    }
      for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);             
        }
};

for (let i = 1; i < 4; i++) {
        console.log(`First level: ${i}`);
}

function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

function secondTask() {
    for (let i = 20; i > 10; i++) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0);
    }
};

function fourdTask() {
    let i = 2;

    while(i <= 16) {
        if (i % 2 === 0) {
            i++
            continue;
        } else {
            console.log(i);
        }
            i++;
    }
}

function fifthTask() {
    const arrayS = [];

    for (let i = 5; i < 11; i++) {
        arrayS[i - 5] = i;
    }

        console.log(arrayS);
        return arrayS;
};


let $$resultat = "";
const $length = 8;

for (let i = 1; i < $length; i++) {

    for (let j = 0; j <= i; j++) {
        $$resultat += "*";
    }

    $$resultat += "\n";
};

console.log($$resultat);


// let $$result = "";
// const $$dlina = 5;

// for (let i = $$dlina; i => 0; i--) {
//     for (let j = 0; j <= $$dlina - i; j++) {
//         $$result += " ";
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//         $$result += "*";
//     }

//     $$result +="\n";
// }

// console.log($$result);





