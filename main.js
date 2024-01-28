const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(`Вхідний масив:`, arr);

// 1+/ Знайти суму та кількість позитивних елементів.
let newArr = arr.filter(function(elem) {
    return elem > 0;
});
console.log(newArr);

let sum = newArr.reduce(function (accumulator, currentValue) {
 return accumulator + currentValue;
},0)
 console.log(`Сума позитивних елементів ${sum}.`, `Кількість позитивних елементів ${newArr.length}`);

//2+ / Знайти мінімальний елемент масиву та його порядковий номер.

function minNumber(arr) {
    return arr.reduce((min, current) => {
        return current < min ? current : min;
    }, 0)}

console.log(`Мінімальний елемент масиву`, minNumber(arr));
console.log(`Індекс мінімального елементу масиву`, arr.indexOf(minNumber(arr)));

//3+ /  Знайти максимальний елемент масиву та його порядковий номер.
function maxNumber(arr) {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, 0)}

console.log(`Максимальний елемент масиву`, maxNumber(arr));
console.log(`Індекс максимального елементу масиву`, arr.indexOf(maxNumber(arr)));

//4+ / Визначити кількість негативних елементів.
let negative = 0;
arr.forEach(function (elem) {
    if(elem < 0) {
        negative++;
    }
});
console.log(`Кількість негативних елементів`, negative);


//5+ / Знайти кількість непарних позитивних елементів.
let a = 0;
arr.forEach(function (elem) {
    if(elem % 2 === 0 && elem < 0) {
        a++;
    }
});
console.log(`Кількість непарних позитивних елементів`, a);

//6+ / Знайти кількість парних позитивних елементів.

let b = 0;
arr.forEach(function (elem) {
    if(elem % 2 === 0 && elem > 0) {
        b++;
    }
});
console.log('Кількість парних позитивних елементів', b);

//7+ / Знайти суму парних позитивних елементів.

let newArr7 = arr.filter(function(elem) {
    return (elem % 2 === 0 && elem > 0);
});
console.log(newArr7);

let sum7 = newArr7.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
},0);
console.log(`Сума парних позитивних елементів`, sum7);

//8+ / Знайти суму непарних позитивних елементів.

let newArr8 = arr.filter(function(element) {
    return (element % 2 !== 0 && element > 0);
});
console.log(newArr8);

let sum8 = newArr8.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
},0);
console.log(`Сума непарних позитивних елементів`, sum8);

//9+ / Знайти добуток позитивних елементів.

let newArr9 = arr.filter(function(element) {
    return  element > 0;
});
console.log(newArr9);

let product = newArr9.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
},1);

console.log(`Добуток позитивних елементів`, product);


//10 / Знайти найбільший серед елементів масиву, останні обнулити.
function maxNumb(arr) {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, 0);
}

let result = arr.map(function(elem){
    return elem === maxNumb(arr) ? elem : 0;
})

console.log(result);
