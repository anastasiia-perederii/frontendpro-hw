//Створити масив, довжину та елементи якого задає користувач.

let userArrLength = +prompt("Введіть довжину масиву:");
let userArray = [];

for (let i = 0; i < userArrLength; i++) {
    let element = prompt("Введіть елемент " + (i + 1) + ":");
    userArray.push(element);
}
console.log("Ваш масив:", userArray);

//Відсортувати масив за зростанням.

userArray.sort(function(a, b) {
    return a - b;
});
console.log("Відсортований масив за зростанням:", userArray);

//Видалити елементи з масиву з 2 по 4 (включно!).

userArray.splice(1, 3);
console.log("Масив після видалення:", userArray);