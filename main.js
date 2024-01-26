
const arr = [1, 2, 3, 4, 5, 6, 7];

let removeElement = arr.findIndex(function(element){
    return element === 5;
});
console.log(`Індекс заданного числа:`, removeElement);
//Індекс заданного числа: 4

arr.splice(4,1);

console.log(`Результат:`, arr);
//Результат: [1, 2, 3, 4, 6, 7]
