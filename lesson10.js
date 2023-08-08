"use strict";

if (4) {
    console.log('Ok!');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('error'); 
} else if (num > 100) {
    console.log('A lot');
} else {
    console.log('ok');
}
                    //1.1                    //1.2
(num === 50) ? console.log('ok') : console.log('error');  // это Тернарный оператор, потому-что в его работе, участвуют аж три аргумента

// 1)Сначала идёт условие
// 3)Если вдруг это условие верно, то выполняется это действие(пункт 1.1)
// 4)Если вдруг это условие неверно, то выполняется это действие(пункт)

const $num = 50;

const testing = 100;

if (testing > 80) {
    console.log('okay');
} else if (testing > 150) {
    console.log('Слишком много')
} else {
    console.log('Error');
}


switch ($num) {

    case 49:
        console.log("Неверно");
        break;
            
    case 100:
        console.log("Тоже Неверно");
        break;  

    case 50:
        console.log("Бинго!");
        break; 
        
    default:
        console.log("Не в этот раз");
        break;    
};

const zadacha = 5 * 5;

switch (zadacha) {
    
    case 15:
        console.log('Its right');
            break;

    case 30:
        console.log('Not right');
            break;
            
    case 35:
        console.log('not right too');
        break;
        
    default:
        console.log('nothing');
        break;    
}


//Конструкция 'switch', всегда идёт на строгое сравнение, в отличии от обычных условий.