
// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  // Your code goes here...
  let result = '';
  for (let item of array) {
    if (array[array.length - 1] === item) {
      result += item;
    } else if (array[array.length - 2] === item) {
      result += item;
    } else {
      result += item + separator;
    }
  }
  return result;
}

// LOGIC FOR FUNCTION AS DESCRIBED BY MDN
//     VVVVVVVVVVVVVVVVVVVVVVVVVV

// export function joinToString(array, separator) {
//   // Your code goes here...
//   let result = '';
//   for (let item of array) {
//     if (array[array.length - 1] === item) {
//       result += item;
//     } else {
//       result += item + separator;
//     }
//   }
//   return result;
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
