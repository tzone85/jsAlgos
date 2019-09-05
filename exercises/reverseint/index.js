// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt(n) {

    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

}

module.exports = reverseInt;


// my sol
//
// function reverseInt(n) {
//
//     if (Math.sign(n) === -1) {
//         let temp = n*-1;
//         return parseInt(temp.toString().split('').reverse().join('')) * -1;
//     }
//     return parseInt(n.toString().split('').reverse().join('');
//
// }
