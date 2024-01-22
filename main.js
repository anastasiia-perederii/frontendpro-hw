let firstNumber = +prompt('Введіть перше число:');
let secondNumber = +prompt('Введіть друге число:');

alert(`Ваш результат:
    ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
    ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
    ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
    ${firstNumber} / ${secondNumber} = ${secondNumber === 0 ? '- на 0 ділити не можна' : firstNumber / secondNumber }`
);

