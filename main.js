//1

let myArr = ['abc', 'def', 25, 'ghi', 'jkl', 62, 'mno', 13, 72, 'pqr'];

function averageNumber() {
    let numb = myArr.filter(x => !isNaN(x));

    if (numb.length === 0) {
        return 0;
    }

    let sumOfNumbers = numb.reduce((previousValue, currentValue) => previousValue + currentValue);
    return sumOfNumbers / numb.length;
}
result = averageNumber();
console.log(result);


//2
/*
let x = +prompt('Enter first number:');
let sign = prompt('Enter sign: +, -, *, /, %, ^');
let y = +prompt('Enter second number:');

function doMath(x, sign, y) {

    switch (true) {
        case sign === '+':
            return console.log(`Your result: ${x + y}`);
        case sign === '-':
            return console.log(`Your result: ${x - y}`);
        case sign === '*':
            return console.log(`Your result: ${x * y}`);
        case sign === '/' && y !== 0:
            return console.log(`Your result: ${x / y}`);
        case sign === '%':
            return console.log(`Your result: ${(x / 100) * y}`);
        case sign === '^':
            return console.log(`Your result: ${Math.pow(x, y)}`);
        default:
            return console.log("Error! Try again.");
    }
}
doMath(x, sign, y);
*/

//3
/*
function myArr() {
    let userArray = [];
    let amountOfArr = +prompt('Задайте кількість внутрішніх масивів в основному масиві:');

    for(let i = 0; i < amountOfArr; i++) {
        userArray.push([]);

        let lengthOfArr = prompt('Задайте довжину масиву ' + (i + 1));

        for(let j = 0; j < lengthOfArr; j++) {
            let elem = prompt('Задайте елемент ' + (j + 1));
            userArray[i].push(elem);
        }
    }
    return userArray;
}
result = myArr();
console.log(result);
*/

//4
/*
let myString = prompt('Enter your string:')
let firstLetter = prompt('Enter first letter for delete:');
let secondLetter = prompt('Enter second letter for delete');

console.log(myString);
function deleteLetter (myString, [firstLetter, secondLetter]) {
    let myStr = myString.replaceAll(firstLetter, '').replaceAll(secondLetter, '');
        console.log(myStr)
}
deleteLetter(myString, [firstLetter, secondLetter]);
*/


