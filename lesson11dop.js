'use strict';

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Ok!');
// } else {
//     console.log('Not ok!');
// }

// console.log((hamburger && fries)); //Тут оно просто вернуло нам логическое значение.

//Динамическая типизация в javascripte, т.е. типы данных могут, переходить один в другой
//строка может стать 'числом' и наоборот, и что угодно может стать логическим значением.



console.log(hamburger === 3 && cola === 1 && fries);
//Логические операторы что-то возвращают(какой-либо результат) - (значения)
//В данном случаи тут выведится последнее значения(1), потому-что оператор и возвращает последнее правдивое значение



// const hamburger = 3;
// const fries = 1;
// const cola = 1;
// ТОЖЕ ЗА КОММЕНТИРОВАЛ

//Оператор И, возвращает первое ложное значение, на котором он остановился(в моём случаи это 'cola')
//А если все аргументы будут правдивыми, то он вернёт последнее значение(т.е. 'fries')
// console.log(hamburger === 3 && cola && fries);


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

//Закомментировал выше код

// console.log(1 && 0);
// console.log(1 && 5); //Тут оба выражения равны и оператор "&&(И)" вернет последнее значение - т.е. 5
// console.log(null && 5);
// console.log(0 && 'test');


//ЗДЕСЬ МЫ РАБОТАЕМ С ОПЕРАТОРОМ ||(ИЛИ)
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

//В итоге мы получим 'true', потому-что одно из больших условий выполнилось
//В первом условии мы получили 'false', во втором 'true'
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let jonhReport, alexReport, samReport, mariaReport = 'done';

console.log(jonhReport || alexReport || samReport || mariaReport);

console.log(!0);

//Как только оператор или || находит правду, то он перестаёт работать(если мы получили правду),
//то всё остальное отбрасывается, и нет смысла ему уже находить остальные значения,
//А если не всё правда, то возвращается последнее значение, также и с оператором и(&&)

//пример:
// hamburger = 3
// cola = 0
// fries = 0
// if (hamburger || fries || cola)