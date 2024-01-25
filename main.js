
//1+/ Вивести на сторінку в один рядок через кому числа від 10 до 20.

let i = 9;
let arr1 = [];

do {
    i++;
    arr1.push(i);
} while (i < 20);

console.log(arr1);

//2+/ Вивести квадрати чисел від 10 до 20.

for(let i = 10; i <= 20; i++) {
    console.log(`Квадрат числа ${i} = ${i ** 2}`);
}

//3+/ Вивести таблицю множення на 7.

let a = 0;

while (a < 10) {
    a++;
    console.log(`7 * ${a} = ${7 * a}`);
}


//4+/ Знайти суму всіх цілих чисел від 1 до 15.
let b = 15;
let sum = 0;

for(let i = 1; i <= b; i++) {
    sum += i;
}
console.log(`Сумма цілих чисел від 1 до 15: ${sum}`);

//5+/ Знайти добуток усіх цілих чисел від 15 до 35.

let lastNumber = 35;
let mul = 1;

for(let i = 15; i <= lastNumber; i++) {
    mul = mul * i;
}

console.log(`Добуток цілих чисел від 15 до 35: ${BigInt(mul)}`);

//6 +/ Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let c = 500;
let avg = 0;
for (let i = 1; i <= c; i = i + 1) {
    avg += i;
}
avg = avg / c;
console.log('Середнє арифметичне всіх цілих чисел від 1 до 500:', avg);

//7+/ Вивести суму лише парних чисел в діапазоні від 30 до 80.

let myNumb = 80;
let double = 0;

for(let i = 30; i <= myNumb; i++) {
    if (i % 2 === 0) {
        double += i;
    }
}
console.log(`Сума парних чисел від 30 до 80: ${double}`);

//8/ Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let myN = 200;
let arr8 = [];

for(let i = 100; i <= myN; i++) {
    if (i % 3 === 0) {
        arr8.push(i);
    }
}
console.log(`Числа від 100 до 200 кратні 3: ${arr8}`);

//9+/ Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let naturalNumber = 25;
let arr9 = [];

for(let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        arr9.push(i);
    }
}
console.log(`Всі дільники числа ${naturalNumber}: ${arr9}`);

//10+/ Визначити кількість його парних дільників.
let myNumber = 20;
let counter = 0;

for(let i = 1; i <= myNumber; i++) {
    if (myNumber % i === 0 && i % 2 === 0) {
        counter++;
    }
}

console.log(`Кількість парних дільників числа ${myNumber}: ${counter}`);


//11+/ Знайти суму його парних дільників.

let myNum = 20;
let arr11 = [];
let doubleNumb = 0;

for(let i = 1; i <= myNum; i++) {
    if (myNum % i === 0 && i % 2 === 0) {
        arr11.push(i);
    }
}
for(let j = 0; j < arr11.length; j++) {
    doubleNumb += arr11[j];
}

//  другий метод додавання
/*
arr11.forEach((element) => {
    doubleNumb += element;
});
*/

console.log(`Сума парних дільників числа ${myNum}: ${doubleNumb}`);


//12+/ Надрукувати повну таблицю множення від 1 до 10.

for(let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
