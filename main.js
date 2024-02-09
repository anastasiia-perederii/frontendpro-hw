
//1/ Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let i = 19.5;
let arr1 = [];

do {
    i += 0.5;
    arr1.push(i);
} while (i < 30);

console.log(arr1);

//2/ Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let usd = 27;
let arr2 = [];

for(let i = 10; i <= 100; i++){
    if(i % 10 === 0) {
        arr2.push(i * usd);
    }
}

console.log(arr2);

//3/ Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let myInteger = 85;
let arr3 = [];

for(let i = 1; i < 100; i++) {
    if (i ** 2 < myInteger) {
        arr3.push(i);
    }
}

console.log(arr3);

//4/ Дане ціле число. З'ясувати, чи є воно простим.

let myInt = 5;
function primeNumber(numb) {

    if (numb === 1)  {
        return console.log('Число не є простим');
    }
    else if(numb === 2)  {
        return console.log('Число є простим');
    } else   {
        for(let i = 2; i < numb; i++)  {
            if(numb % i === 0) {
                return console.log('Число не є простим');
            }
        }
        return console.log('Число є простим');
    }
}
primeNumber(myInt);

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.

let myNumb = 81;

function power(numb) {
    while (numb % 3 === 0) {
        numb /= 3;
    }
    return numb === 1;
}

let result = power(myNumb);
console.log(`Чи можна одержати число ${myNumb} шляхом зведення числа 3 у деякий ступінь?:`, result);
