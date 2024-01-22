let sign = prompt('Введіть операцію над числами: +, -, *, /');
let firstNumber = +prompt('Введіть перше число:');
let secondNumber = +prompt('Введіть друге число:');

// через switch...case
switch (true) {
    case sign === '+':
        console.log(`Ваше число: ${firstNumber + secondNumber}`);
        break;
    case sign === '-':
        console.log(`Ваше число: ${firstNumber - secondNumber}`);
        break;
    case sign === '*':
        console.log(`Ваше число: ${firstNumber * secondNumber}`);
        break;
    case sign === '/' && secondNumber !== 0:
        console.log(`Ваше число: ${firstNumber / secondNumber}`);
        break;
    default:
        console.log("Ви допустили помилку! Спробуйте ще раз.");
}

// через if...else
/*
if(sign === '+') {
    console.log(`Ваше число: ${firstNumber + secondNumber}`);
} else if(sign === '-') {
    console.log(`Ваше число: ${firstNumber - secondNumber}`);
} else if(sign === '*') {
    console.log(`Ваше число: ${firstNumber * secondNumber}`);
} else if(sign === '/') {
    console.log(`Ваше число: ${secondNumber === 0 ? 'Помилка! На 0 ділити не можна.' : firstNumber / secondNumber}`);
} else {
    console.log('Ви допустили помилку! Спробуйте ще раз.');
}
*/