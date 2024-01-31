const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let result = '';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
}

const key = generateKey(7, characters);
console.log(key);