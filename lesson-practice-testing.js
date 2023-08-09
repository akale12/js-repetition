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
