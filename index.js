//Реалізуйте функцію generateKey(length, characters), 
//яка повертає рядок випадкових символів із набору characters довжиною length. span>


    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let length = 16

    for (let i = 0; i <= length - 1; i++) {
        result += characters[generateKey(0, characters.length)];
    }

    console.log(result);

function generateKey(min, max) {
    return Math.floor(Math.random() * max - min);
}