'use strict';


// переменная записанная внутри функции, используется глобально(как прочитаю и пойму сам)
let num = 20; // это глобальная переменная и она доступна и её можно вытащить

          //в круглых скобках передаётся аргументы функций.
          // внутри фигурных скобок, выполняется какие-либо действия     
function showFirstMessage(text) {
    console.log(text);
    let num = 10; //если мы обьявляем переменные внутри функции, то снаружи она уже недоступна + если она создала внутри функций, то называется локальной
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);  
};

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));