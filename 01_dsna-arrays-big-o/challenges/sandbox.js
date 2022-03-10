// let testArr = ['a', 'b', 'c'];
// let testItem = 'd';

// function push(arr, item) {
//     arr[arr.length] = item;
//     return arr.length
// }


// // console.log('Challenge 1:', push(testArr, testItem));


// function pop(arr) {
//     item = arr[arr.length - 1];
//     arr.length = arr.length - 1;
//     return item;
// }

// console.log('Challenge 2:', pop(testArr), testArr);

// // -------
// let number = 50;

// function multiplesOfN(n) {
//     let result = [];
//     for(let i = n; i <= number; i=i+n) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(multiplesOfN(7));


// // --------
// function palindrome(string) {
//     const newString = string.toUpperCase().split(' ').join('');
//     const revString = newString.split('').reverse().join('');
    
//     if (newString !== revString) {
//         return false;
//     }
//     return true;
// }

// // console.log(palindrome('Ra  cec  ar'));

// -------------
// function unshift(arr, item) {
//     for (let i = arr.length; i>0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = item;
//     console.log(arr.length);    
//     console.log(arr);
// }

// unshift(['a', 'b', 'c'], 'd');

// -----------
// function shift(arr) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i + 1];
//         // arr.length - 1;
//     }
//     arr.length--;
//     console.log(arr);
//     return first;
// }

// console.log(shift(['a', 'b', 'c']));


// ------------
// function findIndex(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (item === arr[i]){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex([9, 8, 3], 3));
// console.log(findIndex([1, 2, 3], 4));

// --------------
// function hasDuplicates(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++){
//                 if (arr[i] === arr[j]){
//                     return true;
//                 }
            
//         }
//     }
//     return false;
// }

// console.time('nested loop');
// console.log(hasDuplicates(['j', 'o', 'j', 'w']));
// console.log(hasDuplicates(['m', 'b', 'p', 'x']));
// console.timeEnd('nested loop');


// // ---------------
// function hasDuplicates2(arr) {
//    const dict = {}
//    for (let i = 0; i < arr.length; i++) {
//        let item = arr[i];
//        if (!dict[item]) {
//            dict[item] = 1;
//        }
//        else {
//            return true;
//        }
//    }
//    return false;
// }

// console.time('dictionary');
// console.log(hasDuplicates2(['j', 'o', 'j', 'w']));
// console.log(hasDuplicates2(['m', 'b', 'b', 'x']));
// console.timeEnd('dictionary');


// ---------------
// function countLetters(letters) {
//     const dict = {};
//     for (let i = 0; i < letters.length; i++) {
//         if(dict[letters[i]]){
//             dict[letters[i]]++
//         }
//         else {
//             dict[letters[i]] = 1
//         }
//     }
//     return dict;
// }

// const letters = ['a', 'c', 'c', 'b', 'a', 'c', 'b', 'b', 'd', 'c']
// console.log(countLetters(letters));