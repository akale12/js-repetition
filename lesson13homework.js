let userName = 'Akale';

userName = "notAkale";

console.log(userName);

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

let result = '';
const length = 5;

for (let i = length; i >= 0; i--) {

    for(let j = 0; j <= length - i; j++) {
        result += ' ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

const superCars = +prompt ("Сколько у меня машин?", '');

const categoryCars = {
    count: superCars,
    models: {},
    price: {},
    year: []
};

// const aQestion = prompt("Какая у меня машина?", ''),
//       bQestion = +prompt("На сколько я, её оценил?"),  
//       cQestion = prompt("Какая ваша вторая машина?", ''),
//       dQestion = +prompt("На сколько я, её оценил?");
      
// categoryCars.models[aQestion] = bQestion;
// categoryCars.models[cQestion] = dQestion;

for (let i = 0; i < 2; i ++) {
    const aQestion = prompt("Какая у вас машина?", ''),
          bQestion = +prompt("На сколько вы бы, её оценили?");

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        categoryCars.models[aQestion] = bQestion;
            console.log("Всё правильно");
    } else {
        console.log("Что-то пошло не так");
    }

    if (categoryCars.count < 10) {
        console.log("У вас мало машин");
    } else if (categoryCars.count >= 10 && categoryCars.count < 30) {
        console.log("Вы классический водитель");
    } else if (categoryCars.count >= 30) {
        console.log("Вы обычный водитель");
    } else {
        console.log("У вас нету опыта вождения");
    }
};

console.log(categoryCars);

// phai1Ha6Thiehee