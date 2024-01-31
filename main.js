
function degreeOfNumber(number, degree) {
    return degree === 1 ? number : number * degreeOfNumber(number, degree - 1);
}

const degreeOfNumb = degreeOfNumber(10,4);
console.log(degreeOfNumb);


