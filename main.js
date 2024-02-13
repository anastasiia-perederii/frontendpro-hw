//1

let myStrings = [];
myStrings.push(prompt('Enter something in first string:'));
myStrings.push(prompt('Enter something in second string:'));
myStrings.push(prompt('Enter something in third string:'));

console.log('Original:', myStrings);

let stringObjects = myStrings.map((value, index) => ({ value, index }));
stringObjects.sort(() => Math.random() > 0.5 ? 1 : -1);

let sortedString = stringObjects.map(obj => obj.value).join(' ');
console.log('Random:', sortedString);

//2

function numberToStr(numb, base) {

    let result = [];
        do {
            result.push(numb % base);
            numb = Math.floor(numb / base);
        } while (numb !== 0);
    return result.reverse();
}

const number = 12345;
const result = numberToStr(number, 10);
console.log(result);