
// CH01 ------------
// function reverseWords(sentence) {
//     const words =  sentence.split("").reverse().join("");
//     console.log(words);
// }

// const sentence = 'alchemy rocks gold';

// console.log(reverseWords(sentence));


// function titleCase(sentence) {
//     const words = sentence.toLowerCase().split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let letter = words[i].slice(0, 1);
//         letter = letter.toUpperCase();
//     }
// }

// const sentence = 'alchemy ROCKS goLD';

// console.log(titleCase(sentence));


// CH02 ----------
// function titleCase(sentence) {
//     return sentence
//     .toLowerCase()
//     .split(" ")
//     .map(letter => letter[0].toUpperCase() + letter.slice(1))
//     .join(" ");
// }

// const sentence = 'alchemy ROCKS goLD';

// console.log(titleCase(sentence));

// CH 02.1 ---------
// function oddishOrEvenish(number) {
//     const digits = number.split("")
//     .map(digit => parseInt(digit));
//     const total = digits.reduce((a, b) => a + b, 0);
//     return total % 2 === 0 ? 'Evenish' : 'Oddish';
// }

// console.log(oddishOrEvenish('121'))
// console.log(oddishOrEvenish('41'))

// CH 02.2
// function at(arr, idx) {
//         if (idx < 0) {
//             return arr[arr.length + Number(idx)]
//         } else {
//             return arr[idx];
//         }
    
// }

// console.log(at(['a', 'b', 'c', 'd', 'e'], '1'));
// console.log(at(['a', 'b', 'c', 'd', 'e'], '-2'));


// DATTO CodeSignal front end 
// let items = [{
//     id: 1,
//     name: 'First todo'
// }]

// let nextItemId = 2;

// function addItem(string) {
//     let obj = {
//         id: nextItemId,
//         name: string
//     }
    
//     items.push(obj)
//     nextItemId += 1;
// }
// addItem("Dani")
// addItem("Jonny")
// console.log(nextItemId);
// console.log(items);


// CH03 ------------------------
// function fizzBuzz(n) {
// let nums = [];
// for (let i = 1; i < n; i++) {

//     if (i % 15 === 0) {
//         nums.push("FizzBuzz");
//         i++;
//     }
//     if (i % 3 === 0) {
//         nums.push("Fizz");
//         i++;
//     }
//     if (i % 5 === 0) {
//         nums.push("Buzz");
//         i++;
//     } else {
//         nums.push(i);
//     }
// }
// return nums;
// }

// console.log(fizzBuzz(31));

// CH04 -----------------------
// function anagrams(wordOne, wordTwo) {
//     // split each word into an array and sort
//     // if wordOne i !== wordTwo i return false
//     const one = wordOne.split('').sort().join('');
//     const two = wordTwo.split('').sort().join('');
//     if (one !== two) return false;
//     return true;
    
// }

// console.log(anagrams('superintended', 'unpredestined'))
// console.log(anagrams('pictorialness', 'unpredestined'))

// CH05 ---------------
// function uniqueString(arr) {
//  const ordered = arr.map(e => [...new Set(e)].sort().join(''));
//  ordered.sort();
//  console.log(ordered);

//  for (let i = 0; i < ordered.length; i++) {
//      if (ordered[i].charAt(0) !== ordered[i + 1].charAt(0)){
//         return ordered[i + 1];
//      }
//  }
// }

// console.log(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))
// console.log(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));

function uniqueChar(string) {
//    split string into an array, sort the array
// iterate over Array, if i !== i + 1, return i
// else return '_'
const charArr = string.split('').sort();

for (let i = 0; i < charArr.length; i++) {
    const current = charArr[i];
    const prev = charArr[i - 1];
    const next = charArr[i + 1];
    if (current !== next && current !== prev) {
        return current;
    }
}
return '_';
}

console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabad'));
