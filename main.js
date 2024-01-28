
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeElement(arr, deleteNumb) {
    let index = arr.indexOf(deleteNumb);
        if (index !== -1) {
            arr.splice(index, 1);
        }
}

removeElement(arr,7);
console.log(arr);

