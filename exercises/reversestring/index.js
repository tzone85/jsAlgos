// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;
}

reverse('thando');
module.exports = reverse;


// 1st solution

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// 2nd solution
//
// function reverse(str) {
//     let reversed = '';
//
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//
//     return reversed;
// }

// 3rd solution
//
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }