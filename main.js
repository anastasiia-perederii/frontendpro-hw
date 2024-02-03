function makeSum(count) {
  return   function addedNumber(numb) {
     return   count += numb;
    }
}

let sum3 = makeSum(5);
console.log( sum3(3) );

let sum8 = makeSum(5);
console.log( sum8(8) );