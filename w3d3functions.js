// /* 
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// */
// function max(firstNum, secondNum){
  
//   if (firstNum > secondNum) {
//      console.log(firstNum );
//   } else {
//       console.log(secondNum);
//   }
//   return;

// }
  
  
//   /*
//   2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//   */
//   function maxOfThree (5, 10, 20) {
//     if(5 < 10 < 20) }{

//     }
//       return Math.max(5, 10, 20);
//     }  
  
  
//   /*
//   3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//   */
//   const isCharacterAVowel = (b) => {
//     let vowels = ['a','e','i','o','u'];
//     if (vowels.indexOf(b)) !==1){
//       return true; 
//     }
//     return false;
//   };
  
//   /*
//   4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//   */
  
//   function sum(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }
  
//   console.log(sum([1,2,3,4]));
  

//   function multiply(numbers) {
//     var total = 1;
//     for (var i = 0; i < numbers.length; i++) {
//       total = (total * numbers[i]);
//     }
//     return total;
//   }
//   console.log(multiply([1,2,3,4]));
  
//   /*
//   5.Write a function that returns the number of arguments passed to the function when called.

// const returnArg = () => {
//         return arguments.length;
//     }
//     console.log(returnArg('do' , 'not' , 'go' , 'in' , 'there');
//   /*
//   6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//   */
  
//   reverseString = (x) => {
//    x = x = ''
//     return x.split('').reverse().join('')
//   };
  
//   /*
//   7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//   */
//   findLongestWord = (arr) => {
//     let word = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (word.length < arr[i].length) {
//             word = arr[i];
//         }
//       }
//       return word;
//     }
//     onsole.log(findLongestWord(['bike', 'hat', 'pizza', 'bye', 'spinach']));
  
//   /*
//   8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
//   */
//   findLongestWord = (myarray) => {
//     // ADD YOUR CODE HERE
//     let longestWord = ''
//     for (var i = 0; i < myarray.length; i++) {
//         if (myarray[i].length > longestWord.length) {
//             longestWord = myarray[i]
//         }

//     }
//     return longestWord.length
// }
// console.log(findLongestWord(myArr);

  